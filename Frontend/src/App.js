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
import Vaccinations from './Pages/Petowner/MyProfile/Vaccinations'

import Discussion from "./Pages/Petowner/Discussion/Discussion";
import DiscussionStart from "./Pages/Petowner/Discussion/DiscussionStart"

import PetProducts from "./Pages/Petowner/PetProducts/PetProducts"

import PetMart from "./Pages/Petowner/PetMart/PetMart"
import PetSell from "./Pages/Petowner/PetMart/PetSell"

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
	    <Route path="/PetProfile/Alex/Vaccinations" element={<Vaccinations />} />

          <Route path="/Discussion" element={<Discussion />} />
          <Route path="/Discussion/Start" element={<DiscussionStart />} />

          <Route path="/PetProducts" element={<PetProducts />} />

          <Route path="/PetMart" element={<PetMart />} />
          <Route path="/PetMart/PetSell" element={<PetSell />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
