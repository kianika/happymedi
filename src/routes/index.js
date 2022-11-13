import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import SharedLayout from "../Layout/SharedLayout";
import Contact from "../pages/Contact/Contact";




function Router() {
  
    return (
      
       
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              
            </Route>
          </Routes>
        </BrowserRouter>
        
    );
  }
  
  export default Router;
