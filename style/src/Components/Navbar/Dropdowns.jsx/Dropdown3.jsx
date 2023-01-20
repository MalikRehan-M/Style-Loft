import { Flex, VStack, Text, Box } from "@chakra-ui/react";

export default function Dropdown3() {
  return (
    <Flex
      zIndex="10"
      display="none"
      id="navHo3"
      bg="white"
      right="2px"
      top="41px"
      position="absolute"
      w="800px"
      minH="200px"
      color="black"
      lineHeight="15px"
    >
      <VStack className="dropdown" justify="flex-start">
        <Box>
          <Text color="#670b19">STYLE</Text>
          <Text>Anarkali Suits</Text>
          <Text>Churidar Suits</Text>
          <Text>Punjabi Suits</Text>
          <Text>Dress Material</Text>
          <Text>Abaya Suits</Text>
          <Text>Pakistani Suits</Text>
          <Text>Palazzo</Text>
          <Text>Saharara Suits</Text>
          <Text>Patiala Suits</Text>
        </Box>
      </VStack>
      <VStack>
        <Box>
          <Text color="#670b19">FABRIC</Text>
          <Text>Cotton</Text>
          <Text>Georgette</Text>
          <Text>Chanderi</Text>
          <Text>Silk</Text>
          <Text>Net</Text>
          <Text>Crepe</Text>
          <Text>Cotton Silk</Text>
        </Box>
      </VStack>
      <VStack>
        <Box>
          <Text color="#670b19">OCCASION</Text>
          <Text>Party Wear</Text>
          <Text>Wedding Salwar</Text>
          <Text>Festive</Text>
        </Box>
      </VStack>
      <VStack>
        <Box>
          <Text color="#670b19">COLLECTION</Text>
          <Text>Plus Size Suits</Text>
          <Text>Best Sellers</Text>
          <Text>New Arrivals</Text>
          <Text>Combo Silver</Text>
          <Text>Ready to Ship</Text>
          <Text>Collar Neck</Text>
          <Text>Designers</Text>
          <Text>Patiala Combo</Text>
          <Text>Bollywood Salwars</Text>
        </Box>
      </VStack>
      <VStack>
        <Box>
          <Text color="#670b19">STITCHING</Text>
          <Text>Readymade Suits</Text>
          <Text>Semi Stitched</Text>
          <Text>Suits</Text>
        </Box>
      </VStack>
     
    </Flex>
  );
}
