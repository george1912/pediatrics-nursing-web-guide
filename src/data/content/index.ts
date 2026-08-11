import type { ContentBlock } from '../types'
import { CONTENT as endocrine } from './endocrine'
import { CONTENT as gi } from './gi'
import { CONTENT as injury } from './injury'
import { CONTENT as maltreatment } from './maltreatment'
import { CONTENT as misc } from './misc'
import { CONTENT as msk } from './msk'
import { CONTENT as neuroVision } from './neuroVision'
import { CONTENT as renal } from './renal'
import { CONTENT as repro } from './repro'

export const contentByTopicId: Record<string, ContentBlock[]> = {
  ...gi,
  ...renal,
  ...repro,
  ...endocrine,
  ...neuroVision,
  ...msk,
  ...injury,
  ...maltreatment,
  ...misc,
}

export function getTopicContent(id: string): ContentBlock[] {
  return contentByTopicId[id] ?? []
}
