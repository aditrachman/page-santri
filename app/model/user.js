
import { prisma } from "~/utils/db.server";

export async function getUsers() {
  return prisma.user.findMany();
}
