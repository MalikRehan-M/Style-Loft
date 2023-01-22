import { Center } from '@chakra-ui/react'
import React from 'react'
import {PropagateLoader} from "react-spinners"
const LoaderAnime = () => {
  return (
    <div>
     <Center style={{width:"100px",height:"100px",margin:"auto",}}>
     <PropagateLoader color="#670b19" />
     </Center>
    </div>
  )
}

export default LoaderAnime
