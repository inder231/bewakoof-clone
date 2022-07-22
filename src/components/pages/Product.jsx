import React, { useEffect, useState } from "react";
import { Box, Image, Spinner, Heading, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../redux/actions/action";
const Product = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  //   console.log(product);
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
  return (
    <Box>
      {loading ? (
        <Flex justify="center" align="center">
          {" "}
          <Box>
            <Spinner size="xl" />{" "}
            <Heading>loading data. Please wait....</Heading>
          </Box>
        </Flex>
      ) : (
        <Box>
          <Image src={product.image} />
        </Box>
      )}
    </Box>
  );
};

export default Product;
