import type { Locale } from '../types'
import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @category Locales
 * @summary Polish locale.
 * @language Polish
 * @iso-639-2 pol
 * @author Mateusz Derks [@ertrzyiks](https://github.com/ertrzyiks)
 * @author Just RAG [@justrag](https://github.com/justrag)
 * @author Mikolaj Grzyb [@mikolajgrzyb](https://github.com/mikolajgrzyb)
 * @author Mateusz Tokarski [@mutisz](https://github.com/mutisz)
 */
const locale: Locale = {
  code: 'pl',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4,
  },
}

export default locale
