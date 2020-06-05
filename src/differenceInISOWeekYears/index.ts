import toDate from '../toDate/index'
import differenceInCalendarISOWeekYears from '../differenceInCalendarISOWeekYears/index'
import compareAsc from '../compareAsc/index'
import subISOWeekYears from '../subISOWeekYears/index'

/**
 * @name differenceInISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `differenceInISOYears` to `differenceInISOWeekYears`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `addWeekYears`.
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @returns The number of full ISO week-numbering years
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * const result = differenceInISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 1
 */
export default function differenceInISOWeekYears(
  dirtyDateLeft: Date | number,
  dirtyDateRight: Date | number
) {
  const dateLeft = toDate(dirtyDateLeft)
  const dateRight = toDate(dirtyDateRight)

  const sign = compareAsc(dateLeft, dateRight)
  const difference = Math.abs(
    differenceInCalendarISOWeekYears(dateLeft, dateRight)
  )
  dateLeft = subISOWeekYears(dateLeft, sign * difference)

  // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
  // if last calendar ISO year is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastISOWeekYearNotFull = compareAsc(dateLeft, dateRight) === -sign
  const result = sign * (difference - (isLastISOWeekYearNotFull ? 1 : 0))
  // Prevent negative zero
  return result === 0 ? 0 : result
}