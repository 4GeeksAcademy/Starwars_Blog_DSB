import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { VehicleCard } from "../component/vehicleCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<h1><b>Characters</b></h1>
			<div className="d-flex overflow-auto">
				{store.characters.map((character) => {
					return (
						<div key={character.uid} className="me-3">
							<CharacterCard character={character} />
						</div>
					);
				})}
			</div>
			<br />
			<h1><b>Planets</b></h1>
			<div className="d-flex overflow-auto">
				{store.planets.map((planet) => {
					return (
						<div key={planet.uid} className="me-3">
							<PlanetCard planet={planet} />
						</div>
					);
				})}
			</div>
			<br />
			<h1><b>Vehicles</b></h1>
			<div className="d-flex overflow-auto">
				{store.vehicles.map((vehicle) => {
					return (
						<div key={vehicle.uid} className="me-3">
							<VehicleCard vehicle={vehicle} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
