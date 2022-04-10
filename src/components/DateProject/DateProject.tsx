import React from "react";
import { RowWithIcon } from "./styled";
import { GetDueDate } from "../utils/GetDueDate";
import { Text } from "../Text";
import { Clock } from "../Icon";
import { Colors } from "../Global";

export const DateProject = ({ dueDate }: { dueDate?: string }) => {
  return (
    <RowWithIcon>
      <Clock color={Colors.gray400} />
      <Text color={Colors.gray400} fontWeight="200" textType="caption">
        {GetDueDate(dueDate)}
      </Text>
    </RowWithIcon>
  );
};
