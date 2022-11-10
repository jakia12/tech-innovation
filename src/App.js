
import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Main from './layout/Main';
import Home from './pages/home/Home';
import Reviews from './pages/reviews/Reviews';
import AddServices from './pages/addService/AddServices';
import SignUp from './pages/signUp/SignUp';
import Login from './pages/login/Login';
import NotFound from './pages/notFound/NotFound';
import Services from './pages/services/Services';
import ServiceDetails, { loader as serviceLoader } from './pages/serviceDetails/ServiceDetails';
import PrivateRoute from './route/PrivateRoute';
import UpdateReview, { loader as reviewLoader } from './pages/updateReview/UpdateReview';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:serviceId" element={<ServiceDetails />} loader={serviceLoader} />
      <Route path="/reviews" element={<PrivateRoute><Reviews /></PrivateRoute>} />
      <Route path="/reviews/:reviewId" element={<UpdateReview />} loader={reviewLoader} />
      <Route path="/addServices" element={<PrivateRoute><AddServices /></PrivateRoute>} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />

    </Route>
  ));

  return (
    <div className="App">

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
