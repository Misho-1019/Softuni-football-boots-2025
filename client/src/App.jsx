import { Routes, Route } from "react-router"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import Info from "./components/info/Info"
import Header from "./components/header/Header"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import CreateBoot from "./components/create/CreateBoot"
import Catalog from "./components/catalog/Catalog"


function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/boots" element={<Catalog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/boots/create" element={<CreateBoot />} />
            </Routes>
            
            <Info />

            <Footer />

        </>
    )
}

export default App
