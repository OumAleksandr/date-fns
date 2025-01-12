// Same as fr
import formatDistance from '../fr/_lib/formatDistance/index'
import formatRelative from '../fr/_lib/formatRelative/index'
import localize from '../fr/_lib/localize/index'
import match from '../fr/_lib/match/index'
import type { Locale } from '../types'
// Unique for fr-CA
import formatLong from './_lib/formatLong/index'

/**
 * @category Locales
 * @summary French locale (Canada).
 * @language French
 * @iso-639-2 fra
 * @author Jean Dupouy [@izeau](https://github.com/izeau)
 * @author François B [@fbonzon](https://github.com/fbonzon)
 * @author Gabriele Petrioli [@gpetrioli](https://github.com/gpetrioli)
 */
const locale: Locale = {
  code: 'fr-CA',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,

  // Unique for fr-CA
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
}

export default locale
