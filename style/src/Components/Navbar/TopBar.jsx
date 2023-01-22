import { NavLink,Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import styles from "./Topbar.module.css";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
export default function Topbar() {
  const {logoutUser}=useContext(AuthContext)
  return (
    <Flex
      id="top"
      className={styles.fill}
      style={{ borderBottom: ".5px solid #eeeeee" }}
      color="#670b19"
      pl="30px"
      justify="space-between"
      height="40px"
      
    >
      <Flex align="center" width="70%">
        <NavLink className={styles.marginNav}>
          Contact Us <span>|</span>
        </NavLink>
        <NavLink className={styles.marginNav}>
          {" "}
          7 Day Returns <span>|</span>{" "}
        </NavLink>
        <NavLink className={styles.marginNav}>
          {" "}
          Track Order <span>|</span>
        </NavLink>
        <NavLink className={styles.marginNav}>
          {" "}
          Return Order <span>|</span>
        </NavLink>
        <NavLink className={styles.marginNav}>
          {" "}
          Sell On Mirraw <span>|</span>
        </NavLink>
        <NavLink className={styles.marginNav}> Survey</NavLink>
      </Flex>
      <Flex
        fontWeight="600"
        fontSize="13px"
        justify="space-between"
        mr="50px"
        width="300px"
      >
        <Flex
          cursor="pointer"
          justify="center"
          align="center"
          width="85%"
          bg="white"
          _hover={{ background: "white" }}
        >
          <svg
            style={{ height: "17px", marginRight: "5px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        <Link to="/Sign&SignUp"  style={{fontWeight:"700",color:'#670b19'}}>
          LOG IN
        </Link>
        <Link to="/"  style={{marginLeft:"20px",fontWeight:"700",color:'#670b19'}} onClick={logoutUser} >
          LOG OUT
        </Link>
        </Flex>
        <Flex
          cursor="pointer"
          justify="center"
          align="center"
          width="45%"
          bg="white"
          fontWeight="700"
          _hover={{ background: "white" }}
        >
          <svg
            style={{ height: "20px", marginRight: "5px" }}
            className={{ width: "15px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" />
          </svg>
          CART{`(0)`}
        </Flex>
      </Flex>
    </Flex>
  );
}
