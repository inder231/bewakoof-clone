import { Box, AspectRatio, Image, Flex, Text } from "@chakra-ui/react";
import React from "react";
const data = [
  {
    image:
      "https://images.bewakoof.com/t640/voyage-oversized-fit-t-shirt-520745-1658295402-1.jpg",
    name: "Men's Blue Voyage Grpahic Printed Oversized T-shirt",
    name_url: "https://www.bewakoof.com/p/voyage-oversized-fit-t-shirt-men",
    company: "Bewakoof",
    company_url: "https://www.bewakoof.com/p/voyage-oversized-fit-t-shirt-men",
    priceNew: "₹499",
    priceNew_url: "https://www.bewakoof.com/p/voyage-oversized-fit-t-shirt-men",
    pricePrev: "₹1299",
    pricePrev_url:
      "https://www.bewakoof.com/p/voyage-oversized-fit-t-shirt-men",
    tribePrice: "₹459For TriBe Members",
    tribePrice_url:
      "https://www.bewakoof.com/p/voyage-oversized-fit-t-shirt-men",
    liked: "https://images.bewakoof.com/web/Wishlist.svg",
    liked_url: "https://www.bewakoof.com/p/voyage-oversized-fit-t-shirt-men",
    fit: "OVERSIZED FIT",
    fit_url: "https://www.bewakoof.com/p/voyage-oversized-fit-t-shirt-men",
  },
];
const ProductCard = ({ data }) => {
  const { image, name, company, priceNew, pricePrev, tribePrice, liked, fit } =
    data;
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
