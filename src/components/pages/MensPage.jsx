import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Show,
  Text,
  Grid,
  GridItem,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import axios from "axios";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import { setProducts } from "../redux/actions/action";
import ProductCard from "../component/ProductCard";
import Footer from "../component/Footer";
const category = [
  "T-Shirt",
  "Boxer",
  "Shorts",
  "Shirt",
  "Joggers",
  "Sweatshirt",
  "Brief",
  "Track Pant",
  "Pyjama",
  "Trunk",
  "Jeans",
  "Hoodeis",
];
// const filters = [
//   "Category",
//   "Sizes",
//   "Brand",
//   "Color",
//   "Design",
//   "Fit",
//   "Sleeve",
//   "Neck",
//   "Type",
//   "Rating",
//   "Discount",
//   "SortBY",
// ];
const MensPage = () => {
  const [sortOrder,setSortOrder]   = useState('ASC');
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const dispatch = useDispatch();
  const getMensProducts = async () => {
    let mensProducts = await axios
      .get(`${baseUrl}/?_sort=priceNew&_order=${sortOrder}`)
      .catch((err) => console.log(err));
    dispatch(setProducts(mensProducts.data));
  };
  useEffect(() => {
    getMensProducts();
  }, [sortOrder]);
  const productsList = useSelector((state) => state.allProducts.products);
  return (
    <Box bg="white" h="100%" color="black" position="relative">
      <Header />
      <Navbar />
      <Show above="md">
        <Breadcrumb bg="white" color="black" p={4}>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <Link to="/mens">Mens Page</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Show>
      <Grid templateColumns="repeat(6,1fr)" gap={2}>
        <Show above="md">
          <GridItem colSpan={1} bg="white" color="black">
            <Box>
              <Text textStyle="h4" pl="4">
                FILTERS
              </Text>
              <Box>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <AccordionButton>
                      Sort By <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Button color="black" variant="ghost" onClick={()=>setSortOrder("ASC")} >Price: Low to High</Button>
                      <Button color="black" variant="ghost" onClick={()=>setSortOrder("DESC")} >Price: High to Low</Button>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton>
                      Category <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      {category?.map((ele) => (
                        <Text
                          key={ele}
                          textStyle="h4"
                          cursor="pointer"
                          color="gray.400"
                          fontWeight="medium"
                        >
                          {ele}
                        </Text>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      Sizes <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel></AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      Brand <AccordionIcon />
                    </AccordionButton>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      Color <AccordionIcon />
                    </AccordionButton>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Box>
          </GridItem>
        </Show>
        <GridItem bg="white" colSpan={{ sm: 6, md: 5, lg: 5 }} >
          <SimpleGrid columns={[2, 2, 3, 4]} p="1rem" spacing="1rem">
            {productsList?.map((data, i) => (
              <Box key={i}>
                <Link to="/">
                  <ProductCard data={data} />
                </Link>
              </Box>
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
      <Footer/>
    </Box>
  );
};

export default MensPage;
