export interface Team {
  "team_id": number;
  "name": string;
  "code": null | number;
  "logo": string;
  "country": string;
  "is_national": boolean;
  "founded": number;
  "venue_name": string;
  "venue_surface": string;
  "venue_address": string;
  "venue_city": string;
  "venue_capacity": number;
}

export type TeamFields = keyof Team;

