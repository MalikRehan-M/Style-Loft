
import { Box, Center, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Footer.module.css";



export default function Footer(){
    let [vis, setVis] = useState(false)
    window.addEventListener("scroll",()=>{
        let pos = window.scrollY;
        if(pos>100){
            setVis(true)
        }else{
            setVis(false)
        }
    })
    return <>
    
    {/* <ReviewCarousel /> */}
        <Box bg="url('https://www.mirraw.com/assets/footer_bg.png')" h="300px" m="auto" color="white">
            <Center w="100%" h="100%">
                <Box w="70%" h="auto">
                <Grid gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)"]} gap={6} m="auto" >
                <Flex direction="column" fontSize="xs">
                    <Text fontSize="lg" fontWeight="500" m="6px 0">Help</Text>
                    <Link to="/survey">Survey</Link>
                    <Link to="/how">How To Buy</Link>
                    <Link to="/how">Track Order</Link>
                    <Link to="/how">Payments</Link>
                    <Link to="/how">Shipping</Link>
                    <Link to="/how">Cancellations</Link>
                    <Link to="/how">FAQ</Link>
                    <Link to="/how">Helpdesk</Link>
                </Flex>
                <Flex direction="column" fontSize="xs">
                    <Text fontSize="lg" fontWeight="500" m="6px 0">COMPANY</Text>
                    <Link to="/survey">About Us</Link>
                    <Link to="/how">Contact Us</Link>
                    <Link to="/how">Careers</Link>
                    <Link to="/how">Blog</Link>
                    <Link to="/how">Terms</Link>
                    <Link to="/how">Privacy</Link>
                    <Link to="/how">FAQ</Link>
                </Flex>
                <Flex direction="column" fontSize="xs">
                    <Text fontSize="lg" fontWeight="500" m="6px 0">BUSINESS</Text>
                    <Link to="/survey">International Buyers</Link>
                    <Link to="/how">Sell on Mirraw</Link>
                    <Link to="/how">Designer Login</Link>
                </Flex>

                {/* Coupon Partners and Social Media */}
                <Flex direction="column" fontSize="xs">
                    <Text fontSize="lg" fontWeight="500" m="6px 0">COUPON PARTNERS</Text>
                    <Link to="/survey">Mirraw Coupons</Link>
                    <Link to="/how">Mirraw Offers</Link>
                    <Text fontSize="lg" fontWeight="500" m="6px 0">SOCIAL</Text>
                    <ul style={Style}>
                        <li><Image src="https://www.mirraw.com/assets/twitter_footer-498ca0718d145a3362056fc77766ab3961a292b10fe3d588f2a1e969f0777417.png" /></li>
                        <li><Image src="https://www.mirraw.com/assets/fb_footer-ae2f75a25284a2f024d9614a144194ce1bd478e5617f38a49bcc2292b8da9521.png" /></li>
                        <li><Image src="https://www.mirraw.com/assets/instagram-01a464e128b603d368a3ba64064b79a47432ca603641da1c0308be4306462c4f.png" /></li>
                        <li><Image src="https://www.mirraw.com/assets/android_footer-26003fe0ae23b4ab11b633697f154996efd4946073bb9d43b7699d201a541a68.png" /></li>
                        <li><Image src="https://www.mirraw.com/assets/ios_footer-019e5f0e8d65afd830c2d5994d36bc563a894a23bab80f736982e6d33127fc9e.png" /></li>
                        <li></li>
                    </ul>
                </Flex>

                {/* Press  */}
                <Flex direction="column" fontSize="xs">
                    <Text fontSize="lg" fontWeight="500" m="6px 0">PRESS</Text>
                    <Flex>
                    <Box>
                    <Image src="https://www.mirraw.com/assets/dna-be0b711232e819d1dfeb542296bf4d56c80cd17c41badb9494300cffe4fe9cf5.png" p="1px" />
                    <Image src="https://www.mirraw.com/assets/payu-a31ef1db3817ade015c5ad386da4b2211b82dbebcad90964c58e4b7dc889b255.png" p="1px" />
                    </Box>
                    <Box>
                    <Image src="https://www.mirraw.com/assets/yourstory-af15b2ddcc71a01016c6b879d665af554375ace702d94eaa48d0b2210834e0d4.png" p="1px" />
                    <Image src="https://www.mirraw.com/assets/paypal-449cce1c328ad3e821e482a3795a336b4659a62c892eddb7f5dd095eb5d42a16.png" p="1px" />
                    </Box>
                    </Flex>
                </Flex>
                
                </Grid>
                </Box>
            </Center>
        </Box>
        <Box bg="rgb(123, 14, 29)" color="white" fontSize="xs" p="10px 0"><Center>Copyright 2023. All Rights Reserved.</Center></Box>
        {vis?(
        <a href="#"><Box position="fixed" bottom={5} right={10} bg="white" p="10px 20px" borderRadius="50%" border="2px solid black" fontWeight={700} fontSize="xl">^</Box></a>
        ):null}
    </>
}
