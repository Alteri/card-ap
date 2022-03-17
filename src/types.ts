export enum TaskType {
  AppDevelopment = "App Development",
  WebDesign = "Web Design",
  Business = "Business",
  CampaignStore = "Campaign Store",
}

export type CardProps = {
  title: string;
  group: TaskType;
};
