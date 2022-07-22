import { Box, AspectRatio, Image, Flex, Text } from "@chakra-ui/react";
import React from "react";
const ProductCard = ({ data }) => {
  const { image, name, company, priceNew, pricePrev, tribePrice, liked, fit } =
    data;
  return (
    <Box
      maxW="250px"
      borderRadius="sm"
      bg="gray.100"
      position="relative"
      _hover={{ width: "100.5%" }}
    >
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
      <AspectRatio w="100%" ratio={2 / 3}>
        <Image src={image} alt="naruto" objectFit="cover" />
      </AspectRatio>
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
          <Text textStyle="h4">{tribePrice}</Text>
        </Box>
        <Box>
          <Image src={liked} alt="heart" />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductCard;
