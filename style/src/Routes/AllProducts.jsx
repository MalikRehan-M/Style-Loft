import { Flex, Box, Grid ,Spacer ,Button} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import LoaderAnime from "../Components/Loader";
import ProductFilter1 from "../Components/Filter1";
import ProductFilter2 from "../Components/Filter2";
import ProductFilter3 from "../Components/Filter3";
import ProductFilter4 from "../Components/Filter4";

export default function AllProducts() {
  let [page, setPage] = useState(1);
  let [pageLimit, setPageLimit]= useState(0)
  let [proData, setProDta] = useState([]);
  const { category} = useContext(AuthContext);
  let [isLoaded, setIsLoaded] = useState(false);

  async function FetchData() {
    setIsLoaded(true);
    let data = await axios.get(
      `https://purple-fog-period.glitch.me/${category}?_page=${page}&_limit=24`
    );
    setPageLimit(data.headers["x-total-count"])
    setProDta(data.data);
    setIsLoaded(false);
  }
  useEffect(() => {
    FetchData();
  }, [category,page]);


  if (isLoaded) {
    return <LoaderAnime />;
  } else {
    return (
      <>
        <Flex justify="center" width="100vw">
          <Flex align="center" width="80%">
            <Flex align="center">
              Home <Box margin="2px">/</Box>
            </Flex>
            <Flex align="center">
              Women <Box margin="2px">/</Box>
            </Flex>
            <Flex align="center">
              Sarees <Box margin="2px"></Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex width="100vw" justify="center">
          <Flex
            flexDir="column"
            gap="10px"
            p="10px"
            w="15vw"
            top="0"
            mt="15px"
            position="sticky"
            h="100vh"
  
            boxShadow= "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
          >
            <ProductFilter1/>
            <ProductFilter2/>
            <ProductFilter3/>
            <ProductFilter4/>
          </Flex>
          <Grid
            templateColumns="repeat(4,1fr)"
            gap="10px"
            p="10px"
            w="65vw"
            minH="200vh"
          >
            {proData.map((data) => {
              if (
                data["lazy src"] !== "" &&
                data["lazy src"] !==
                  "https://www.mirraw.com/assets/11-335ed79f82b843135faf5fb751a71911e4512e5999837641a2914b270f7e6935.png"
              ) {
                return (
                  <ProductCard
                    key={data.id}
                    title={data["listing-title"]}
                    img={data["lazy src"]}
                    price={data["effective-price"]}
                    oldPrice={data["old-price"]}
                    discount={data["red-discount-percentage"]}
                    param={`/${category}/${data["listing-title"]}/${data.id}`}
                  />
                );
              } else if (
                data["lazy-custom src"] !== "" &&
                data["lazy src"] !==
                  "https://www.mirraw.com/assets/11-335ed79f82b843135faf5fb751a71911e4512e5999837641a2914b270f7e6935.png"
              ) {
                return (
                  <ProductCard
                    key={data.id}
                    title={data["listing-title"]}
                    img={data["lazy-custom src"]}
                    price={data["effective-price"]}
                    oldPrice={data["old-price"]}
                    discount={data["red-discount-percentage"]}
                    param={`/${category}/${data["listing-title"]}/${data.id}`}
                  />
                );
              }
            })}
          </Grid>
        </Flex>
        <Flex marginLeft="550px" marginTop="15px" w="60%">
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Button isDisabled={page <= 1} fontSize="2xl" fontWeight={700} onClick={()=>{setPage(page-1)}}>Previous</Button>
        <Button isDisabled={true} fontSize="2xl" fontWeight={700} m="0 10px">{page}</Button>
        <Button fontSize="2xl" fontWeight={700} onClick={()=>{setPage(page+1)}} isDisabled={page>=(pageLimit/35)} >Next</Button>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
      </Flex>
      </>
    );
  }
}
