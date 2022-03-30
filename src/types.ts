export enum TaskType {
  AppDevelopment = "App Development",
  WebDesign = "Web Design",
  Business = "Business",
  CampaignStore = "Campaign Store",
}

export enum TeamType {
  Marketing = "Marketing",
  Design = "Design",
  Develop = "Develop",
  Data = "Data",
  UI = "UI",
}

export type CardProps = {
  title: string;
  group: TaskType;
  team: string;
  dueDate: string;
};

export type TeamProps = {
  name: string;
  members: {
    name: string;
    link: string;
  }[];
};
