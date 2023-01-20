import { Box, Center, Flex, Grid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Footer.module.css";
import { GrInstagram } from "react-icons/gr";
import { FaAppStoreIos, FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineCopyright,AiFillAndroid } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <Box
        bg="url('https://www.mirraw.com/assets/footer_bg.png')"
        h="300px"
        m="auto"
        color="white"
      >
        <Center w="100%" h="100%">
          <Box w="70%" h="auto">
            <Grid
              gridTemplateColumns={[
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(5, 1fr)",
              ]}
              gap={6}
              m="auto"
            >
              <Flex direction="column" fontSize="xs">
                <Text fontSize="1g" fontWeight="500" m="6px 0">
                  Help
                </Text>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/survey"
                >
                  Survey
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/how"
                >
                  How To Buy
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/how"
                >
                  Track Order
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/how"
                >
                  Payments
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/how"
                >
                  Shipping
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/how"
                >
                  Cancellations
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/how"
                >
                  FAQ
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/how"
                >
                  Helpdesk
                </Link>
              </Flex>
              <Flex direction="column" fontSize="xs">
                <Text fontSize="1g" fontWeight="500" m="6px 0">
                  COMPANY
                </Text>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/survey"
                >
                  About Us
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/how"
                >
                  Contact Us
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/how"
                >
                  Careers
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/how"
                >
                  Blog
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/how"
                >
                  Terms
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/how"
                >
                  Privacy
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/how"
                >
                  FAQ
                </Link>
              </Flex>
              <Flex direction="column" fontSize="xs">
                <Text fontSize="lg" fontWeight="500" m="6px 0">
                  BUSINESS
                </Text>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/survey"
                >
                  International Buyers
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/how"
                >
                  Sell on Mirraw
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/how"
                >
                  Designer Login
                </Link>
              </Flex>
              <Flex direction="column" fontSize="xs">
                <Text fontSize="lg" fontWeight="500" m="6px 0">
                  COUPON PARTNERS
                </Text>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/survey"
                >
                  Mirraw Coupons
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "23px",
                    fontSize: "14px",
                    paddingLeft: "4px",
                  }}
                  to="/how"
                >
                  Mirraw Offers
                </Link>
                <Text fontSize="lg" fontWeight="500" m="6px 0">
                  SOCIAL
                </Text>
                <div className="Social">
                  <GrInstagram style={{ fontSize: "25px" }} />
                  <BsTwitter style={{ marginLeft: "10px", fontSize: "25px" }} />
                  <FaFacebook style={{ marginLeft: "5px", fontSize: "25px" }} />
                  <AiFillAndroid style={{ marginLeft: "5px", fontSize: "25px" }} />
                  <FaAppStoreIos style={{ marginLeft: "5px", fontSize: "25px" }} />
                </div>
              </Flex>
              <Flex direction="column" fontSize="xs">
                <Text fontSize="lg" fontWeight="500" m="6px 0">
                  PRESS
                </Text>
                <div className="Social">
                  <img
                    src="https://www.mirraw.com/assets/dna-be0b711232e819d1dfeb542296bf4d56c80cd17c41badb9494300cffe4fe9cf5.png"
                    alt=""
                  />
                  <img
                    src="https://www.mirraw.com/assets/yourstory-af15b2ddcc71a01016c6b879d665af554375ace702d94eaa48d0b2210834e0d4.png"
                    alt=""
                  />
                </div>
                <div className="Social">
                  <img
                    src="https://www.mirraw.com/assets/payu-a31ef1db3817ade015c5ad386da4b2211b82dbebcad90964c58e4b7dc889b255.png"
                    alt=""
                  />
                  <img
                    src="https://www.mirraw.com/assets/paypal-449cce1c328ad3e821e482a3795a336b4659a62c892eddb7f5dd095eb5d42a16.png"
                    alt=""
                  />
                </div>
              </Flex>
            </Grid>
          </Box>
        </Center>
      </Box>
      <Box bg="rgb(123, 14, 29)" color="white" fontSize="14px" p="10px 0">
        <Center>
          Copyright <AiOutlineCopyright /> 2023, Style Loft. All Rights
          Reserved.
        </Center>
      </Box>
      
    </>
  );
}
