import { faker } from "@faker-js/faker";

// 무작위 캠페인 목표를 반환하는 함수
const getRandomCampaignObjective = (): CampaignObjective => {
  const objectives: CampaignObjective[] = [
    "WEBSITE_CONVERSIONS",
    "WEBSITE_TRAFFIC",
    "SALES",
    "APP_INSTALLATION",
    "LEAD",
    "BRAND",
    "VIDEO_VIEWS",
  ];
  const randomIndex = Math.floor(Math.random() * objectives.length);
  return objectives[randomIndex];
};

// 무작위 캠페인 데이터 생성 함수
const generateRandomCampaign = (id: number): ICampaign => {
  const isEnabled = !!((Math.random() * 2) | 0);
  return {
    id: id,
    name: faker.lorem.words(),
    enabled: isEnabled,
    campaign_objective: getRandomCampaignObjective(),
    impressions: faker.number.int(),
    clicks: faker.number.int(),
    ctr: faker.number.float({ min: 0, max: 1, multipleOf: 4 }),
    video_views: faker.number.int(),
    vtr: faker.number.float({ min: 0, max: 1, multipleOf: 5 }),
  };
};

// 100개의 임의의 캠페인 데이터 생성
const generateRandomCampaignData = (): ICampaignResponse => {
  const content: ICampaign[] = [];
  const numCampaigns = 100;
  for (let i = 1; i <= numCampaigns; i++) {
    content.push(generateRandomCampaign(i));
  }
  return {
    content: content,
    size: numCampaigns,
    total_elements: numCampaigns,
    total_pages: 1,
  };
};

// 임의의 캠페인 데이터 생성
export const campaignData: ICampaignResponse = generateRandomCampaignData();