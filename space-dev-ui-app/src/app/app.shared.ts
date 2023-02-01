// INTERFACES

export interface LaunchSummary {
    id: string;
    name: string;
    status: Status,
    window_start: Date
    window_end: Date
}

export interface LaunchDetails extends LaunchSummary {
  agency: Agency,
  rocket: Rocket
  pad: Pad
}

// API GENERATED INTERFACES
// FROM https://ll.thespacedevs.com/2.2.0/swagger/#/

export interface Status {
    id: number;
    name: string;
    abbrev: string;
    description: string;
}

export interface LaunchServiceProvider {
    id: number;
    url: string;
    name: string;
    type: string;
}

export interface Configuration {
    id: number;
    url: string;
    name: string;
    family: string;
    full_name: string;
    variant: string;
}

export interface Rocket {
    id: number;
    configuration: Configuration;
}

export interface Orbit {
    id: number;
    name: string;
    abbrev: string;
}

export interface Mission {
    id: number;
    name: string;
    description: string;
    launch_designator?: any;
    type: string;
    orbit: Orbit;
}

export interface Location {
    id: number;
    url: string;
    name: string;
    country_code: string;
    map_image: string;
    total_launch_count: number;
    total_landing_count: number;
}

export interface Pad {
    id: number;
    url: string;
    agency_id?: any;
    name: string;
    info_url?: any;
    wiki_url: string;
    map_url: string;
    latitude: string;
    longitude: string;
    location: Location;
    map_image: string;
    total_launch_count: number;
    orbital_launch_attempt_count: number;
}

export interface RootObject {
    id: string;
    url: string;
    slug: string;
    name: string;
    status: Status;
    last_updated: Date;
    net: Date;
    window_end: Date;
    window_start: Date;
    probability?: any;
    holdreason: string;
    failreason: string;
    hashtag?: any;
    launch_service_provider: LaunchServiceProvider;
    rocket: Rocket;
    mission: Mission;
    pad: Pad;
    webcast_live: boolean;
    image: string;
    infographic?: any;
    program: any[];
    orbital_launch_attempt_count: number;
    location_launch_attempt_count: number;
    pad_launch_attempt_count: number;
    agency_launch_attempt_count: number;
    orbital_launch_attempt_count_year: number;
    location_launch_attempt_count_year: number;
    pad_launch_attempt_count_year: number;
    agency_launch_attempt_count_year: number;
}

export interface Update {
  id: number;
  profile_image: string;
  comment: string;
  info_url: string;
  created_by: string;
  created_on: Date;
}

export interface LaunchServiceProvider {
  id: number;
  url: string;
  name: string;
  featured: boolean;
  type: string;
  country_code: string;
  abbrev: string;
  description: string;
  administrator: string;
  founding_year: string;
  launchers: string;
  spacecraft: string;
  launch_library_url: string;
  total_launch_count: number;
  consecutive_successful_launches: number;
  successful_launches: number;
  failed_launches: number;
  pending_launches: number;
  consecutive_successful_landings: number;
  successful_landings: number;
  failed_landings: number;
  attempted_landings: number;
  info_url: string;
  wiki_url: string;
  logo_url: string;
  image_url: string;
  nation_url: string;
}

export interface Manufacturer {
  id: number;
  url: string;
  name: string;
  featured: boolean;
  type: string;
  country_code: string;
  abbrev: string;
  description: string;
  administrator: string;
  founding_year: string;
  launchers: string;
  spacecraft: string;
  launch_library_url: string;
  total_launch_count: number;
  consecutive_successful_launches: number;
  successful_launches: number;
  failed_launches: number;
  pending_launches: number;
  consecutive_successful_landings: number;
  successful_landings: number;
  failed_landings: number;
  attempted_landings: number;
  info_url: string;
  wiki_url: string;
  logo_url: string;
  image_url: string;
  nation_url: string;
}

export interface Agency {
  id: number;
  url: string;
  name: string;
  type: string;
}

export interface Program {
  id: number;
  url: string;
  name: string;
  description: string;
  agencies: Agency[];
  image_url: string;
  start_date: Date;
  end_date?: any;
  info_url: string;
  wiki_url: string;
  mission_patches: any[];
}

