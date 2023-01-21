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
    <Flex zIndex="1" id="bot" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} className={styles.nav3} justify="center" w="100vw" h="40px">
    <Flex className={styles.giveSty} position="relative" align="center">
        <Box className="navHove1" >
            <NavLink to="/sarees">Sarees</NavLink>
            <Dropdown1 />
        </Box>
        <Box  className="navHove2" >
            <NavLink  to="/lehengas">Lehengas</NavLink>
            <Dropdown2 />
        </Box>
        <Box className="navHove3" >
            <NavLink _hover={{ borderBottom: "2px solid #670b19" }} to="/salwarkameez">SalwarKameez</NavLink>
            <Dropdown3 />
        </Box>
        <Box className="navHove4" >
            <NavLink _hover={{ borderBottom: "2px solid #670b19" }} to="/kurtis">Kurtis</NavLink>
            <Dropdown4 />
        </Box>
        <Box className="navHove5" >
            <NavLink _hover={{ borderBottom: "2px solid #670b19" }} to="/jewellery">Jewellery</NavLink>
            <Dropdown5 />
        </Box>
        <Box className="navHove6" >
            <NavLink _hover={{ borderBottom: "2px solid #670b19" }} to="/kids">Kids</NavLink>
            <Dropdown6 />
        </Box>
        <Box className="navHove7" >
            <NavLink _hover={{ borderBottom: "2px solid #670b19" }} to="/men">Men</NavLink>
            <Dropdown7 />
        </Box>
        <Box className="navHove8" >
            <NavLink _hover={{ borderBottom: "2px solid #670b19" }} to="/homeliving">Home & Living</NavLink>
            <Dropdown8 />
        </Box>
        <Box className="navHove9" >
            <NavLink _hover={{ borderBottom: "2px solid #670b19" }} to="/homeliving">Luxe</NavLink>
            <Dropdown9 />
        </Box>
        <Box className="navHove10" >
            <NavLink _hover={{ borderBottom: "2px solid #670b19" }} to="/spiritual">Spiritual</NavLink>
            <Dropdown10 />
        </Box>
        <Box className="navHove11" >
            <NavLink _hover={{ borderBottom: "2px solid #670b19" }} to="/spiritual">Collections</NavLink>
            <Dropdown11 />
        </Box>
        
    </Flex>
</Flex>
  );
}
