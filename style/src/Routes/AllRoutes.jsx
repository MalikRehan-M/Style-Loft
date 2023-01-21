import { Routes, Route } from "react-router-dom";
import HomeandLiving from "./Home&Living";
import Homepage from "./Homepage";
import Login from "./Login";
import SingleProduct from "./SingleProduct";





export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/homeliving" element={<HomeandLiving/>}></Route>
            <Route path="/jewellery" element={<HomeandLiving/>}></Route>
            <Route path="/kids" element={<HomeandLiving/>}></Route>
            <Route path="/kurtis" element={<HomeandLiving/>}></Route>
            <Route path="/lehengas" element={<HomeandLiving/>}></Route>
            <Route path="/men" element={<HomeandLiving/>}></Route>
            <Route path="/salwarkameez" element={<HomeandLiving/>}></Route>
            <Route path="/sarees" element={<HomeandLiving/>}></Route>
            <Route path="/spiritual" element={<HomeandLiving/>}></Route>
            <Route path="/Sign&SingUp" element={<SingleProduct/>}></Route>
            
        </Routes>
    )
}