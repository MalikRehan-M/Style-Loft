import { Flex, VStack, Text,Box } from "@chakra-ui/react";

export default function Dropdown4() {
  return (
    <Flex
      zIndex="10"
      display="none"
      id="navHo4"
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
        <Text>Kurta Sets</Text>
        <Text>Long Kurits</Text>
        <Text>Short Kurtis</Text>
        <Text>Sleeveless Kurtis</Text>
        <Text>Anarkali Kurtis</Text>
        <Text>Kaftans</Text>
        <Text>Plus Size Kurtis</Text>
        
        </Box>
        
      
      </VStack>
      <VStack>
        <Box>

        <Text color="#670b19">FABRIC</Text>
        <Text>Silk</Text>
        <Text>Chiffon</Text>
        <Text>Georgette</Text>
        <Text>Cotton</Text>
        <Text>Rayon</Text>
        <Text>Crepe</Text>
        <Text>Chanderi</Text>
        </Box>
       
     
      </VStack>
      <VStack>
        <Box>

        <Text color="#670b19">OCCASION</Text>
        <Text>Party Wear</Text>
        <Text>Festive</Text>
        <Text>Casual</Text>
        <Text>Wedding</Text>
        </Box>
      </VStack>
      <VStack>
        <Box>

        <Text color="#670b19">WORK</Text>
        <Text>Printed</Text>
        <Text>Embroidered</Text>
        <Text>Plain</Text>
        <Text>Chikankari</Text>
        <Text>Stone Work</Text>
        <Text>Heavy Work</Text>
        <Text>Mirror Work</Text>
        </Box>
      </VStack>
      <VStack>
        <Box>

        <Text color="#670b19">BOTTOM WORK</Text>
        <Text>Palazzos</Text>
        <Text>Harem Pants</Text>
        <Text>Leggings</Text>
        <Text>Patiala Pants</Text>
        <Text>Skirts</Text>
        <Text>Trousers</Text>
        </Box>
      </VStack>
     
    </Flex>
  );
}
