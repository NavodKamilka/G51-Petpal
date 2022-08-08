import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'

// Guest

import Contactus from './Pages/Guest/Contactus'
import Events from './Pages/Guest/Events'
import Healthcare from './Pages/Guest/Healthcare'
import Home from './Pages/Guest/Home'
import Ourservices from './Pages/Guest/Ourservices'
import Shops from './Pages/Guest/Shops'
import Whoweare from './Pages/Guest/Whoweare'

// PetOwner

import MyProfile from './Pages/Petowner/MyProfile/MyProfile'
import PetProfile from './Pages/Petowner/MyProfile/PetProfile'


//shopkeeper
import RegistrationPetOwner from './pages/RegistrationPetOwner.js'
import RegistrationVetDoc from './pages/RegistrationVetDoc.js'
import RegistrationClinic from './pages/RegistrationClinic.js'
import RegistrationShop from './pages/RegistrationShop.js'
import Login from './pages/Login.js'
import ShopProfile from './pages/Shop/ShopProfile.js'
// import Test from './pages/Test.js'
import Products from './pages/Shop/Products.js'
import Pets from './pages/Shop/Pets.js'
import ShopAds from './pages/Shop/ShopAds'
import ProductAds from './pages/Shop/ProductAds'
import PetAds from './pages/Shop/PetAds'
import AddUpdateProduct from './pages/Shop/AddUpdateProduct'
import AddUpdatePet from './pages/Shop/AddUpdatePet'
import AddUpdatePetFinal from './pages/Shop/AddUpdatePetFinal'
import ShopProfileGuestView from './pages/Shop/ShopProfileGuestView'



function App() {
  return (
    <div > 
      <BrowserRouter>
        <Routes>
          {/* Guest */}
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Healthcare" element={<Healthcare />} />
          <Route path="/" element={<Home />} />
          <Route path="/Ourservices" element={<Ourservices />} />
          <Route path="/Shops" element={<Shops />} />
          <Route path="/Whoweare" element={<Whoweare />} />

          {/* PetOwner */}
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/PetProfile/Alex" element={<PetProfile />} />


          {/* shopkeeper */}
          <Route path='/RegistrationPetOwner' element={<RegistrationPetOwner/>} /> 
          <Route path='/RegistrationVetDoc' element={<RegistrationVetDoc/>} /> 
          <Route path='/RegistrationClinic' element={<RegistrationClinic/>} /> 
          <Route path='/RegistrationShop' element={<RegistrationShop/>} /> 
          <Route path='/Login' element={<Login/>} />
          <Route path='/ShopProfile' element={<ShopProfile/>} /> 
          <Route path='/Products' element={<Products/>} />
          <Route path='/Pets' element={<Pets/>} />
          <Route path='/ShopAds' element={<ShopAds/>} />
          <Route path='/ProductAds' element={<ProductAds/>} />
          <Route path='/PetAds' element={<PetAds/>} />
          <Route path='/AddUpdateProduct' element={<AddUpdateProduct/>} />
          <Route path='/AddUpdatePet' element={<AddUpdatePet/>} />
          <Route path='/ShopProfileGuestView' element={<ShopProfileGuestView/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
