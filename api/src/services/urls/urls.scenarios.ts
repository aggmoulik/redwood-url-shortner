import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.URLCreateArgs>({
  url: {
    one: { data: { fullURL: 'String', slug: 'String6804119' } },
    two: { data: { fullURL: 'String', slug: 'String8883744' } },
  },
})

export type StandardScenario = typeof standard
