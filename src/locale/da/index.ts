import type { Locale } from '../types'
import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @category Locales
 * @summary Danish locale.
 * @language Danish
 * @iso-639-2 dan
 * @author Mathias Wøbbe [@MathiasKandelborg](https://github.com/MathiasKandelborg)
 * @author Anders B. Hansen [@Andersbiha](https://github.com/Andersbiha)
 * @author [@kgram](https://github.com/kgram)
 * @author [@stefanbugge](https://github.com/stefanbugge)
 */
const locale: Locale = {
  code: 'da',
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
