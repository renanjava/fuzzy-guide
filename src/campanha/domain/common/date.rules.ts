export const DateRules = {
  MIN_TODAY: new Date(new Date().setHours(0, 0, 0, 0)),
  MAX_TODAY: new Date(new Date().setHours(23, 59, 59, 999)),
  TOMORROW: new Date(new Date().setDate(new Date().getDate() + 1)),
  YESTERDAY: new Date(new Date().setDate(new Date().getDate() - 1)),
  TODAY: new Date(),
}
