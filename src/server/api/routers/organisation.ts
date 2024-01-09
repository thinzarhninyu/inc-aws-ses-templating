import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
export const organizationRouter = createTRPCRouter({
  getAllOrganisations: publicProcedure.query(async ({ ctx }) => {
    try {
      const allOrganisation = await ctx.db.organization.findMany();
      return allOrganisation;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to retrieve all organisations");
    }
  }),

});
