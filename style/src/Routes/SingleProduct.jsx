import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';
import axios from "axios";
import { useEffect, useState,useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useParams } from 'react-router-dom';
import LoaderAnime from '../Components/Loader';


export default function SingleProduct() {
  let para=useParams()
  let [proData, setProDta] = useState({});
  const { category } = useContext(AuthContext);
  let [isLoaded, setIsLoaded] = useState(false);
  // console.log(para)
  async function FetchData() {
    setIsLoaded(true);
    let data = await axios.get(
      `https://purple-fog-period.glitch.me/${category}/${para.id}`
    );
    console.log(data)
    setProDta(data.data);
    setIsLoaded(false);

  }
  useEffect(()=>{
    FetchData();
  },[])

  if (isLoaded) {
    return <LoaderAnime />;
  } else {
    return (
      <>
      <Container maxW={'7xl'}>
          <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 18, md: 24 }}>
              <Flex justify={"center"}>
                  <Image
                      rounded={'md'}
                      alt={'product image'}
                      src={
                          proData["lazy-custom src"]===""?proData["lazy src"]:proData["lazy-custom src"]
                      }
                      fit={'cover'}
                      align={'center'}
                      h={{ base: '100%', sm: '400px', lg: '500px' }}
                  />
              </Flex>
              <Stack spacing={{ base: 6, md: 10 }}>
                  <Box as={'header'}>
                      <Heading
                          lineHeight={1.1}
                          fontWeight={600}
                          fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                          {proData["listing-title"]}
                      </Heading>
                      <Text
                          mt={"20px"}
                          color={'gray.900'}
                          fontWeight={500}
                          fontSize={'2xl'}>
                          New Price : {proData["effective-price"]}
                      </Text>
                  </Box>

                  <Stack
                      spacing={{ base: 4, sm: 6 }}
                      direction={'column'}
                      divider={
                          <StackDivider
                              borderColor={'gray.600'}
                          />
                      }>
                      <VStack spacing={{ base: 4, sm: 6 }}>
                          <Text
                              color={ 'gray.400'}
                              fontSize={'2xl'}
                              fontWeight={'300'}>
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                              diam nonumy eirmod tempor invidunt ut labore
                          </Text>
                          <Text fontSize={'lg'}>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                              aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                              maxime modi nam officiis porro, quae, quisquam quos
                              reprehenderit velit? Natus, totam.
                          </Text>
                      </VStack>
                      <Box>
                          <Text
                              fontSize={{ base: '16px', lg: '18px' }}
                              color={ '#670b19'}
                              fontWeight={'500'}
                              textTransform={'uppercase'}
                              mb={'4'}>
                              Discount : {
                                proData["red-discount-percentage"]
                              }
                          </Text>

                      
                      </Box>
                      <Box>
                          <Text
                              fontSize={{ base: '16px', lg: '18px' }}
                              color={ '#670b19'}
                              fontWeight={'500'}
                              textTransform={'uppercase'}
                              mb={'4'}>
                              Old Price : {proData["old-price"]}
                          </Text>

                          
                      </Box>
                  </Stack>

                  <Button
                      rounded={'none'}
                      w={'full'}
                      mt={8}
                      size={'lg'}
                      py={'7'}
                      bg={'#670b19'}
                      color={'white'}
                      textTransform={'uppercase'}
                      _hover={{
                          transform: 'translateY(2px)',
                          boxShadow: 'lg',
                      }}>
                      Add to cart
                  </Button>

                  <Stack direction="row" alignItems="center" justifyContent={'center'}>
                      <Text>2-3 business days delivery</Text>
                  </Stack>
              </Stack>
          </SimpleGrid>
      </Container>
  </>
    );
}
}