export interface Configuration {
  id: number;
  url: string;
  name: string;
  active: boolean;
  reusable: boolean;
  description: string;
  family: string;
  full_name: string;
  manufacturer: Manufacturer;
  program: Program[];
  variant: string;
  alias: string;
  min_stage: number;
  max_stage: number;
  length: number;
  diameter: number;
  maiden_flight: string;
  launch_cost: string;
  launch_mass: number;
  leo_capacity: number;
  gto_capacity: number;
  to_thrust: number;
  apogee: number;
  vehicle_range?: any;
  image_url: string;
  info_url: string;
  wiki_url: string;
  total_launch_count: number;
  consecutive_successful_launches: number;
  successful_launches: number;
  failed_launches: number;
  pending_launches: number;
}

export interface Launcher {
  id: number;
  url: string;
  details: string;
  flight_proven: boolean;
  serial_number: string;
  status: string;
  image_url: string;
  successful_landings: number;
  attempted_landings: number;
  flights: number;
  last_launch_date: Date;
  first_launch_date: Date;
}

export interface Location {
  id: number;
  name: string;
  abbrev: string;
  description: string;
  location?: any;
  successful_landings: number;
}

export interface Type {
  id: number;
  name: string;
  abbrev: string;
  description: string;
}

export interface Landing {
  id: number;
  attempt: boolean;
  success: boolean;
  description: string;
  location: Location;
  type: Type;
}

export interface PreviousFlight {
  id: string;
  name: string;
}

export interface LauncherStage {
  id: number;
  type: string;
  reused: boolean;
  launcher_flight_number: number;
  launcher: Launcher;
  landing: Landing;
  previous_flight_date: Date;
  turn_around_time_days: number;
  previous_flight: PreviousFlight;
}

export interface Rocket {
  id: number;
  configuration: Configuration;
  launcher_stage: LauncherStage[];
  spacecraft_stage?: any;
}

export interface Orbit {
  id: number;
  name: string;
  abbrev: string;
}

export interface Mission {
  id: number;
  name: string;
  description: string;
  launch_designator?: any;
  type: string;
  orbit: Orbit;
}

export interface Location2 {
  id: number;
  url: string;
  name: string;
  country_code: string;
  map_image: string;
  total_launch_count: number;
  total_landing_count: number;
}

export interface Pad {
  id: number;
  url: string;
  agency_id?: any;
  name: string;
  info_url?: any;
  wiki_url: string;
  map_url: string;
  latitude: string;
  longitude: string;
  location: Location;
  map_image: string;
  total_launch_count: number;
  orbital_launch_attempt_count: number;
}

export interface InfoURL {
  priority: number;
  title: string;
  description: string;
  feature_image?: any;
  url: string;
}

export interface VidURL {
  priority: number;
  title: string;
  description: string;
  feature_image: string;
  url: string;
}

export interface Agency2 {
  id: number;
  url: string;
  name: string;
  type: string;
}

export interface MissionPatch {
  id: number;
  name: string;
  priority: number;
  image_url: string;
  agency: Agency2;
}

export interface RootObject {
  id: string;
  url: string;
  slug: string;
  flightclub_url: string;
  r_spacex_api_id?: any;
  name: string;
  status: Status;
  last_updated: Date;
  updates: Update[];
  net: Date;
  window_end: Date;
  window_start: Date;
  probability?: any;
  holdreason: string;
  failreason: string;
  hashtag?: any;
  launch_service_provider: LaunchServiceProvider;
  rocket: Rocket;
  mission: Mission;
  pad: Pad;
  infoURLs: InfoURL[];
  vidURLs: VidURL[];
  webcast_live: boolean;
  image: string;
  infographic?: any;
  program: any[];
  orbital_launch_attempt_count: number;
  location_launch_attempt_count: number;
  pad_launch_attempt_count: number;
  agency_launch_attempt_count: number;
  orbital_launch_attempt_count_year: number;
  location_launch_attempt_count_year: number;
  pad_launch_attempt_count_year: number;
  agency_launch_attempt_count_year: number;
  mission_patches: MissionPatch[];
}




