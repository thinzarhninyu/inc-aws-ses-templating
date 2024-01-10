import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const emailRouter = createTRPCRouter({

    sendEmail: publicProcedure
        .input(
            z.object({
                senderId: z.string(),
                subject: z.string(),
                content: z.string(),
                recipientsId: z.array(z.string()),
                quickResponseSettings: z.boolean()
            }),
        )
        .mutation(async ({ ctx, input }) => {
            try {
                let recipients = [];
                for (const recipientId of input.recipientsId) {
                    try {
                        const recipient = await ctx.db.user.findUnique({
                            where: {
                                id: recipientId,
                            },
                        });
                        if (recipient) {
                            recipients.push({ id: recipient.id });
                        }
                    } catch (error) {
                        console.error(error);
                        throw error;
                    }
                }
                const result = await ctx.db.email.create({
                    data: {
                        senderId: input.senderId,
                        content: input.content,
                        subject: input.subject,
                        recipients: {
                            connect: recipients,
                        },
                        quickResponseSettings: input.quickResponseSettings,
                    },
                });
                return result.id;
            } catch (error) {
                console.error(error);
                throw new Error("Failed to create email");
            }
        }),
});
