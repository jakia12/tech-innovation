
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

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/addServices" element={<AddServices />} />
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
