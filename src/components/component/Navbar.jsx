import {
  Box,
  Text,
  Flex,
  Spacer,
  Image,
  Input,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  VStack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag, BsSearch } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setSearchedProduct } from "../redux/actions/action";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItemCount = useSelector((state) => state.cartList.products.length);
  const state = useSelector((state)=>state);
  console.log(state);
  const getSearchedData = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/?q=${search}`)
      .then((res) => dispatch(setSearchedProduct(res.data)))
      .catch((err) => console.log(err));
  };
  const onPressEnter = (e) => {
    if (e.key !== "Enter") return;
    getSearchedData();
    navigate("/mens");
    setSearch("");
  };
  return (
    <Box
      bg="white"
      color="black"
      position="sticky"
      top="0"
      w="100%"
      zIndex="10"
    >
      <Flex w="90%" m="auto" align="center" p="10px 0px">
        <Flex width="500px" align="center" justifyContent="space-between">
          <Show below="md">
            <Flex>
              <Box>
                <IconButton
                  ref={btnRef}
                  onClick={onOpen}
                  fontSize="30px"
                  color="gray.600"
                  icon={<GoThreeBars />}
                />
                <Drawer
                  isOpen={isOpen}
                  placement="left"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                >
                  {/* <DrawerOverlay/> */}
                  <DrawerContent
                    bg="white"
                    color="gray.800"
                    pl="20px"
                    textAlign="left"
                  >
                    <DrawerCloseButton />
                    <Heading textStyle="h2">Welcome Guest</Heading>
                    <Breadcrumb fontSize="18px">
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Login</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">SignUp</BreadcrumbLink>
                      </BreadcrumbItem>
                    </Breadcrumb>
                    <hr />
                    <VStack align="left" justify="space-between" h="35%" mt="2">
                      <Box>
                        <Text textStyle="drawerSemiHeading">SHOP IN</Text>
                      </Box>
                      <Box>
                        <Text textStyle="h4">Men</Text>
                      </Box>
                      <Box>
                        <Text textStyle="h4">Women</Text>
                      </Box>
                      <Flex justify="space-between">
                        <Text textStyle="h4">Customize your own T-Shirt </Text>
                        <Image
                          mr="10%"
                          width="30px"
                          borderRadius="50%"
                          src="https://images.bewakoof.com/nav_menu/me-shirt-icon--1656055105.png"
                        />
                      </Flex>
                      <Box>
                        <Text textStyle="h4">Mobile Covers</Text>
                      </Box>
                    </VStack>
                    <VStack
                      h="65%"
                      bg="gray.100"
                      align="left"
                      justifyContent="space-between"
                      m="20px 0px 0px -20px"
                      pl="20px"
                      boxSizing="border-box"
                    >
                      <Box>
                        <Text textStyle="drawerSemiHeading">CONTACT US</Text>
                      </Box>
                      <Box>
                        <Text textStyle="h4">Help & Support</Text>
                      </Box>
                      <Box>
                        <Text textStyle="h4">Feedback & Suggestions</Text>
                      </Box>
                      <Box>
                        <Text textStyle="h4">Become a Seller</Text>
                      </Box>
                      <Box>
                        <Text textStyle="drawerSemiHeading">ABOUT US</Text>
                      </Box>
                      <Box>
                        <Text textStyle="h4">Our Story</Text>
                      </Box>
                      <Box>
                        <Text textStyle="h4">Fanbook</Text>
                      </Box>
                      <Box>
                        <Text textStyle="h4">Blog</Text>
                      </Box>
                      <Box>
                        <Text textStyle="h4">Login</Text>
                      </Box>
                    </VStack>
                  </DrawerContent>
                </Drawer>
              </Box>
              <Image src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg" />
            </Flex>
          </Show>
          <Show above="md">
            <Box>
              <Image
                width="150px"
                src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
              />
            </Box>
            <Flex width="60%" justify="space-between">
              <Text textStyle="h3">MEN</Text>
              <Text textStyle="h3">WOMEN</Text>
              <Text textStyle="h3">MOBILE COVERS</Text>
            </Flex>
          </Show>
        </Flex>
        <Spacer />
        <Show above="md">
          <Flex
            bg="gray.400"
            justify="center"
            align="center"
            padding="0px 10px"
            borderRadius="base"
          >
            <BsSearch />
            <Input
              type="text"
              border="none"
              variant="ghost"
              bgColor="inherit"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={(e) => onPressEnter(e)}
            />
          </Flex>
        </Show>
        <Flex>
          <IconButton
            variant="ghost"
            colorScheme="black"
            icon={<AiOutlineUser />}
          />
          <IconButton
            variant="ghost"
            colorScheme="black"
            icon={<AiOutlineHeart />}
          />
          <Box position="relative">
            <IconButton
              onClick={() => navigate("/cart")}
              variant="ghost"
              colorScheme="black"
              icon={<BsBag />}
            />
            <Text
              w="25px"
              h="25px"
              bg="lightgray"
              textAlign="center"
              borderRadius="50%"
              color="orange"
              position="absolute"
              top="-10px"
              right="-5px"
              fontWeight="bold"
            >
              {cartItemCount}
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Divider h="2px" bg="gray.100" />
    </Box>
  );
};

export default Navbar;
