import { Flex, VStack, Text } from "@chakra-ui/react";

export default function Dropdown5() {
  return (
    <Flex
      zIndex="10"
      display="none"
      id="navHo5"
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
        <Text>ROOTS</Text>
        <Text>Kanchipuram Silk</Text>
        <Text>Bhagalpuri Silk</Text>
        <Text>Mysore Silk</Text>
        <Text>Manipuri Silk</Text>
        <Text>Kota Silk</Text>
        <Text>Bandhani</Text>
        <Text>Paithani</Text>
        <Text>Kota</Text>
        <Text>Patola</Text>
        <Text>Jamdani</Text>
        <Text>Kerala Kasavu</Text>
        <Text>Bengali</Text>
        <Text>Uppada</Text>
        <Text>Nauvari</Text>
      </VStack>
      <VStack>
        <Text>FABRIC</Text>
        <Text>Georgette</Text>
        <Text>Art Silk</Text>
        <Text>Cotton</Text>
        <Text>Pure Silk</Text>
        <Text>Net</Text>
        <Text>Velvet</Text>
        <Text>Chiffon</Text>
        <Text>Brasso</Text>
        <Text>Chanderi</Text>
        <Text>Organza Sarees</Text>
        <Text>Tussar Silk</Text>
        <Text>Crepe</Text>
        <Text>Satin</Text>
      </VStack>
      <VStack>
        <Text>OCCASION</Text>
        <Text>Party Wear</Text>
        <Text>Wedding</Text>
        <Text>EID</Text>
        <Text>Diwali</Text>
      </VStack>
      <VStack>
        <Text>WORK</Text>
        <Text>Embroidered</Text>
        <Text>Printed</Text>
        <Text>Heavy Work Sarees</Text>
        <Text>Handloom Sarees</Text>
        <Text>Hand Woven Sarees</Text>
        <Text>Chikankari</Text>
        <Text>Kalamkari</Text>
        <Text>Ikat</Text>
      </VStack>
      <VStack>
        <Text>COLLECTIONS</Text>
        <Text>Exclusive</Text>
        <Text>Bridal Sarees</Text>
        <Text>Half Saree</Text>
        <Text>Pre Stitched Sarees</Text>
        <Text>Traditional Sarees</Text>
        <Text>South Indian Sarees</Text>
        <Text>Bollywood Sarees</Text>
        <Text>Best Sellers</Text>
        <Text>New Arrivals</Text>
      </VStack>
      <VStack>
        <Text>MORE</Text>
        <Text>Blouses</Text>
        <Text>Readymade Blouse</Text>
        <Text>Blouse Fabric​</Text>
        <Text>Sleeveless blouse</Text>
        <Text>Bridal Blouses</Text>
        <Text>Petticoats</Text>
        <Text>Blouse Neck Designs</Text>
      </VStack>
    </Flex>
  );
}
