import formatDistance from '../de/_lib/formatDistance/index'
import formatLong from '../de/_lib/formatLong/index'
import formatRelative from '../de/_lib/formatRelative/index'
import match from '../de/_lib/match/index'
import type { Locale } from '../types'
// difference to 'de' locale
import localize from './_lib/localize/index'

/**
 * @category Locales
 * @summary German locale (Austria).
 * @language German
 * @iso-639-2 deu
 * @author Christoph Tobias Stenglein [@cstenglein](https://github.com/cstenglein)
 */
const locale: Locale = {
  code: 'de-AT',
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
