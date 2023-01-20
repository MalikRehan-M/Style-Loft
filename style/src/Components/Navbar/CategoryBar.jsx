import { Box, Flex } from "@chakra-ui/react";
import styles from "./Topbar.module.css";
import { NavLink } from "react-router-dom";
import Dropdown1 from "./Dropdowns.jsx/Dropdown1";
import Dropdown2 from "./Dropdowns.jsx/Dropdown2";
import Dropdown3 from "./Dropdowns.jsx/Dropdown3";
import Dropdown4 from "./Dropdowns.jsx/Dropdown4";
import Dropdown5 from "./Dropdowns.jsx/Dropdown5";
import Dropdown6 from "./Dropdowns.jsx/Dropdown6";
import Dropdown7 from "./Dropdowns.jsx/Dropdown7";
import Dropdown8 from "./Dropdowns.jsx/Dropdown8";
import Dropdown9 from "./Dropdowns.jsx/Dropdown9";
import Dropdown10 from "./Dropdowns.jsx/Dropdown10";
import Dropdown11 from "./Dropdowns.jsx/Dropdown11";

export default function CategoryBar() {
  return (
    <Flex
      zIndex="1"
      id="bot"
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      }}
      className={styles.nav3}
      justify="center"
      w="100vw"
      h="40px"
      
    >
      <Flex position="relative" align="center" className={styles.text}>
        <NavLink className="navHove1" to="/sarees"  >
          <Box _hover={{ borderBottom: "3px solid #670b19"}} >
            Sarees
            <Dropdown1 />
          </Box>
        </NavLink>
        <NavLink className="navHove2" to="/lehengas" >
          <Box _hover={{ borderBottom: "3px solid #670b19" }}>
            Lehengas
            <Dropdown2 />
          </Box>
        </NavLink>
        <NavLink className="navHove3" to="/salwarkameez">
          <Box _hover={{ borderBottom: "3px solid #670b19" }}>
            SalwarKameez
            <Dropdown3 />
          </Box>
        </NavLink>
        <NavLink className="navHove4" to="/kurtis">
          <Box _hover={{ borderBottom: "3px solid #670b19" }}>
            Kurtis
            <Dropdown4 />
          </Box>
        </NavLink>
        <NavLink className="navHove5" to="/jewellery">
          <Box _hover={{ borderBottom: "3px solid #670b19" }}>
            Jewellery
            <Dropdown5 />
          </Box>
        </NavLink>
        <NavLink className="navHove6" to="/kids">
          <Box _hover={{ borderBottom: "3px solid #670b19" }}>
            Kids
            <Dropdown6 />
          </Box>
        </NavLink>
        <NavLink className="navHove7" to="/men">
          <Box _hover={{ borderBottom: "3px solid #670b19" }}>
            Men
            <Dropdown7 />
          </Box>
        </NavLink>
        <NavLink className="navHove8" to="/homeliving">
          <Box _hover={{ borderBottom: "3px solid #670b19" }}>
            Home & Living
            <Dropdown8 />
          </Box>
        </NavLink>
        <NavLink className="navHove9" to="/homeliving">
          <Box _hover={{ borderBottom: "3px solid #670b19" }}>
            Luxe
            <Dropdown9 />
          </Box>
        </NavLink>
        <NavLink className="navHove10" to="/spiritual">
          <Box _hover={{ borderBottom: "3px solid #670b19" }}>
            Spiritual
            <Dropdown10 />
          </Box>
        </NavLink>
        <NavLink className="navHove11" to="/spiritual">
          <Box _hover={{ borderBottom: "3px solid #670b19" }}>
            Collections
            <Dropdown11 id="navHo11" />
          </Box>
        </NavLink>
      </Flex>
    </Flex>
  );
}
