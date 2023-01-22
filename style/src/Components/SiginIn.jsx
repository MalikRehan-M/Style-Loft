import {
  Flex,
  Box,
  FormControl,
  Checkbox,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  Divider,
  Image,
  Spacer,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
} from "@chakra-ui/react";
import { useState, useRef, useContext } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const SiginIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const email = useRef("");
  const password = useRef("");
  const { authState, loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("https://purple-fog-period.glitch.me/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.map((i) => {
          if (
            i.email === email.current.value &&
            i.password === password.current.value
          ) {
            alert("");
            loginUser();
          } else {
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>FAILURE !</AlertTitle>
              <AlertDescription>
                {" "}
                There was an error processing your request, please enter correct
                credentials
              </AlertDescription>
            </Alert>;
          }
        });
      })
      .catch((err) => {
        console.log(err + " error");
      });
  };
  if (authState) {
    return (
      <>
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>Success !</AlertTitle>
          <AlertDescription> Welcome! enjoying your shopping </AlertDescription>
        </Alert>
        <Navigate to="/" />;
      </>
    );
  }
  return (
    <Flex minH={"50vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} w={"xl"} py={12} px={6}>
        <Box
          h="550px"
          bg={"white"}
          boxShadow={
            "0 1px 20px rgb(0 0 0 / 19%), 0px 0px 6px rgb(0 0 0 / 23%)"
          }
          w="80%"
          m="auto"
          p={8}
        >
          <Stack align={"center"} pb="10px">
            <Heading fontSize={"3xl"} textAlign={"center"} fontWeight="400">
              SIGN IN
            </Heading>
          </Stack>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              {/* Email address*/}
              <Input
                type="email"
                placeholder="Email Address"
                id="email"
                ref={email}
              />
            </FormControl>
            {/* Password  */}
            <FormControl id="password" isRequired>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  id="password"
                  ref={password}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            {/* Sign up Button */}
            <Stack spacing={10}>
              <Button
                loadingText="Submitting"
                size="sm"
                w="30%"
                m="auto"
                bg={"rgb(103, 11, 25)"}
                color={"white"}
                onClick={handleLogin}
                _hover={{
                  bg: "rgb(103, 11, 25)",
                }}
              >
                SIGN IN
              </Button>
            </Stack>

            {/* Remember Me */}
            <Flex fontSize={"xs"}>
              <Checkbox size={"sm"} />
              <Text pl="2px">REMEMBER ME</Text>
              <Spacer />
              <Link>Forgot Password?</Link>
            </Flex>

            <Box>
              <Text align={"center"} fontSize="xs">
                Don't have an Account?{" "}
                <NavLink style={{ color: "blue", textDecoration: "underline" }}>
                  Create account
                </NavLink>
              </Text>
              <Text align={"center"} fontSize="xs">
                Didn't received confirmation?{" "}
                <NavLink style={{ color: "blue", textDecoration: "underline" }}>
                  Resend confirmation link
                </NavLink>
              </Text>
            </Box>

            <Divider borderBottom={"1px solid black"} />

            {/* Login with other medium */}
            {/* Paypal */}
            <Link>
              <Box w="50%" m="auto">
                <Image src="https://www.mirraw.com/assets/sign_in_paypal-a7e67035ea1461ada1fc96bf69697552340e3c9fb1969f7e9ef0c52eb7ed05d6.png" />
              </Box>
            </Link>
            <Stack>
              {/* Facebook and Google */}
              <HStack p="0">
                <Link>
                  <Box>
                    <Image src="https://www.mirraw.com/assets/facebook_sign_in-e998b55d7d821ba819897132537e42149cee923ea215a5eaf0e2a6335efe6c67.png" />
                  </Box>
                </Link>
                <Link>
                  <Box>
                    <Image src="https://www.mirraw.com/assets/google_sing_in-3426a2d2b760db2be7127653d216d7578e499c5e7df25fea1f861a56108d7d5b.png" />
                  </Box>
                </Link>
              </HStack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SiginIn;
