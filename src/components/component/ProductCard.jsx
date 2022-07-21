import { Box, AspectRatio, Image, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FcRating } from "react-icons/fc";
const ProductCard = ({ data }) => {
  const {
    image,
    name,
    company,
    priceNew,
    pricePrev,
    tribeMember,
    rating,
    liked,
    fit,
  } = data;
  return (
    <Box maxW="250px" borderRadius="sm" bg="gray.100" position="relative">
      <Box
        fontSize="10px"
        fontWeight="bold"
        bg="gray.300"
        display="inline"
        position="absolute"
        zIndex="1"
      >
        {fit}
      </Box>
      <AspectRatio w="100%" _hover={{width:"100.5%",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} ratio={2 / 3}>
        <Image src={image} alt="naruto" objectFit="cover" />
      </AspectRatio>
      <Flex align="center"
        position="absolute"
        bottom="40%"
        bg="lightgray"
        p="2px 4px"
        borderRadius="base"
      >
        {rating}
        <FcRating />
      </Flex>
      <Flex p="2" boxSizing="border-box">
        <Box>
          <Text fontSize="10px" color="gray.900" fontWeight="semibold">
            {company}
          </Text>
          <Text textStyle="h5" color="gray.500">
            {name}
          </Text>
          <Flex align="baseline">
            <Text m="1">{priceNew}</Text>
            <Text
              m="1"
              fontSize="8px"
              color="gray.500"
              textDecoration="line-through"
            >
              {pricePrev}
            </Text>
          </Flex>
          <Text textStyle="h4">{tribeMember}</Text>
        </Box>
        <Box>
          <Image src={liked} alt="heart" />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductCard;
