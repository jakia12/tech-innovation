import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import NotFound from "../pages/notFound/NotFound";
import Reviews from "../pages/reviews/Reviews";
import SignUp from '../pages/signUp/SignUp';
import Login from "../pages/login/Login";
import AddServices from "../pages/addService/AddServices";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route to='/' element={<Main />}>
        <Route to="/" element={<Home />} />
        <Route to="/services" element={<Services />} />
        <Route to="/reviews" element={<Reviews />} />
        <Route to="/addServices" element={<AddServices />} />
        <Route to="/signUp" element={<SignUp />} />
        <Route to="/login" element={<Login />} />
        <Route to="*" element={<NotFound />} />
    </Route>
));