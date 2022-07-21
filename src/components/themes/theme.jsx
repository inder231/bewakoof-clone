import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#fdd835 ",
    },
  },
  textStyles: {
    base: {
      color: "#2D3748",
      fontSize: "10px",
      fontWeight: "500",
      ml: "4",
      cursor: "pointer",
    },
    h2: {
      fontSize: "18px",
      fontWeight: "medium",
      lineHeight: "110%",
    },
    h3: {
      fontSize: "16px",
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
      _hover: { borderBotton: "3px solid orange" },
    },
    h4: {
      fontSize: "13px",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "12px",
      fontWeight: "400",
      color: "white",
      lineHeight: "90%",
    },
    drawerSemiHeading: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "gray.400",
    },
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});
