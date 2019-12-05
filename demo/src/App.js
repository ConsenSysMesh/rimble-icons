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
// import * as icons from "@rimble/icons";
import * as mdIcons from "@rimble/icons/es/md";
import * as cryptoIcons from "@rimble/icons/es/crypto";
// import { default as Star2 } from "@rimble/icons/es/md/Star";
// import { Star as Star3 } from "@rimble/icons/es/md";
import styled from "styled-components";

const Truncate = styled(Box)([], {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
});

const IconList = ({ filterValue, icons }) => {
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

const FilteredIcons = ({ icons, placeholder }) => {
  const [filterValue, setFilterValue] = useState("");
  return (
    <Box my={4}>
      <Field label="Filter icons">
        <Input
          type="text"
          placeholder={`e.g. ${placeholder}`}
          onChange={e => setFilterValue(e.target.value)}
          value={filterValue}
        />
      </Field>

      <Flex flexWrap="wrap">
        <IconList filterValue={filterValue} icons={icons} />
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

          <Heading as="h2">Crypto</Heading>
          <FilteredIcons icons={cryptoIcons} placeholder={"Eth"} />

          <Heading as="h2">Material</Heading>
          <FilteredIcons icons={mdIcons} placeholder={"Star"} />
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
};

export default App;
