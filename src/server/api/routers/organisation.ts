import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const organizationRouter = createTRPCRouter({

  getAllOrganisations: protectedProcedure.query(async ({ ctx }) => {
    try {
      const allOrganisation = await ctx.db.organization.findMany();
      console.log(allOrganisation);
      return allOrganisation;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to retrieve all organisations");
    }
  }),

  getAllUsersByOrganisation: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      try {
        const allUsers = await ctx.db.userOrganization.findMany({
          where: {
            organizationId: input.id,
          },
          include: {
            user: true,
          },
        });
        return allUsers;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to retrieve all users by organisation");
      }
    }),
});
