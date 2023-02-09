import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";
import { prisma } from "../../db";
export const userRouter = createTRPCRouter({
  changeName: protectedProcedure
  .input(z.object({ name: z.string().min(5) }))
  .mutation(async ({ ctx, input }) => {
    
    return prisma.user.update({ // Update
      where: { id: ctx.session.user.id }, // wie
      data: { name: input.name }, // nieuwe data
      select: { name: true }, // nieuwe name teruggeven
    })
  }),
});
