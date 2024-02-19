export type CampaignObjective =
  | "WEBSITE_CONVERSIONS"
  | "WEBSITE_TRAFFIC"
  | "SALES"
  | "APP_INSTALLATION"
  | "LEAD"
  | "BRAND"
  | "VIDEO_VIEWS";

export const campaignObjectives: Record<CampaignObjective, string> = {
  WEBSITE_CONVERSIONS: "웹사이트 전환",
  WEBSITE_TRAFFIC: "웹사이트 트래픽",
  SALES: "판매",
  APP_INSTALLATION: "앱설치",
  LEAD: "리드",
  BRAND: "브랜드 인지도 및 도달 범위",
  VIDEO_VIEWS: "동영상 조회",
};

export interface ICampaign<T> {
  id: number;
  name: string;
  enabled: boolean;
  campaign_objective: CampaignObjective;
  impressions: T;
  clicks: T;
  ctr: T;
  video_views: T;
  vtr: T;
}

export interface ICampaignResponse<T> {
  content: ICampaign<T>[];
  size: number;
  total_elements: number;
  total_pages: number;
  sort?: any;
  number_of_elements?: number;
  first?: boolean;
  empty?: boolean;
}
