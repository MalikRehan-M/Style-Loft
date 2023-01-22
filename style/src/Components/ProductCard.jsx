import {
  Image,
  Card,
  CardBody,
  Text,
  Box,
  Stack,
  StackDivider,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "../index.css";
export default function ProductCard(props) {
  return (
    <NavLink to={props.param}>
      <Card >
        <CardBody>
          <Stack divider={<StackDivider />} spacing="2">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                <Image src={props.img} width="100%"></Image>
              </Heading>
            </Box>
            <Box>
              <Text pt="2" fontSize="15px" ml="7px">
                {props.title}
              </Text>
              <Flex mt="5px" width="90%" justify="space-evenly" align="center">
                <Text fontWeight="600">{props.price}</Text>
                <Text textDecoration="line-through" color="grey">
                  {props.oldPrice}
                </Text>
                <Text color=" #670b19" fontWeight="600">
                  {props.discount}
                </Text>
                <FaRegHeart color=" #670b19" size="20px" />
              </Flex>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </NavLink>
  );
}
