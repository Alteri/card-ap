import React, { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProjects, fetchTeams } from "../../fetch";
import { PageStyled } from "./styled";

export type PageProps = {
  children: ReactNode;
};

export const Page = ({ children }: PageProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchTeams());
  }, [dispatch]);

  return <PageStyled>{children}</PageStyled>;
};
