import React from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Show,
  Text,
  VStack,
  Spacer,
  Flex,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineApple,
} from "react-icons/ai";
import { BsInstagram, BsPinterest, BsSnapchat } from "react-icons/bs";
const Footer = () => {
  return (
    <Box padding="1rem">
      <Show above="md">
        <Heading color="brand.100" ml="1rem">
          Bewakoof
        </Heading>
      </Show>
      <SimpleGrid
        columns={[1, null, 2, 4]}
        spacing="2rem"
        p="1rem"
        boxSizing="border-box"
      >
        <VStack align="left">
          <Text textStyle="h3" color="brand.100">
            CUSTOMER SERVICE
          </Text>
          <Spacer />
          <Text textStyle="h5">Contact Us</Text>
          <Text textStyle="h5">Track Order</Text>
          <Text textStyle="h5">Return Order</Text>
          <Text textStyle="h5">Cancel Order</Text>
        </VStack>
        <VStack align="left">
          <Text textStyle="h3" color="brand.100">
            COMPANY
          </Text>
          <Spacer />
          <Text textStyle="h5">About Us</Text>
          <Text textStyle="h5">We're Hiring</Text>
          <Text textStyle="h5">Terms & Conditions</Text>
          <Text textStyle="h5">Privacy Policy</Text>
          <Text textStyle="h5">Blog</Text>
        </VStack>
        <VStack align="left">
          <Text textStyle="h3" color="brand.100">
            CONECT WITH US
          </Text>
          <Spacer />
          <Text textStyle="h5">
            <AiOutlineFacebook /> 4.7 People Like this
          </Text>
          <Text textStyle="h5">
            <BsInstagram /> 1M Followers
          </Text>
          <Spacer />
          <Flex justify="space-around" width="120px">
            <AiOutlineTwitter />
            <BsPinterest />
            <BsSnapchat />
            <AiOutlineApple />
          </Flex>
        </VStack>
        <Box>
          <Text textStyle="h3" color="brand.100">
            KEEP UP TO DATE
          </Text>
          <Spacer />
          <Box>
            <Input
              borderBottom="3px solid #fdd835"
              variant="ghost"
              borderRadius="none"
              bg="none"
              width="120px"
              type="text"
            />
            <Button borderRadius="none" bg="brand.100">
              SUBSCRIBE
            </Button>
          </Box>
        </Box>
      </SimpleGrid>
      <Box h="3px" bgColor="white" w="98%" m=" 20px auto"></Box>
      <SimpleGrid
        columns={[1, null, 2, 4]}
        spacing="2rem"
        p="1rem"
        boxSizing="border-box"
      >
        <VStack align="left">
          <Text textStyle="h2">MEN'S CLOTHING</Text>
          <Spacer />
          <VStack align="left">
            <Text textStyle="h5">Top Wear</Text>
            <Text textStyle="h5">Men's New Arrivals</Text>
            <Text textStyle="h5">Men's Half Sleeve T-Shirts</Text>
            <Text textStyle="h5">Men's Hoodies</Text>
            <Text textStyle="h5">Sweetshirts</Text>
            <Text textStyle="h5">Men's Vests</Text>
          </VStack>
        </VStack>
        <VStack align="left">
          <Text textStyle="h2">WOMEN'S CLOTHING</Text>
          <VStack align="left">
            <Text textStyle="h5">Women's Top Wear</Text>
            <Text textStyle="h5">Women's New Arrivals</Text>
            <Text textStyle="h5">Women's Half Sleeve T-Shirts</Text>
            <Text textStyle="h5">Women's Hoodies</Text>
            <Text textStyle="h5">Sweetshirts</Text>
            <Text textStyle="h5">Women's Vests</Text>
          </VStack>
          <Spacer />
        </VStack>
        <VStack align="left">
          <Text textStyle="h2">MOBILE COVERS</Text>
          <VStack align="left">
            <Text textStyle="h5">Brands</Text>
            <Text textStyle="h5">Apple</Text>
            <Text textStyle="h5">Realme</Text>
            <Text textStyle="h5">Samsumg</Text>
            <Text textStyle="h5">Xiaomi</Text>
            <Text textStyle="h5">Onelus</Text>
            <Text textStyle="h5">Vivo</Text>
            <Text textStyle="h5">Oppo</Text>
          </VStack>
          <Spacer />
        </VStack>
        <VStack align="left">
          <Text textStyle="h2" color="brand.100">
            FANBOOK
          </Text>
          <Text textStyle="h2" color="brand.100">
            OFFERS
          </Text>
          <Text textStyle="h2" color="brand.100">
            SITEMAP
          </Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
