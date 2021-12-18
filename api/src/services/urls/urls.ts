import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const urls = () => {
  return db.uRL.findMany()
}

export const url = ({ id }: Prisma.URLWhereUniqueInput) => {
  return db.uRL.findUnique({
    where: { id },
  })
}

interface CreateUrlArgs {
  input: Prisma.URLCreateInput
}

export const createUrl = ({ input }: CreateUrlArgs) => {
  return db.uRL.create({
    data: input,
  })
}

interface UpdateUrlArgs extends Prisma.URLWhereUniqueInput {
  input: Prisma.URLUpdateInput
}

export const updateUrl = ({ id, input }: UpdateUrlArgs) => {
  return db.uRL.update({
    data: input,
    where: { id },
  })
}

export const deleteUrl = ({ id }: Prisma.URLWhereUniqueInput) => {
  return db.uRL.delete({
    where: { id },
  })
}

export const findBySlug = ({ slug }) => {
  console.log('services', slug)
  return db.uRL.findFirst({
    where: {
      slug,
    },
  })
}

export const incrementViews = ({ id, count }) => {
  return db.uRL.update({
    where: { id },
    data: { views: count },
  })
}
