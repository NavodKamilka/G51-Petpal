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
import ShopProfileGuestViewFinal from './Pages/Guest/ShopProfileGuestViewFinal'
import ShopProductAdsFinal from './Pages/Guest/ShopProductAdsFinal'
import ShopPetAdsFinal from './Pages/Guest/ShopPetAdsFinal'


// PetOwner

import MyProfile from './Pages/Petowner/MyProfile/MyProfile'
import PetProfile from './Pages/Petowner/MyProfile/PetProfile'
import Vaccinations from './Pages/Petowner/MyProfile/Vaccinations'

import Discussion from "./Pages/Petowner/Discussion/Discussion";
import DiscussionStart from "./Pages/Petowner/Discussion/DiscussionStart"

import PetProducts from "./Pages/Petowner/PetProducts/PetProducts"

import PetMart from "./Pages/Petowner/PetMart/PetMart"
import PetSell from "./Pages/Petowner/PetMart/PetSell"

import Notice from './Pages/Petowner/Notice/Notice'
import PostNotice from "./Pages/Petowner/Notice/PostNotice"

import PetOwnerAppointment from "./Pages/Petowner/Appointment/PetOwnerAppointment"
import MakeAppointment from "./Pages/Petowner/Appointment/MakeAppointment"


//shopkeeper
import ShopProfileFinal from './Pages/Shop/ShopProfileFinal.js'
import FoodTableFinal from './Pages/Shop/FoodTableFinal.js'
import PetsFinal from './Pages/Shop/PetsFinal'
import ShopAds from './Pages/Shop/ShopAds'
import ShopAdsFinal from './Pages/Shop/ShopAdsFinal'
// import ProductsFinal from './Pages/Shop/ProductsFinal'
import ProductAdsFinal from './Pages/Shop/ProductAdsFinal'
import PetAds from './Pages/Shop/PetAds'
import PetAdsFinal from './Pages/Shop/PetAdsFinal'
import AddPetFinal from './Pages/Shop/AddPetFinal'
import AddProductFinal from './Pages/Shop/AddProductFinal'
// import AddUpdatePet from './Pages/Shop/AddUpdatePet'
// import AddUpdatePetFinal from './Pages/Shop/AddUpdatePetFinal'
// import AddUpdateProductFinal from './Pages/Shop/AddUpdateProductFinal'
// import ShopProfileGuestView from './Pages/Shop/ShopProfileGuestView'
// import Payment from './Pages/Shop/Payment'
import PaymentFinal from './Pages/Shop/PaymentFinal'
import AccessoriesTableFinal from './Pages/Shop/AccessoriesTableFinal'
import SkinCareTableFinal from './Pages/Shop/SkinCareTableFinal'
import ViewProductFinal from './Pages/Shop/ViewProductFinal'
import UpdateProduct from './Pages/Shop/UpdateProduct'


//Clinic
import ClinicAdsMain from "./Pages/Guest/ClinicAdsMain"
import ClinicViewMain from "./Pages/Guest/ClinicViewMain"
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

// Veterinary Doctor

//appointment handling
import TodayAppointments from "./Pages/VetDoctor/MyAppointments/TodayAppointments";
import PrevJobs from "./Pages/VetDoctor/MyAppointments/PrevJobs";
import UpcomingJobs from "./Pages/VetDoctor/MyAppointments/UpcomingJobs"
import UpcomingAppointmentDetails from "./Pages/VetDoctor/MyAppointments/UpcomingAppointmentDetail";
import PrevAppointmentDetails from "./Pages/VetDoctor/MyAppointments/PrevAppointmentDetail";
import TodayAppointmentDetails from "./Pages/VetDoctor/MyAppointments/TodayAppointmentDetail";
//My articles
import DocArticles from "./Pages/VetDoctor/Articles/Articles";
import ArticlesFromAuthor from "./Pages/VetDoctor/Articles/ArticlesFromAuthor";
import PendingArticles from "./Pages/VetDoctor/Articles/PendingArticles";
//Doc profile
import DocProfile from "./Pages/VetDoctor/MyProfile/DocProfile";
import ContactUsContent from "./Pages/Guest/ContactUsContent"
//review
import DocReview from './Pages/VetDoctor/Reviews/ReviewFinal'
import DocDiscussion from './Pages/VetDoctor/Discussion/Discussion'
import DocDiscussionContent from './/Pages/VetDoctor/Discussion/DiscussionContent';
import DocPetMart from './Pages/VetDoctor/PetMart/PetMart'
import DocProductMart from './Pages/VetDoctor/ProdcuctMart/PetProducts'
import DocNotice from './Pages/VetDoctor/Notice/Notice'


import Articles from "./Pages/Manager/Annoucement/Articles";
import LostAndFound from './Pages/Manager/Annoucement/LostAndFound'

//requests
import  NoticesRequests from './Pages/Manager/Requests/Notices';
import  AccountRequests from './Pages/Manager/Requests/AccountRequests';
import  AccountManagement from './Pages/Manager/Requests/AccountManagement';
import  NoticeRequests from './Pages/Manager/Requests/NoticeRequests';

// dashboard
import AdminDashboard from './Pages/Manager/AdminDashboard/AdminDashboard';
import AdminDashboardTransactions from './Pages/Manager/AdminDashboard/AdminDashboardTransactions';
import AdminDashboardPublications from './Pages/Manager/AdminDashboard/AdminDashboardPublications';


