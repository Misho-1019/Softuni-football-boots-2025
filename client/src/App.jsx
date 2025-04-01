import { Routes, Route } from "react-router"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import Info from "./components/info/Info"
import Header from "./components/header/Header"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import CreateBoot from "./components/create/CreateBoot"
import Catalog from "./components/catalog/Catalog"
import BootDetails from "./components/details/BootDetails"
import EditBoot from "./components/edit/EditBoots"
import Logout from "./components/logout/Logout"
import { UserProvider } from "./providers/UserProvider"
import AuthGuard from "./components/guards/AuthGuard"
import GuestGuard from "./components/guards/GuestGuard"
import Profile from "./components/profile/Profile"


function App() {

    return (
        <UserProvider>
            <div>

                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/boots" element={<Catalog />} />
                    <Route path="/boots/:bootId/details" element={<BootDetails />} />
                    <Route element={<AuthGuard />}>
                        <Route path="/boots/create" element={<CreateBoot />} />
                        <Route path="/boots/:bootId/edit" element={<EditBoot />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                    <Route element={<GuestGuard />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                </Routes>

                <Info />

                <Footer />

            </div>
        </UserProvider>
    )
}

export default App
