import { Swiper, SwiperSlide } from "swiper/react";

import "./Swipers.css";
import Styles from "./Card.module.css"
// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import React from "react";
import {
  Box,
  Flex,
  Text,
  Center,
  Stack,
} from "@chakra-ui/react";

import Carousel from "../Components/Carousel";
import Midsection from "../Components/Midsection";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Spacer,
  Button,
  Grid,
  GridItem,
  Image,
  CardBody,
  Card
} from "@chakra-ui/react";
import LordIcon from "../Components/Lordicon";

const Homepage = () => {
  let cardImgs=["https://assets0.mirraw.com/frontpages/12979/rtru_main_webp.webp?1673937576", 
"https://assets0.mirraw.com/frontpages/12980/dfg_main_webp.webp?1673937552", 
"https://assets0.mirraw.com/frontpages/12981/sdfs_%282%29_main_webp.webp?1673937513",
 "https://assets0.mirraw.com/frontpages/12982/yrt_main_webp.webp?1673937529",
  "https://assets0.mirraw.com/frontpages/12983/dfdsf_main_webp.webp?1673937489", 
  "https://assets0.mirraw.com/frontpages/12984/dfsdfsdf_main_webp.webp?1673937460",
"https://assets0.mirraw.com/frontpages/12985/sdfs_main_webp.webp?1673937446", 
"https://assets0.mirraw.com/frontpages/12986/dewe_main_webp.webp?1673937429", 
"https://assets0.mirraw.com/frontpages/12987/dew_main_webp.webp?1673937417", 
"https://assets0.mirraw.com/frontpages/12988/fds_main_webp.webp?1673937399", 
"https://assets0.mirraw.com/frontpages/12988/fds_main_webp.webp?1673937399", 
"https://assets0.mirraw.com/frontpages/12990/df_main_webp.webp?1673937329",
"https://assets0.mirraw.com/frontpages/12991/rte_main_webp.webp?1673937313",
"https://assets0.mirraw.com/frontpages/12992/tr_main_webp.webp?1673937287",
"https://assets0.mirraw.com/frontpages/12993/ds_main_webp.webp?1673937270",
"https://assets0.mirraw.com/frontpages/12994/fd_main_webp.webp?1673937242"
]
let cardImgsTitle=["Tops", "Tunics", "Dresses", "Dress Material", "Anklets", "Bangles", "Maang Tikka", "Kamarbandh", "Ecraft INDIA", "Home & Living", "Wardrobe Organizers", "Jewellery Boxes", "Prestitched Sarees", "Ruffle Sarees", "Stylee lifestyle", "Plus Size Kurtis"]
  return (
    <div>
      <Carousel />
      <Midsection />
      <Grid templateColumns='repeat(4, 1fr)' gap={6} w="60%" m="auto">
    {cardImgs.map((pics,i)=>{
        return <GridItem w='100%' h="auto" key={i}><Card w='100%'>
    <CardBody className={Styles.cardBody}>
      <Image
        src={pics}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt="-5" spacing='3'>
      <Button variant='outline' colorScheme='black' bg="#303030" color="white" fontSize="sm" textAlign="left" border="none" p="15px">
          {cardImgsTitle[i]}
        </Button>
      </Stack>
        
    </CardBody>
  </Card> </GridItem>
    })}
  </Grid>


      <Box
        w="62%"
        m="auto"
        marginTop="30px"
        p="40px"
        lineHeight="20px"
        boxShadow=" rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      >
        <Text fontWeight="600" fontSize="22px" marginLeft={2}>
          Indian Clothing Online Shopping for Women & Men
        </Text>
        <Box fontSize="15px" m="10px 0">
          During 2500 BC, India became one of the first places to grow and use
          cotton for making clothes. Human art forms in Indian temples and
          monuments are perhaps the main source of information on Indian
          clothing. Apart from that the rock-cut sculptures, the cave paintings,
          and remains from the sites of Indus Valley civilization also give a
          detailed bureau of clothing trends in India.
        </Box>
        <Box fontSize="15px" m="10px 0">
          A large majority of Indian clothing for men and women has evolved from
          garments like langota, lungi, sari, gamcha, and dhoti. India is the
          second most populous country in the world and it shows great diversity
          in its population as well. Clothing in India is greatly influenced by
          the religion people follow.
        </Box>

        <Accordion defaultIndex={[0]} allowMultiple transitionDelay="3s">
          <AccordionItem>
            <h2>
              <AccordionButton
                p="8px"
                backgroundColor="white"
                border="none"
                
              >
                <Flex w="100%">
                  <Text fontSize="21px" fontWeight="500" marginTop="10px">
                    More About Ethnic Wear Online Shopping
                  </Text>
                  <Spacer />
                  <LordIcon />
                </Flex>
              </AccordionButton>
            </h2>
            <AccordionPanel p="0" pb={4} fontSize="15px" lineHeight="22px">
              <Box m="10px 0">
                The most notable ethnic apparel for men in India is the kurta
                pyjama. The sherwani is an iteration of the kurta pyjama and is
                mainly worn during the wedding. However, the kurta pyjama is an
                iteration of the jama dhoti which was worn by men India in the
                19th century. It is still worn regularly by men in rural areas
                and occasionally by men in urban areas during festive occasions.
              </Box>
              <Box m="10px 0">
                Apart from the dhoti, ethnic Indian wear also consists of the
                sarong which is more commonly known as the lungi. It is a piece
                of cloth that men drape around the waist and tie it. It is
                usually worn by Muslim men. But a large majority of men in South
                and East India can be seen sporting the lungi. It comes in
                different patterns and colors but the length of the cloth is
                usually constant.
              </Box>
              <Box m="10px 0">
                The sherwani is another Indian ethnic wear. The ethnic name of
                this garment is achkan. It is essentially a kurta made in the
                form of a jacket with exposed button, heavy embroidery and
                needlework. The sherwani flows just below the knees and is
                usually paired with pants called churidar. As a matter of fact,
                churidars are also worn by Indian women.
              </Box>
              <Box m="10px 0">
                The bandhgala is an iteration of the sherwani. Bandh means
                closed and gala means neck. The name suggests that the garment
                sports a closed neck design or what many people like to call as
                the mandarin collar design. This garment hails from the royal
                land of Jodhpur. The pants worn with this are baggy throughout
                the hip and thigh region and grasp the legs tightly. This Indian
                ethnic wear gain popularity quickly and a large majority of men
                wear this outfit during festivals, weddings, and special
                occasions
              </Box>
              <Box m="10px 0">
                Sarees are indeed the most popular Indian ethnic wear for women.
                A saree is basically a long piece of cloth, usually around 10
                meters long which is draped around the body in a variety of
                different styles. Different regions have a special type of
                saree, for example, Kanchipuram from South India, Paithani from
                Maharashtra, Benarasi from North India, and Muga Silk from
                Assam. A blouse is worn with the saree which is called the
                choli.
              </Box>
              <Box m="10px 0">
                The saree is very popular in all parts of India and so is the
                salwar kameez. The kameez is basically a kurti and the salwar is
                the lower garment. It is traditionally worn by women in Punjab
                and hence, it is also sometimes referred to as the Punjabi Suit.
                There are different iterations of the salwar kameez. The
                Anarkali suit, palazzo suit, Patiala suit etc. are some of the
                different kinds of suits available. Dupatta is worn along with
                salwar kameez. It is called the odani in some parts of India and
                is mainly used to veil the head in the presence of elders.
              </Box>
              <Box m="10px 0">
                Change in fashion trends has bought in various types of salwars
                like dhoti salwar, churidars, Patiala salwars, Afghani Salwars,
                Palazzo and so on.
              </Box>

              <Text fontWeight="700">Traditional Clothing of India</Text>
              <Box m="10px 0">
                Traditional Indian clothing depends largely on the religious
                group that people follow. Followers of Islam probably have the
                most distinct outfits. Islam guides that men and women must
                dress modestly. Islamic clothing is all about modesty. Both men
                and women have certain rules on what they can wear and what they
                can’t. One distinctive feature of the Islamic pant is that they
                are airy and comfortable.
              </Box>
              <Box m="10px 0">
                Serwal is one of the most prevalent pant types in Muslim
                culture. A large majority of Muslim men have at least 1 serwal
                in their wardrobe. The serwal is made from cotton and is mostly
                worn beneath the thobe. Men can also pair it with a white shirt.
                The serwal also doubles down as a pyjama. It is very comfortable
                and can be worn easily at home. It is available in the elastic
                waist, drawstring waist, or a combination of both. In Islamic
                culture, the serwal is better known as mikasser.
              </Box>
              <Box m="10px 0">
                Muslim men also wear the izar which is an iteration of the
                lungi/sarong. For Muslim women, the burka, hijab and abaya are
                staples. The hijab is a cloth which is used to cover the head,
                the abaya is a free-flowing cloak from head to toe and the burka
                covers the head and the chest region. Men and women that follow
                Hinduism wear kurta pyjama and sarees mainly. Regional diversity
                also comes into play when talking about traditional Indian
                clothing.
              </Box>
              <Box m="10px 0">
                Therefore, the Indian clothing history is very rich and the
                future of Indian fashion also looks pretty bright with all the
                fashion designers around. Get the fashion trend outfits at
                Mirraw online shopping site with amazing options and cool price
              </Box>
              
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      <Box p="10">
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "grey",
            flexGrow: 1,
            opacity:"50%"
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "grey",
            flexGrow: 1,
            opacity:"50%"
          }}
        >
          <Center
            border={"1px solid"}
            p={5}
            borderColor="grey"
            opacity="70%"
            w={"300px"}
          >
            <Text fontSize="20px" opacity="100%">FEATURED PRODUCTS</Text>
          </Center>
        </Flex>
        <Stack></Stack>
      </Box>


    <div className="swiper">
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6254220/image_small.jpeg?1530780944"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6147263/AA-234-07%28wine%29_small.jpeg?1538576913"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6254520/image_small.jpeg?1530785949"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6254514/image_small.jpeg?1530785819"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6147258/AA-234-03%28morni-Orange%29_small.jpeg?1538576903"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6329300/image_small.jpeg?1533626656"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6483798/2663691_1_small.jpg?1539427555"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6254528/image_small.jpeg?1530786067"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6147271/AA-234-10%28Blue%29_small.jpeg?1538576919"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6254528/image_small.jpeg?1530786067"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/1536802/MA7-9004-A_small.JPG?1558690395"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6329284/image_small.jpeg?1533626417"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>

    <Box p="10">
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "grey",
            flexGrow: 1,
            opacity:"50%"
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "grey",
            flexGrow: 1,
            opacity:"50%"
          }}
        >
          <Center
            border={"1px solid"}
            p={5}
            borderColor="grey"
            opacity="70%"
            w={"300px"}
          >
            <Text fontSize="20px" opacity="100%">BESTSELLER PRODUCTS</Text>
          </Center>
        </Flex>
       
      </Box>

      <div className="swiper">
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6726551/1215_%283%29_small.jpg?1548340995"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6685872/9327_%282%29_small.jpg?1547033925"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6685955/9372_small.jpg?1547034146"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6662600/image_small.jpeg?1546336432"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6257006/1019_small.jpg?1532705048"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/8854081/IMG_3997_small.jpg?1616858162"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper1">
          <img
            src="https://assets0.mirraw.com/images/6685868/9325_%282%29_small.jpg?1547033918"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div> 


    </div>
  );
};

export default Homepage;


// Import Swiper React components