function App() {
  return (
    <div > 
      <BrowserRouter>
        <Routes>
          {/* Guest */}
          <Route path="/" element={<Home />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Healthcare" element={<Healthcare />} />
          
          <Route path="/Ourservices" element={<Ourservices />} />
          {/* <Route path="/OurservicesBody" element={<OurservicesBody/>} /> */}
          <Route path="/Shops" element={<Shops />} />
          <Route path="/Whoweare" element={<Whoweare />} />
          <Route path='/RegistrationPetOwner' element={<RegistrationPetOwner/>} /> 
          <Route path='/RegistrationVetDoc' element={<RegistrationVetDoc/>} /> 
          <Route path='/RegistrationClinic' element={<RegistrationClinic/>} /> 
          <Route path='/RegistrationShop' element={<RegistrationShop/>} /> 
          <Route path='/Login' element={<Login/>} />
          <Route path='/ShopProductAdsFinal' element={<ShopProductAdsFinal/>} />
          <Route path='/ShopPetAdsFinal' element={<ShopPetAdsFinal/>} />


          {/* PetOwner */}
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/PetProfile/Alex" element={<PetProfile />} />
          <Route path="/PetProfile/Alex/Vaccinations" element={<Vaccinations />} />

              <Route path="/Discussion" element={<Discussion />} />
          <Route path="/Discussion/Start" element={<DiscussionStart />} />

          <Route path="/PetProducts" element={<PetProducts />} />

          <Route path="/PetMart" element={<PetMart />} />
          <Route path="/PetMart/PetSell" element={<PetSell />} />
          
          <Route path="/Notice" element={<Notice />} />
          <Route path="/Notice/PostNotice" element={<PostNotice />} />

          <Route path="/PetOwnerAppointment" element={<PetOwnerAppointment />} />
          <Route path="/MakeAppointment" element={<MakeAppointment />} />



          {/* shopkeeper */}
          <Route path='/ShopProfileFinal' element={<ShopProfileFinal/>} /> 
          <Route path='/FoodTableFinal' element={<FoodTableFinal/>} />
          {/* <Route path='/ProductsFinal' element={<ProductsFinal/>} /> */}
          <Route path='/PetsFinal' element={<PetsFinal/>} />
          <Route path='/ShopAdsFinal' element={<ShopAdsFinal/>} />
          <Route path='/ProductAdsFinal' element={<ProductAdsFinal/>} />
          <Route path='/PetAdsFinal' element={<PetAdsFinal/>} />
          <Route path='/AddPetFinal' element={<AddPetFinal/>} />
          <Route path='/AddProductFinal' element={<AddProductFinal/>} />
          <Route path='/ShopProfileGuestViewFinal' element={<ShopProfileGuestViewFinal/>} />
          <Route path='/PaymentFinal' element={<PaymentFinal/>} />
          <Route path='/UpdateProduct' element={<UpdateProduct/>} />


          {/*common*/}
          <Route path='/Articles' element={<Articles/>} />
          <Route path='/LostAndFound' element={<LostAndFound/>} />

          {/*requests*/}
          <Route path='/NoticesRequests' element={<NoticesRequests/>}/>
          <Route path='/AccountRequests' element={<AccountRequests/>}/>
          <Route path='/AccountManagement' element={<AccountManagement/>}/>
            <Route path='/NoticeRequests' element={<NoticeRequests/>}/>

          {/*dashboard*/}
          <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
          <Route path='/AdminDashboardTransactions' element={<AdminDashboardTransactions/>}/>
          <Route path='/AdminDashboardPublications' element={<AdminDashboardPublications/>}/>


          <Route path='/AccessoriesTableFinal' element={<AccessoriesTableFinal/>} />
          <Route path='/SkinCareTableFinal' element={<SkinCareTableFinal/>} />
          <Route path='/ViewProductFinal' element={<ViewProductFinal/>} />



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

         
          

        {/* Veterinary Doctor */}
      <Route path="/TodayAppointments" element={<TodayAppointments/>} />
      <Route path="/TodayAppointmentDetails" element={<TodayAppointmentDetails/>} />
      <Route path="/PrevJobs" element={<PrevJobs/>} />
      <Route path="/PrevAppointmentDetails" element={<PrevAppointmentDetails/>} />
      <Route path="/UpcomingJobs" element={<UpcomingJobs/>} />
      <Route path="/UpcomingAppointmentDetails" element={<UpcomingAppointmentDetails/>} />
      <Route path="/DocArticles" element={<DocArticles/>} />    
      <Route path="/ArticlesFrom" element={<ArticlesFromAuthor/>} />
      <Route path="/PendingArticles" element={<PendingArticles/>} />
      <Route path="/DocProfile" element={<DocProfile/>} />
      <Route path="/ContactUsContent" element={<ContactUsContent/>} />
      <Route path="/DocReviews" element={<DocReview/>} />
      <Route path="/DocDiscussion" element={<DocDiscussion/>} />
            <Route path="/DocDiscussionContent" element={<DocDiscussionContent/>} />
      <Route path="/DocPetMart" element={<DocPetMart/>} />
      <Route path="/DocProductMart" element={<DocProductMart/>} />
      <Route path="/DocNotice" element={<DocNotice/>} />


   </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
