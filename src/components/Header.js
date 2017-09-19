import React from "react";
import { Toolbar, Space, Heading, NavItem, Button } from "rebass";
import Icon from "react-geomicons";
import * as colors from "../constants/colors";

const Header = ({ wordCount, fileName, edit, toggleEdit }) => (
  <div>
    <Toolbar
      style={{
        backgroundColor: colors.GRAY
      }}
    >
      <Heading level={3}>SIHOT MD.edit</Heading>
      <Space auto />
      <Button
        children={edit === true ? "VIEW ONLY" : "EDIT"}
        onClick={() => toggleEdit()}
      />
      <NavItem
        onClick={() => window.alert("More options will be available soon!")}
      >
        <Icon height="1.5em" name="cog" width="1.5em" />
      </NavItem>
      <Space />
    </Toolbar>
    <Toolbar
      style={{
        backgroundColor: colors.LIGHT_GRAY,
        height: "40px",
        minHeight: "40px",
        color: colors.GRAY
      }}
    >
      <span>{fileName || "Untitled Document"}</span>
      <Space auto />
      <span style={{ color: colors.VERY_LIGHT_GRAY }}>words:</span>
      <Space />
      <span>{wordCount}</span>
      <Space />
    </Toolbar>
  </div>
);

export default Header;
