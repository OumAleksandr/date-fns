import type { Locale } from '../types'
import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @category Locales
 * @summary Icelandic locale.
 * @language Icelandic
 * @iso-639-2 isl
 * @author Derek Blank [@derekblank](https://github.com/derekblank)
 * @author Arnór Ýmir [@lamayg](https://github.com/lamayg)
 */
const locale: Locale = {
  code: 'is',
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
