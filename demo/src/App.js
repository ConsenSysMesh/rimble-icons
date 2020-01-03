import React, { useState } from "react";
import {
  ThemeProvider,
  theme,
  BaseStyles,
  Flex,
  Box,
  Field,
  Input,
  Heading
} from "rimble-ui";
import * as icons from "@rimble/icons";
import styled from "styled-components";

const Truncate = styled(Box)([], {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
});

const IconList = ({ filterValue }) => {
  console.log("filterValue", filterValue);
  return Object.keys(icons)
    .filter(key => key !== "Icon" && key.includes(filterValue))
    .map(key => (
      <Box
        width={"4rem"}
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
        <Truncate fontSize={"1rem"}>{key}</Truncate>
      </Box>
    ));
};

const FilteredIcons = () => {
  const [filterValue, setFilterValue] = useState("");
  return (
    <Box my={4}>
      <Field label="Filter icons">
        <Input
          type="text"
          placeholder="e.g. Eth"
          onChange={e => setFilterValue(e.target.value)}
          value={filterValue}
        />
      </Field>

      <Flex flexWrap="wrap">
        <IconList filterValue={filterValue} />
      </Flex>
    </Box>
  );
};

const App = props => {
  return (
    <ThemeProvider theme={theme} className="App">
      <BaseStyles>
        <Box m={4}>
          <Heading as="h1">Rimble Icons</Heading>
          <FilteredIcons icons={icons} />
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
};

export default App;
