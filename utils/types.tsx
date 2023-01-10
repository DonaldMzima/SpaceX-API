type RocketType = {
  rocket_id: string
  rocket_name: string
  rocket_type: string
}
type LinkType = {
  mission_patch: string
  mission_patch_small: string
  reddit_campaign: string
  reddit_launch: string
  reddit_recovery: string
}
type LaunchSiteType = {
  site_id: string
  site_name: string
  site_name_long: string
}
export type LaunchType = {
  crew: null | any
  details: string
  flight_number: number
  is_tentative: boolean
  last_date_update: string
  last_ll_launch_date: null | any
  last_ll_update: null | any
  last_wiki_launch_date: string
  last_wiki_revision: string
  last_wiki_update: string
  launch_date_local: string
  launch_date_source: String
  launch_date_unix: number
  launch_date_utc: string
  launch_site: LaunchSiteType
  launch_success: boolean
  launch_window: number
  launch_year: string
  links: LinkType
  mission_id: any[]
  mission_name: string
  rocket: RocketType
  ships: string[]
}
