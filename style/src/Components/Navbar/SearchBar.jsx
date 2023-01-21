import React from 'react'
import { Button, Flex, Image, Input } from "@chakra-ui/react"
import logo from "../../../src/Style_Loft_final_logo.png"
import { BsSearch } from "react-icons/bs";
import {Link} from "react-router-dom"

const SearchBar = () => {
  return (
        <Flex id="mid" h="90px" justify="center" align="center">
            <Flex align="center" justify="space-between" w="1200px">
                <Link to="/">
                    <Image src={logo} w="300px" h='90px' objectFit='contain' />
                </Link>
                <Flex border="1px solid black" w="50%">
                    <Input border="none" fontStyle="italic" placeholder="Search Something..." borderRadius="0" w="90%"></Input>
                    <Button _hover={{background:"#670b19"}} bg="#670b19" borderRadius="0" w="13%" border="0pc" h="40px"> <BsSearch color='white' /> </Button>
                </Flex>
            </Flex>
        </Flex> 
  )
}

export default SearchBar




