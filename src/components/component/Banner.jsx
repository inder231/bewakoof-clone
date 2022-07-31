import { Box, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Banner = () => {
  return (
    <Box>
      <Box>
        <Image
          w="100%"
          h="80px"
          src="https://imgs.search.brave.com/iDEoaYaUIoiCs0xXztB2baIupl0pObFeqaWu0s3deDQ/rs:fit:2181:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/UDFnRzhIRm54LXpw/anBBT19IVWd3SGFC/biZwaWQ9QXBp"
          alt="banner"
        />
      </Box>
      <Flex>
        <Link to="/mens">
          <Box _hover={{ width: "100%" }} width="99.5%" m="auto">
            <Image
              src="https://images.bewakoof.com/web/Gender-Picker-Banner-desktop-mendesktopNEW-1651231162.jpg"
              alt="shopMen"
            />
          </Box>
        </Link>
        <Link to="/womens">
          <Box _hover={{ width: "100%" }} width="99.5%" m="auto">
            <Image
              src="https://images.bewakoof.com/web/Gender-Picker-Banner-desktop-Womendesktop-1651231163NEW.jpg"
              alt="shopWomen"
            />
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};

export default Banner;
