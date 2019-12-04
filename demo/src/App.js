import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  theme,
  BaseStyles,
  Flex,
  Text,
  Heading,
  Input
} from "rimble-ui";
import * as icons from "@rimble/icons";

const Truncate = styled(Text)([], {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
});

const IconList = ({ filterValue }) => {
  console.log("filterValue", filterValue);
  return Object.keys(icons)
    .filter(key => key !== "Icon" && key.includes(filterValue))
    .map(key => (
      <Text
        key={key}
        title={key}
        width={'5rem'}
        m={3}
        textAlign={'center'}
      >
        {React.createElement(icons[key], {
          title: key,
          size: 48
        })}
        <Truncate lineHeight={'1rem'} fontSize={1}>
          {key}
        </Truncate>
      </Text>
    ));
};

const FilteredIcons = () => {
  const [filterValue, setFilterValue] = useState("");
  return (
    <>
      <Input
        type="search"
        placeholder="Filter…"
        onChange={e => setFilterValue(e.target.value)}
        value={filterValue}
        width={'100%'}
        maxWidth={'50%'}
        mx={'auto'}
        mb={5}
      />
      <Flex flexWrap={'wrap'} justifyContent={'center'} >
        <IconList filterValue={filterValue} />
      </Flex>
    </>
  );
};

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles>
        <Flex
          flexDirection={'column'}
          alignItems={'center'}
          maxWidth={'80vw'}
          mx={'auto'}
        >
          <Heading as={'h1'} py={5}>
            Rimble Icons
          </Heading>
          <FilteredIcons icons={icons} />
        </Flex>
      </BaseStyles>
    </ThemeProvider>
  );
};

export default App;
