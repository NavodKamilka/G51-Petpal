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

import RegistrationPetOwner from './Pages/Guest/RegistrationPetOwner.js'
import RegistrationVetDoc from './Pages/Guest/RegistrationVetDoc.js'
import RegistrationClinic from './Pages/Guest/RegistrationClinic.js'
import RegistrationShop from './Pages/Guest/RegistrationShop.js'
import Login from './Pages/Guest/Login.js'


// PetOwner

import MyProfile from './Pages/Petowner/MyProfile/MyProfile'
import PetProfile from './Pages/Petowner/MyProfile/PetProfile'


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


//Clinic
import ClinicAdsMain from "./Pages/Clinic/ClinicAdsMain"
import ClinicViewMain from "./Pages/Clinic/ClinicViewMain"
import ClinicDocProfile from "./Pages/Clinic/MyProfile"
import ClinicProfile from "./Pages/Clinic/ClinicProfile"
import DoctorMain from "./Pages/Clinic/DoctorMain"
import AppointmentMain from "./Pages/Clinic/AppointmentMain"
import AddProfile from "./Pages/Clinic/AddProfile"
import ViewNoticeMain from "./Pages/Clinic/ViewNoticeMain"
import AddNotice from "./Pages/Clinic/AddNotice"
import AddAppoMain from "./Pages/Clinic/AddAppoMain"
import TodayAppoMain from "./Pages/Clinic/TodayAppoMain"
import PreviousAppoMain from "./Pages/Clinic/PreviousAppoMain"
import UpAppoMain from "./Pages/Clinic/UpAppoMain"
import ViewAppo from "./Pages/Clinic/ViewAppo"
import PaymentMain from "./Pages/Clinic/PaymentMain"

//test - keshani

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
           

          {/*Clinic*/}
          <Route path='/ClinicAdsMain' element={<ClinicAdsMain/>}/>
          <Route path='/ClinicViewMain' element={<ClinicViewMain/>}/>
          <Route path='/ClinicDocProfile' element={<ClinicDocProfile/>}/>
          <Route path='/ClinicProfile' element={<ClinicProfile/>}/>
          <Route path='/DoctorMain' element={<DoctorMain/>}/>
          <Route path='/AppointmentMain' element={<AppointmentMain/>}/>
          <Route path='/AddProfile' element={<AddProfile/>}/>
          <Route path='/ViewNoticeMain' element={<ViewNoticeMain/>}/>
          <Route path='/AddNotice' element={<AddNotice/>}/>
          <Route path='/AddAppoMain' element={<AddAppoMain/>}/>
          <Route path='/TodayAppoMain' element={<TodayAppoMain/>}/>
          <Route path='/PreviousAppoMain' element={<PreviousAppoMain/>}/>
          <Route path='/UpAppoMain' element={<UpAppoMain/>}/>
          <Route path='/ViewAppo' element={<ViewAppo/>}/>
          <Route path='/PaymentMain' element={<PaymentMain/>}/>

          {/* test keshani */}
          

        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;