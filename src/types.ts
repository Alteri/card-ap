export type ProjectProps = {
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

export type TaskProps = {
  id: number;
  projectId: number;
  complete: boolean;
  title: string;
  description: string;
};
