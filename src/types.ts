export type CardProps = {
  id: number;
  title: string;
  teamId: number;
  dueDate: string;
};

export type TeamProps = {
  id: number;
  name: string;
  color: string;
  iconId: number;
  members: {
    name: string;
    link: string;
  }[];
};
