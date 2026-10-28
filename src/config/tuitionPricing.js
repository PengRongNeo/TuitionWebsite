/** Shared tuition pricing — keep in sync with homepage class list and subject pages. */

export const LESSONS_PER_MONTH = 4
export const HOURS_PER_LESSON = 2
export const HOURS_PER_MONTH = LESSONS_PER_MONTH * HOURS_PER_LESSON

export const PRICING_BASIS_NOTE =
  'Monthly fees are calculated based on 4 lessons per month, with each lesson lasting 2 hours (8 hours total).'

const SECONDARY_RATES = [
  { id: 'sec1', level: 'Sec 1', label: 'Secondary 1', hourly: 30 },
  { id: 'sec2', level: 'Sec 2', label: 'Secondary 2', hourly: 32 },
  { id: 'sec3', level: 'Sec 3', label: 'Secondary 3', hourly: 35 },
  { id: 'sec4', level: 'Sec 4', label: 'Secondary 4', hourly: 40 },
]

export function monthlyFeeFromHourly(hourly) {
  return hourly * HOURS_PER_MONTH
}

function enrich(levelRow) {
  const monthly = monthlyFeeFromHourly(levelRow.hourly)
  return {
    ...levelRow,
    monthly,
    hourlyDisplay: `$${levelRow.hourly}`,
    monthlyDisplay: `$${monthly}`,
  }
}

export const SECONDARY_PRICING = SECONDARY_RATES.map(enrich)

export function pricingForLevels(...ids) {
  return SECONDARY_PRICING.filter((row) => ids.includes(row.id))
}

export const LOWER_SECONDARY_PRICING = pricingForLevels('sec1', 'sec2')
export const UPPER_SECONDARY_PRICING = pricingForLevels('sec3', 'sec4')

/** Homepage Subjects & Rates section (secondary rows use shared hourly rates) */
export const HOME_CLASS_RATES = [
  { level: 'P1–P2', subjects: ['English', 'Math'], hourly: 22 },
  { level: 'P3–P4', subjects: ['English', 'Math', 'Science'], hourly: 25 },
  { level: 'P5–P6', subjects: ['English', 'Math', 'Science'], hourly: 28 },
  { level: 'Sec 1', subjects: ['Math', 'Science'], hourly: 30 },
  { level: 'Sec 2', subjects: ['Math', 'Science'], hourly: 32 },
  { level: 'Sec 3', subjects: ['E-Math', 'A-Math', 'Physics', 'Chemistry'], hourly: 35 },
  { level: 'Sec 4', subjects: ['E-Math', 'A-Math', 'Physics', 'Chemistry'], hourly: 40 },
]

export function homeRateDisplay(hourly) {
  return `$${hourly}`
}
