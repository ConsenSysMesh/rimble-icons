import React from "react";
import { Flex, Box } from "rimble-ui";
import * as icons from "@rimble/icons";
import styled from "styled-components";

const Truncate = styled(Box)([], {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
});

const iconList = Object.keys(icons)
  .filter(key => key !== "Icon")
  .map(key => (
    <Box
      width={'4rem'}
      key={key}
      title={key}
      m={3}
      style={{
        textAlign: "center"
      }}
    >
      {React.createElement(icons[key], {
        title: key,
        size: 48
      })}
      <Truncate fontSize={'1rem'}>{key}</Truncate>
    </Box>
  ));

const App = props => {
  console.log("icons", icons);
  return (
    <div className="App">
      <Flex flexWrap="wrap">{iconList}</Flex>
    </div>
  );
};

export default App;
