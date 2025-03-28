import { Routes, Route } from "react-router"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import Info from "./components/info/Info"
import Header from "./components/header/Header"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import CreateBoot from "./components/create/CreateBoot"
import Catalog from "./components/catalog/Catalog"
import { useState } from "react"
import BootDetails from "./components/details/BootDetails"
import EditBoot from "./components/edit/EditBoots"


function App() {
    return (
        <div>

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/boots" element={<Catalog />} />
                <Route path="/boots/create" element={<CreateBoot />} />
                <Route path="/boots/:bootId/details" element={<BootDetails />} />
                <Route path="/boots/:bootId/edit" element={<EditBoot />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

            <Info />

            <Footer />

        </div>
    )
}

export default App
