import {
  Box,
  Heading,
  Show,
  Flex,
  Divider,
  SimpleGrid,
  Text,
  Image,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { BiDownArrow } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cartList.products);
  console.log(cartProducts);
  return (
    <Box bg="white" color="black">
      <Show above="md">
        <Flex
          w="90%"
          m="auto"
          bg="white"
          p="1rem"
          color="black"
          align="center"
          justify="flex-start"
        >
          <Heading>Bewakoof</Heading>
        </Flex>
        <Divider h="2px" bg="gray" />
      </Show>
      <Text textAlign="left" w="80%" m="auto">
        <b>My Bag </b> {cartProducts.length}
        {cartProducts.lenght === 1 ? " item" : " items"}
      </Text>
      <SimpleGrid columns={[1, 1, 2, 2]}>
        <Box>
          {cartProducts.map((ele) => (
            <Box key="ele.id">
              <Box
                border="1px solid lightgray"
                borderRadius="base"
                w="400px"
                fontSize="13px"
                m="auto"
              >
                <Flex p="2" bg="yellow.200" align="center">
                  <FaTruck color="red" />
                  <Text m="1"> Yay! You get FREE delivery on this order</Text>
                </Flex>
                <Flex justify="space-between" p="1" bg="red.100">
                  <Box>
                    <Text>
                      <b>Buy 2 For 999 offer available</b>
                    </Text>
                    <Text>Add 1 more item to avail this offer</Text>
                  </Box>
                  <Button color="red">Add items</Button>
                </Flex>
                <Flex justify="space-between" p="2rem">
                  <Box color="gray.400">
                    <Text>Shaded Spurce Short Collar Tipping Polo</Text>
                    <Flex align="baseline">
                      <Text
                        m="1"
                        color="black"
                        fontSize="15px"
                        fontWeight="bold"
                      >
                       {ele.priceNew}
                      </Text>
                      <Text m="1" fontSize="8px" textDecoration="line-through">
                       {ele.pricePrev}
                      </Text>
                    </Flex>
                    <Text color="lightgreen">You saved 1150!</Text>
                    <Menu>
                      <MenuButton
                        fontSize="12px"
                        border="1px solid lightgray"
                        m="1rem"
                        as={Button}
                        rightIcon={<BiDownArrow />}
                      >
                        Size : S
                      </MenuButton>
                      <MenuList>
                        <MenuItem>S</MenuItem>
                        <MenuItem>M</MenuItem>
                        <MenuItem>L</MenuItem>
                        <MenuItem>XL</MenuItem>
                        <MenuItem>2XL</MenuItem>
                        <MenuItem>3XL</MenuItem>
                      </MenuList>
                    </Menu>
                    <Menu>
                      <MenuButton
                        fontSize="12px"
                        border="1px solid lightgray"
                        m="1"
                        as={Button}
                        rightIcon={<BiDownArrow />}
                      >
                        Qty: 1
                      </MenuButton>
                      <MenuList>
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
                        <MenuItem>4</MenuItem>
                        <MenuItem>5</MenuItem>
                        <MenuItem>6</MenuItem>
                        <MenuItem>7</MenuItem>
                        <MenuItem>8</MenuItem>
                        <MenuItem>9</MenuItem>
                        <MenuItem>10</MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                  <Box>
                    <Image
                      w="120px"
                      src={ele.image}
                    />
                  </Box>
                </Flex>
                <Divider h="2px" bg="gray.300" />
                <Flex>
                  <Button borderRadius="none" borderRight="2px solid lightgray">
                    Remove
                  </Button>
                  <Button borderRadius="none" borderLeft="2px solid lightgray">
                    Move to Wishlist
                  </Button>
                </Flex>
              </Box>
            </Box>
          ))}
        </Box>
        <Box w="400px" m="auto" fontSize="14px">
          <Flex
            p="2"
            borderRadius="base"
            bg="#fdd835"
            align="center"
            justify="space-between"
          >
            <Text>
              Save extra <b> &#8377;40</b> with TriBe
            </Text>
            <Flex>
              <GrFormNext />
              <GrFormNext />
            </Flex>
          </Flex>
          <Box
            m="2"
            borderRadius="md"
            p="2"
            border="1px solid lightgray"
            color="gray"
          >
            Whistles! Get extra 10% Cashback on prepaid orders above Rs.699.
            Coupon code - HAPPY10.
          </Box>
          <Box
            m="2"
            borderRadius="md"
            p="2"
            border="1px solid lightgray"
            color="gray"
          >
            Whistles! Get extra 20% Cashback on prepaid orders above Rs.499.
            Coupon code - NEW20. Applicable for new customers only!
          </Box>
          <Box p="1" border="1px solid lightgray">
            <Flex
              m="1"
              bg="#ebf6f5"
              color="#48a5b0"
              align="center"
              justify="space-between"
              p="1"
              borderRadius="10px"
              boxSizing="border-box"
              h="2rem"
            >
              <Box fontSize="12px">Have a Coupon/Referral/GiftCard?</Box>
              <Button>Redeem{`>>`}</Button>
            </Flex>
            <Box bg="#f5f5f5" fontSize="14px" p="2">
              <b>PRICE SUMMARY</b>
            </Box>
            <Flex justify="space-between" fontSize="14px" color="gray">
              <Text>Total MRP (Incl.of taxes)</Text>
              <Text>&#8377; 1699</Text>
            </Flex>
            <Flex justify="space-between" fontSize="14px" color="gray">
              <Text>Delivery Fee</Text>
              <Text>FREE</Text>
            </Flex>
            <Flex justify="space-between" fontSize="14px" color="gray">
              <Text>Big Discount</Text>
              <Text>-&#8377;1150</Text>
            </Flex>
            <Flex justify="space-between" fontSize="14px" color="gray">
              <Text>Subtotal</Text>
              <Text>&#8377; 549</Text>
            </Flex>
            <Box
              h="1.5rem"
              w="90%"
              m="auto"
              borderRadius="15px"
              bg="lightgreen"
              color="green"
              textAlign="center"
            >
              You are saving &#8377;1150 on this order
            </Box>
          </Box>
          <Flex border="1px solid lightgray" p="2" justify="space-between">
            <Box fontSize="16px">
              Total
              <br /> <b>&#8377; 549</b>
            </Box>
            <Box>
              <Button
                bg="teal"
                color="white"
                _hover={{ bg: "lightblue" }}
                onClick={() => navigate("/login-signup")}
              >
                ADD ADDRESS
              </Button>
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Cart;
