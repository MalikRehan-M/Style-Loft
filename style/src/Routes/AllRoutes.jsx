import { Routes, Route } from "react-router-dom";
import HomeandLiving from "./Home&Living";
import Homepage from "./Homepage";
import Jewellery from "./Jewellery";
import Kids from "./Kids";
import Kurtis from "./Kurtis";
import Lehengas from "./Lehengas";
import Men from "./Men";
import SalwarKameez from "./SalwarKameez";
import Sarees from "./Sarees";
import SpiritualandCollections from "./Spiritual&Collections";




export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/homeliving" element={<HomeandLiving/>}></Route>
            <Route path="/jewellery" element={<Jewellery/>}></Route>
            <Route path="/kids" element={<Kids/>}></Route>
            <Route path="/kurtis" element={<Kurtis/>}></Route>
            <Route path="/lehengas" element={<Lehengas/>}></Route>
            <Route path="/men" element={<Men/>}></Route>
            <Route path="/salwarkameez" element={<SalwarKameez/>}></Route>
            <Route path="/sarees" element={<Sarees/>}></Route>
            <Route path="/spiritual" element={<SpiritualandCollections/>}></Route>
        </Routes>
    )
}