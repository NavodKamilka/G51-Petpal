import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Guest

import Contactus from './Pages/Guest/Contactus'
import Events from './Pages/Guest/Events'
import Healthcare from './Pages/Guest/Healthcare'
import Home from './Pages/Guest/Home'
import Ourservices from './Pages/Guest/Ourservices'
import Shops from './Pages/Guest/Shops'
import Whoweare from './Pages/Guest/Whoweare'

import RegistrationPetOwner from './Pages/Guest/RegistrationPetOwner.js'
import RegistrationVetDoc from './Pages/Guest/RegistrationVetDoc.js'
import RegistrationClinic from './Pages/Guest/RegistrationClinic.js'
import RegistrationShop from './Pages/Guest/RegistrationShop.js'
import Login from './Pages/Guest/Login.js'


// PetOwner

import MyProfile from './Pages/Petowner/MyProfile/MyProfile'
import PetProfile from './Pages/Petowner/MyProfile/PetProfile'
import Vaccinations from './Pages/Petowner/MyProfile/Vaccinations'

import Discussion from "./Pages/Petowner/Discussion/Discussion";
import DiscussionStart from "./Pages/Petowner/Discussion/DiscussionStart"

import PetProducts from "./Pages/Petowner/PetProducts/PetProducts"

import PetMart from "./Pages/Petowner/PetMart/PetMart"
import PetSell from "./Pages/Petowner/PetMart/PetSell"


//shopkeeper

import ShopProfile from './Pages/Shop/ShopProfile.js'
import ShopProfileFinal from './Pages/Shop/ShopProfileFinal.js'
import Products from './Pages/Shop/Products.js'
import ProductsFinal from './Pages/Shop/ProductsFinal.js'
import Pets from './Pages/Shop/Pets.js'
import PetsFinal from './Pages/Shop/PetsFinal'
import ShopAds from './Pages/Shop/ShopAds'
import ShopAdsFinal from './Pages/Shop/ShopAdsFinal'
import ProductAds from './Pages/Shop/ProductAds'
import ProductAdsFinal from './Pages/Shop/ProductAdsFinal'
import PetAds from './Pages/Shop/PetAds'
import PetAdsFinal from './Pages/Shop/PetAdsFinal'
import AddUpdateProduct from './Pages/Shop/AddUpdateProduct'
import AddUpdatePet from './Pages/Shop/AddUpdatePet'
import AddUpdatePetFinal from './Pages/Shop/AddUpdatePetFinal'
import AddUpdateProductFinal from './Pages/Shop/AddUpdateProductFinal'
import ShopProfileGuestView from './Pages/Shop/ShopProfileGuestView'
import Payment from './Pages/Shop/Payment'
import PaymentFinal from './Pages/Shop/PaymentFinal'

//test - keshani

//common
import  Articles from './Pages/Manager/Annoucement/Articles';
import LostAndFound from './Pages/Manager/Annoucement/LostAndFound'

//requests
import  NoticesRequests from './Pages/Manager/Requests/Notices';
import  AccountRequests from './Pages/Manager/Requests/AccountRequests';
import  AccountManagement from './Pages/Manager/Requests/AccountManagement';

// dashboard
import AdminDashboard from './Pages/Manager/AdminDashboard/AdminDashboard'

function App() {
  return (
    <div > 
      <BrowserRouter>
        <Routes>
          {/* Guest */}
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Healthcare" element={<Healthcare />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Ourservices" element={<Ourservices />} />
          <Route path="/Shops" element={<Shops />} />
          <Route path="/Whoweare" element={<Whoweare />} />
          <Route path='/RegistrationPetOwner' element={<RegistrationPetOwner/>} /> 
          <Route path='/RegistrationVetDoc' element={<RegistrationVetDoc/>} /> 
          <Route path='/RegistrationClinic' element={<RegistrationClinic/>} /> 
          <Route path='/RegistrationShop' element={<RegistrationShop/>} /> 
          <Route path='/Login' element={<Login/>} />


          {/* PetOwner */}
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/PetProfile/Alex" element={<PetProfile />} />
	    <Route path="/PetProfile/Alex/Vaccinations" element={<Vaccinations />} />

          <Route path="/Discussion" element={<Discussion />} />
          <Route path="/Discussion/Start" element={<DiscussionStart />} />

          <Route path="/PetProducts" element={<PetProducts />} />

          <Route path="/PetMart" element={<PetMart />} />
          <Route path="/PetMart/PetSell" element={<PetSell />} />



          {/* shopkeeper */}
          <Route path='/ShopProfile' element={<ShopProfile/>} /> 
          <Route path='/ShopProfileFinal' element={<ShopProfileFinal/>} /> 
          <Route path='/Products' element={<Products/>} />
          <Route path='/ProductsFinal' element={<ProductsFinal/>} />
          <Route path='/Pets' element={<Pets/>} />
          <Route path='/PetsFinal' element={<PetsFinal/>} />
          <Route path='/ShopAds' element={<ShopAds/>} />
          <Route path='/ShopAdsFinal' element={<ShopAdsFinal/>} />
          <Route path='/ProductAds' element={<ProductAds/>} />
          <Route path='/ProductAdsFinal' element={<ProductAdsFinal/>} />
          <Route path='/PetAds' element={<PetAds/>} />
          <Route path='/PetAdsFinal' element={<PetAdsFinal/>} />
          <Route path='/AddUpdateProduct' element={<AddUpdateProduct/>} />
          <Route path='/AddUpdatePet' element={<AddUpdatePet/>} />
          <Route path='/AddUpdatePetFinal' element={<AddUpdatePetFinal/>} />
          <Route path='/AddUpdateProductFinal' element={<AddUpdateProductFinal/>} />
          <Route path='/ShopProfileGuestView' element={<ShopProfileGuestView/>} />
          <Route path='/Payment' element={<Payment/>} />
          <Route path='/PaymentFinal' element={<PaymentFinal/>} />
          {/* test keshani */}

          {/*common*/}
          <Route path='/Articles' element={<Articles/>} />
          <Route path='/LostAndFound' element={<LostAndFound/>} />

          {/*requests*/}
          <Route path='/NoticesRequests' element={<NoticesRequests/>}/>
          <Route path='/AccountRequests' element={<AccountRequests/>}/>
          <Route path='/AccountManagement' element={<AccountManagement/>}/>

          {/*dashboard*/}
          <Route path='/AdminDashboard' element={<AdminDashboard/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
