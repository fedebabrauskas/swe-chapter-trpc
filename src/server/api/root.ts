import { exampleRouter } from "~/server/api/routers/example";
import { router } from "./trpc";

export const appRouter = router({
  example: exampleRouter,
});

export type AppRouter = typeof appRouter;
