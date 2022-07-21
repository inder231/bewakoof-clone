import {
  Box,
  Text,
  Center,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box bg="white" color="black">
      <Box>
        <Show above="md">
          <Flex bg="#E2E8F0" p="4px 24px" h="24px">
            <Center>
              <Text textStyle="base">Offers</Text>
              <Text textStyle="base">Fanbood</Text>
              <Text textStyle="base">Download App</Text>
              <Text textStyle="base">TriBe Membership</Text>
            </Center>
            <Spacer />
            <Center>
              <Text textStyle="base">Contact Us</Text>
              <Text textStyle="base">Track Order</Text>
            </Center>
          </Flex>
        </Show>
      </Box>
      <hr />
    </Box>
  );
};

export default Header;
