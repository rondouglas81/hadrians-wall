import type { User, Game } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Game } from "@prisma/client";

export function getGame({
  id,
  userId,
}: Pick<Game, "id"> & {
  userId: User["id"];
}) {
  return prisma.game.findFirst({
    where: { id, userId },
  });
}

export function getGames({ userId }: { userId: User["id"] }) {
  return prisma.game.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function createGame({
  title,
  userId,
}: Pick<Game, "title"> & {
  userId: User["id"];
}) {
  return prisma.game.create({
    data: {
      title,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteGame({
  id,
  userId,
}: Pick<Game, "id"> & { userId: User["id"] }) {
  return prisma.game.deleteMany({
    where: { id, userId },
  });
}
