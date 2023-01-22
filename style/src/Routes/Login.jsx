import { Flex, Image } from "@chakra-ui/react";
import SiginIn from "../Components/SiginIn";
import SiginUp from "../Components/SignUp";

export default function Login() {
  return (
    <Flex justifyContent="space-around" w={"80%"} m="auto">
      <Image src="https://assets0.mirraw.com/frontpages/13065/B_01_original_sized_webp.webp?1673848746" />
      <SiginIn/>
      <SiginUp/>
      <Image src="https://assets0.mirraw.com/frontpages/13089/B_24_original_sized_webp.webp?1673849458" />
    </Flex>
  );
}
