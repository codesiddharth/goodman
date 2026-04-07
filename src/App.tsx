/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AirAmbulance from './pages/AirAmbulance';
import GroundAmbulance from './pages/GroundAmbulance';
import StandbyMedical from './pages/StandbyMedical';
import EmsTraining from './pages/EmsTraining';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="air-ambulance" element={<AirAmbulance />} />
          <Route path="ground-ambulance" element={<GroundAmbulance />} />
          <Route path="standby-medical" element={<StandbyMedical />} />
          <Route path="ems-training" element={<EmsTraining />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
