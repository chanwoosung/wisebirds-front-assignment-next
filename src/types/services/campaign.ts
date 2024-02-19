type CampaignObjective =
  | "WEBSITE_CONVERSIONS"
  | "WEBSITE_TRAFFIC"
  | "SALES"
  | "APP_INSTALLATION"
  | "LEAD"
  | "BRAND"
  | "VIDEO_VIEWS";

interface ICampaign {
  id: number;
  name: string;
  enabled: boolean;
  campaign_objective: CampaignObjective;
  impressions: number;
  clicks: number;
  ctr: number;
  video_views: number;
  vtr: number;
}

interface ICampaignResponse {
  content: ICampaign[];
  size: number;
  total_elements: number;
  total_pages: number;
  sort?: any;
  number_of_elements?: number;
  first?: boolean;
  empty?: boolean;
}
