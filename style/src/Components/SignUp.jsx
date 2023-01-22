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
    useColorModeValue,
    Link,
    Divider,
    Image,
  } from '@chakra-ui/react';
  import { useState,useRef } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import {
    Alert,
    AlertIcon,
    AlertDescription,
    AlertTitle
  } from "@chakra-ui/react";
  

const SiginUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const email=useRef("")
    const password1=useRef("")
    const password2=useRef("")

    const handleLogin=(e)=>{
      // e.preventDefault();
      const userDetails={
        email:email.current.value,
        password:password1.current.value
      };
      fetch("https://purple-fog-period.glitch.me/users",{
        method:"POST",
        body:JSON.stringify(userDetails),
        headers:{
          "Content-Type":"application/json"
        },
      }).then((res)=>res.json())
        .then((data)=>{
          
        <Alert status='success'>
        <AlertIcon />
        <AlertTitle>Success !</AlertTitle>
        <AlertDescription>You have Successfully Signed Up ! Please Sigin to continue shopping</AlertDescription>
      </Alert>
          console.log(data);
        })
        .catch((err)=>{
          <Alert status='error'>
          <AlertIcon />
          <AlertTitle>FAILURE !</AlertTitle>
          <AlertDescription>There was an error processing your request</AlertDescription>
        </Alert>
         
          console.log(err+" error")
        });
    };

  return (
    <Flex
    minH={'50vh'}
    align={'center'}
    justify={'center'}
    >
    <Stack spacing={8} mx={'auto'} w={'xl'} py={12} px={6}>
      
      <Box
        h="550px"
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'0 1px 20px rgb(0 0 0 / 19%), 0px 0px 6px rgb(0 0 0 / 23%)'}
        w="80%"
        m="auto"
        p={8}>
        <Stack align={'center'} pb="10px">
        <Heading fontSize={'3xl'} textAlign={'center'} fontWeight="400">
          Sign up
        </Heading>
      </Stack>
        <Stack spacing={4}>
    
          <FormControl id="email" isRequired>
            {/* Email address*/}
            <Input type="email" placeholder='Email Address' ref={email} id="email" />
          </FormControl>
          {/* Password  */}
          <FormControl id="password" isRequired>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} placeholder="Password" ref={password1} id="password1" />
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }>
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl id="Confirmpassword" isRequired>
            {/* Confirm Password */}
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} placeholder="Confirm Password"  ref={password2} id="password2" />
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }>
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {/* News Letter */}
            <Stack
            direction={{ base: 'column', sm: 'row' }}
            align={'start'}
            p="10px 0"
            justify={'space-between'}>
            <Checkbox>I agree to the receive news letters from Mirraw</Checkbox>
          </Stack>
          </FormControl>.
          {/* Sign up Button */}
          <Stack spacing={10}>
            <Button
              loadingText="Submitting"
              size="sm"
              w="30%"
              m="auto"
              bg={'rgb(103, 11, 25)'}
              color={'white'}
              onClick={handleLogin}
              _hover={{
                bg: 'rgb(103, 11, 25)',
              }}>
              Sign up
            </Button>
          </Stack>

          <Divider borderBottom={"1px solid black"} />

          {/* Login with other medium */}
          {/* Paypal */}
          <Link><Box w="50%" m="auto"><Image src="https://www.mirraw.com/assets/sign_in_paypal-a7e67035ea1461ada1fc96bf69697552340e3c9fb1969f7e9ef0c52eb7ed05d6.png" /></Box></Link>
          <Stack>
          {/* Facebook and Google */}
          <HStack p="0">
          <Link><Box ><Image src="https://www.mirraw.com/assets/facebook_sign_in-e998b55d7d821ba819897132537e42149cee923ea215a5eaf0e2a6335efe6c67.png" /></Box></Link>
          <Link><Box ><Image src="https://www.mirraw.com/assets/google_sing_in-3426a2d2b760db2be7127653d216d7578e499c5e7df25fea1f861a56108d7d5b.png" /></Box></Link>
          </HStack>
            <Text align={'center'}>
              Have an Account? <Link color={'blue.400'}>Sign In</Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}

export default SiginUp