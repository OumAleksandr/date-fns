import type { Locale } from '../types'
import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @category Locales
 * @summary Portuguese locale (Brazil).
 * @language Portuguese
 * @iso-639-2 por
 * @author Lucas Duailibe [@duailibe](https://github.com/duailibe)
 * @author Yago Carballo [@yagocarballo](https://github.com/YagoCarballo)
 */
const locale: Locale = {
  code: 'pt-BR',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
}

export default locale
