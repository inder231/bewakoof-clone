import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Spinner,
  Heading,
  Flex,
  SimpleGrid,
  Breadcrumb,
  BreadcrumbItem,
  AspectRatio,
  Text,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  addtocart,
  removeSelectedProduct,
  selectedProduct,
} from "../redux/actions/action";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
const Product = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const getProduct = async () => {
    setLoading(true);
    let res = await axios
      .get(`${baseUrl}/${productId}`)
      .catch((err) => console.log(err));
    dispatch(selectedProduct(res.data));
    setLoading(false);
  };
  useEffect(() => {
    getProduct();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  const {
    id,
    name,
    company,
    image,
    liked,
    pricePrev,
    priceNew,
    tribePrice,
    fit,
  } = product;
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <Box bg="white" color="black" h="100%">
      <Header />
      <Navbar />
      <Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/mens">Mens Clothing</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to={`/mens/${productId}`}>{product.name}</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      {loading ? (
        <Flex justify="center" align="center">
          {" "}
          <Box textAlign="center">
            <Spinner size="xl" /> <Heading>Please wait....</Heading>
          </Box>
        </Flex>
      ) : (
        <SimpleGrid
          columns={[1, 1, 2, 2]}
          p="2rem"
          boxSizing="border-box"
          m="auto"
          w="80%"
        >
          <Box>
            <AspectRatio maxW="400px" ratio={2 / 3}>
              <Image
                w="100%"
                h="auto"
                borderRadius="base"
                src={image}
                alt={name}
              />
            </AspectRatio>
          </Box>
          <Flex width="100%" direction="column">
            <Box fontWeight="bold" fontSize="2xl">
              {company}
            </Box>
            <Box>{name}</Box>
            <Flex align="baseline">
              <Text m="1" fontSize="24px" fontWeight="bold">
                {priceNew}
              </Text>
              <Text
                m="1"
                fontSize="12px"
                color="gray.500"
                textDecoration="line-through"
              >
                {pricePrev}
              </Text>
              <Text>{}</Text>
            </Flex>
            <Box>
              <Flex justify="space-between">
                <Text>SELECT SIZE</Text>
                <Text>
                  <Button variant="ghost">Size Guide</Button>
                </Text>
              </Flex>
              <Flex>
                <Button
                  colorScheme="black"
                  width="30px"
                  m="1"
                  variant="outline"
                >
                  S
                </Button>
                <Button
                  colorScheme="black"
                  width="30px"
                  m="1"
                  variant="outline"
                >
                  M
                </Button>
                <Button
                  colorScheme="black"
                  width="30px"
                  m="1"
                  variant="outline"
                >
                  L
                </Button>
                <Button
                  colorScheme="black"
                  width="30px"
                  m="1"
                  variant="outline"
                >
                  XL
                </Button>
                <Button
                  colorScheme="black"
                  width="30px"
                  m="1"
                  variant="outline"
                >
                  2XL
                </Button>
                <Button
                  colorScheme="black"
                  width="30px"
                  m="1"
                  variant="outline"
                >
                  3XL
                </Button>
              </Flex>
            </Box>
            <Flex>
              <Button
                borderRadius="0"
                m="2"
                variant="solid"
                colorScheme="yellow"
                onClick={() => {
                  dispatch(addtocart([product]));
                }}
              >
                Add to Cart
              </Button>
              <Button
                borderRadius="0"
                m="2"
                variant="outline"
                colorScheme="black"
              >
                Add to Wishlist
              </Button>
            </Flex>
            <Box>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="left"
                        fontWeight="bold"
                        fontSize="12px"
                      >
                        SAVE EXTRA WITH 1 OFFER
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text fontSize="11px">
                      Whistles! Get extra 10% Cashboack on prepaid orders above
                      Rs. 699. Coupon code -<b>HAPPY10</b>.
                      <CopyToClipboard text="HAPPY10">
                        <Button
                          variant="ghost"
                          color="blue"
                          onClick={() => alert("copied")}
                        >
                          Copy to clipboard
                        </Button>
                      </CopyToClipboard>
                    </Text>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="left"
                        fontWeight="bold"
                        fontSize="12px"
                      >
                        PRODUCT DESCRIPTION
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} lineHeight="1.5rem">
                    <Text fontSize="12px">
                      Create a magical look with this Gojo Domain Men's T-Shirt.
                      Pair this blck t-shirt with chinos and loafers for an
                      urbane look.
                    </Text>
                    <Text fontSize="12px">
                      <b>Country of Origin - </b> India
                    </Text>
                    <Text fontSize="12px">
                      <b>Manufactured By - </b>Bewakoof Brands Pvt Ltd, Sairaj
                      Logistic Hub #A5, Bmc Pipeline Road, Opposite All Saints
                      High School, Amne, Bhiwandi,Thane, Maharashtra 421302
                    </Text>
                    <Text fontSize="12px">
                      <b>Packed By - </b>Bewakoof Brands Pvt Ltd, Sairaj
                      Logistic Hub #A5, Bmc Pipeline Road, Opposite All Saints
                      High School, Amne, Bhiwandi,Thane, Maharashtra 421302
                    </Text>
                    <Text fontSize="12px">
                      <b>Commodity - </b> Men's T-Shirt
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="left"
                        fontWeight="bold"
                        fontSize="12px"
                      >
                        15 DAY RETURNS & EXCHANGE
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text fontSize="11px">
                      Easy return upto 15 dya of delivery. Exchange available on
                      select pincodes
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Flex>
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Product;
