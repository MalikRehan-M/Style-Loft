import { Flex, VStack, Text,Image,Box } from "@chakra-ui/react";

export default function Dropdown2() {
    return (
        <Flex justify="space-between" zIndex="10" display="none" id="navHo2" bg="white" right="2px" top="41px" position="absolute" w="800px" color="black" >
            <VStack className="dropdown" justify="flex-start">
                <Box>

                <Text color="#670b19">FABRIC</Text>
                <Text>Net</Text>
                <Text>Silk</Text>
                <Text>Georgette</Text>
                <Text>Velvet</Text>
                </Box>
            </VStack>
            <VStack>
                <Box>

                <Text color="#670b19">OCCASION</Text>
                <Text>Party Wear</Text>
                <Text>Bridal</Text>
                <Text>Casual</Text>
                </Box>
            </VStack>
            <VStack>
                <Box>

                <Text color="#670b19">STYLE</Text>
                <Text>Ghagra Choli</Text>
                <Text>Lehenga Choli</Text>
                <Text>Crop Top</Text>
                <Text>Readymade</Text>
                </Box>
            </VStack>
            <VStack>
                <Box>

                <Text color="#670b19">COLLECTION</Text>
                <Text>Ethnic</Text>
                <Text>Pakistani</Text>
                <Text>Lehenga Saree</Text>
                <Text>Floral</Text>
                </Box>
            </VStack>
            <Image src="https://assets0.mirraw.com/menus/7/stylish-lehengas_main.jpg?1525255951"/>
        </Flex>
    )
}