export const dashboardPages = [
  'home',
  'quiz',
  'facescanner',
  'chemicals',
  'health',
  'profile',
  'glowplay',
  'chatbot',
] as const

export type DashboardPage = (typeof dashboardPages)[number]

export const defaultDashboardPage: DashboardPage = 'home'
export const defaultAuthenticatedPage: DashboardPage = 'home'

export const isDashboardPage = (value: string | undefined): value is DashboardPage =>
  value !== undefined && dashboardPages.includes(value as DashboardPage)

export const dashboardPagePath = (page: DashboardPage) => `/dashboard/${page}`
