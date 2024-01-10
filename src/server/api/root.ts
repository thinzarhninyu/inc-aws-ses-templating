import { userRouter } from "@/server/api/routers/user";
import { organizationRouter } from "@/server/api/routers/organisation";
import { emailRouter } from "./routers/email";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  organization: organizationRouter,
  email: emailRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
