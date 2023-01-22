import {Radio, Flex, RadioGroup } from "@chakra-ui/react";
import FilterReusable from "./FilterBox";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
export default function ProductFilter3() {
    const {sorting} = useContext(AuthContext)
    return (
        <FilterReusable name="SORT BY">
    
            <Flex align="center" flexDir="column" w="100%">
                <Flex gap="5px" h="70%" position="absolute" top="45px" overflowY="scroll" w="80%" flexDir="column">
                    <RadioGroup>
                    <Radio value="A-Z" onChange={()=>{sorting("A-Z")}}>A to Z</Radio>
                    <br />
                    <Radio value="Z-A" onChange={()=>{sorting("Z-A")}}>Z to A</Radio>
                   
                    <Radio value="asc" onChange={()=>{sorting("asc")}}>Price : Low to High</Radio>
                    <Radio value="dsc" onChange={()=>{sorting("dsc")}}>Price : High to Low</Radio>
                    </RadioGroup>
                </Flex>
            </Flex>
        </FilterReusable>
    )
}