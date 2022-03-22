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

export enum TeamType {
  Marketing = "Marketing",
  Design = "Design",
  Develop = "Develop",
  Data = "Data",
  UI = "UI",
}

export type TeamProps = {
  name: TeamType;
  members: {
    name: string;
    link: string;
  }[];
};
