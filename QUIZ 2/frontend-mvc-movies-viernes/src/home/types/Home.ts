export default interface Home {
  title: string
  subtitle: string
  featuredMessage: string
  stats: {
    totalMovies: number
    newThisWeek: number
    topRated: number
  }
  quickLinks: Array<{
    text: string
    action: string
  }>
}
