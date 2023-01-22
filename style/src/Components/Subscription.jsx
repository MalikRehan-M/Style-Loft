import { Box, Button, Center, Flex, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Subscription = () => {
  return (
    <Box p="20px">
    <Center>
      <VStack>
        <Text fontSize="xl" fontWeight="600" letterSpacing={3}>
          SIGN UP TO RECIEVE OUR UPDATES
        </Text>
        <Text fontStyle="italic">
          Be the first to know about latest offers and discounts on Mirraw
        </Text>
        <Flex>
          <Input
            border="1px solid black"
            fontStyle="italic"
            placeholder="Enter your Email Address"
            borderRadius="0"
            size="1g"
            w="450px"
            m="10px 0"
          ></Input>
          <Button
            variant="solid"
            color="white"
            bg="#670b19"
            borderRadius="0"
            p="15px"
            m="10px 0"
            fontSize="14px"
            border="none"
            >
            Subscribe!
          </Button>
        </Flex>
      </VStack>
    </Center>
  </Box>
  )
}

export default Subscription
