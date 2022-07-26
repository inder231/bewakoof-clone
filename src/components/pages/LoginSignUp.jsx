import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Image,
  Flex,
  Text,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputLeftAddon,
  FormHelperText,
  FormErrorMessage,
  PinInput,
  PinInputField,
  Alert,
  AlertIcon,
  HStack,
  Checkbox,
} from "@chakra-ui/react";
import flag from "../flag/flag.png";
const LoginSignUp = () => {
  const [input, setInput] = useState("");
  const [verify, setVerify] = useState(false);
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(false);
  const ref = useRef();
  const otpRef = useRef();
  const handleOtp = (e) => {
    e.preventDefault();
    if (input.length == 0 || input.length != 10) {
      alert("Plese enter a valid number");
      return;
    }
    setVerify(true);
    setTimeout(() => {
      ref.current = Math.floor(1000 + Math.random() * 9000);
      let val = ref.current;
      alert(val);
      otpRef.current.focus();
    }, 2000);
  };
  useEffect(() => {
    if (otp == ref.current) {
      alert("Verified successfully.");
      setOtp("");
    } else if (otp.length === 4) {
      alert("Wrong OTP");
      setOtp("");
    }
  }, [otp]);
  return (
    <Box h="100vh">
      <SimpleGrid columns={2}>
        <Flex
          h="100vh"
          color="black"
          textAlign="center"
          pt="1rem"
          direction="column"
          justify="space-between"
          background="linear-gradient(#ffffff,#fff4c5)"
        >
          <Box>
            <Heading fontSize={{ base: "16px", md: "24px", lg: "32px" }}>
              Welcome to the world of Bewakoof!
            </Heading>
          </Box>
          <Box>
            <Image src="https://images.bewakoof.com/web/group-19-1617704502.png" />
          </Box>
        </Flex>
        <Flex
          textAlign="center"
          direction="column"
          h="100vh"
          bg="white"
          color="black"
        >
          <Heading fontSize={{ base: "24px", md: "32px", lg: "40px" }}>
            Log in / Sign up
          </Heading>
          <Text>
            for Latest trends, exciting offers and everything Bewakoof!
          </Text>
          <form
            onSubmit={handleOtp}
            style={{ width: "70%", margin: " 1rem auto" }}
          >
            <FormControl>
              <Box borderRadius="lg" border="1px solid lightgray" p="2">
                {/* <Flex m="1" color="gray">
                  <Image src={flag} w="24px" h="24px" />
                  <span>+91</span>
                </Flex> */}
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Image src={flag} w="20px" mr="1.5rem" h="20px" />
                    }
                  />
                  <InputLeftAddon children="+91-" />
                  <Input
                    placeholder="Enter mobile number"
                    maxLength="10"
                    minLength="10"
                    value={input}
                    border="none"
                    onChange={(e) => setInput(e.target.value)}
                  />
                </InputGroup>
              </Box>
              <Button
                _hover={{ background: "gray" }}
                mt="1rem"
                bg="teal"
                color="white"
                width="100%"
                type="submit"
              >
                CONTINUE
              </Button>
            </FormControl>
          </form>
          {verify && (
            <Box m="1rem auto">
              <HStack border="1px solid black" m="1rem auto" p="1">
                <PinInput mask={!show} onChange={(e) => setOtp(e)} otp>
                  <PinInputField ref={otpRef} />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
              <Flex align="center">
                <Checkbox
                  size="lg"
                  colorScheme="orange"
                  border="1px solid orange"
                  onChange={(e) => setShow(e.target.checked)}
                />
                <b>Show</b>
                <Button colorScheme="blue" variant="outline" 
                m="1"
                onClick={handleOtp}
                >
                  Resend OTP
                </Button>
              </Flex>
            </Box>
          )}
          <Box>--------- OR ---------</Box>
          <Box>
            <Box>
              <Button
                m="1"
                variant="outline"
                borderColor="gray"
                color="gray"
                w="90%"
              >
                CONTINUE WITH EMAIL
              </Button>
            </Box>
            <Box>
              <Button m="1" variant="outline" borderColor="gray" color="gray">
                GOOGLE
              </Button>
              <Button m="1" variant="outline" borderColor="gray" color="gray">
                FACEBOOK
              </Button>
            </Box>
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default LoginSignUp;
