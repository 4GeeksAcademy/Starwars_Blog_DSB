import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import injectContext from "./store/appContext";
import { Home } from "./views/home";
import { CharacterDetails } from "./views/CharacterDetails";
import { PlanetDetails } from "./views/PlanetDetails";
import { VehicleDetails } from "./views/VehicleDetails";


const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/people/:peopleId/" element={<CharacterDetails />} />
						<Route path="/vehicles/:vehicleId/" element={<VehicleDetails />} />
						<Route path="/planets/:planetId/" element={<PlanetDetails />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);