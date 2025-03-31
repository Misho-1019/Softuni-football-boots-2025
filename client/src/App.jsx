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
import { UserContext } from "./context/userContext"
import Logout from "./components/logout/Logout"
import usePersistedState from "./hooks/usePersistedState"


function App() {
    const [authData, setAuthData] = usePersistedState('auth', {})

    const userLoginHandler = (resultData) => {
        setAuthData(resultData)
    }

    const userLogoutHandler = () => {
        setAuthData({})
    }

    return (
        <UserContext.Provider value={{...authData, userLoginHandler, userLogoutHandler}}>

        <div>

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/boots" element={<Catalog />} />
                <Route path="/boots/create" element={<CreateBoot />} />
                <Route path="/boots/:bootId/details" element={<BootDetails />} />
                <Route path="/boots/:bootId/edit" element={<EditBoot />} />
                <Route path="/login" element={<Login onLogin={userLoginHandler} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>

            <Info />

            <Footer />

        </div>
        </UserContext.Provider>
    )
}

export default App
