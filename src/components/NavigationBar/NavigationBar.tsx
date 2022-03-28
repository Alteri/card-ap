import React from "react";
import Link from "next/link";
import {
  NavigationBarStyled,
  MenuList,
  MenuItem,
  MenuItemLink,
} from "./styled";
import { IconButton } from "../IconButton";
import { Plus } from "../Icon";
import { HomePageUrl, TeamsPageUrl } from "../../url";

export type NavigationBarProps = {
  modalAction: () => void;
};

export const NavigationBar = ({ modalAction }: NavigationBarProps) => {
  return (
    <NavigationBarStyled>
      <MenuList>
        <MenuItem>
          <Link href={HomePageUrl}>
            <MenuItemLink>Cards</MenuItemLink>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href={TeamsPageUrl}>
            <MenuItemLink>Teams</MenuItemLink>
          </Link>
        </MenuItem>
      </MenuList>
      <IconButton onClick={modalAction}>
        <Plus />
      </IconButton>
    </NavigationBarStyled>
  );
};
