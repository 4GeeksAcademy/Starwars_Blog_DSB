import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const PlanetDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getOnePlanet(params.planetId); 
    }, [params.planetId]);

    return (
        <div className="container my-5">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <img 
                            src={`https://starwars-visualguide.com/assets/img/planets/${params.planetId}.jpg`}
                            className="img-fluid rounded"
                            alt={`Image of ${store.planet.name}`} 
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title fw-bold">{store.planet.name}</h2>
                            <p className="card-text"><strong>Climate:</strong> {store.planet.climate}</p>
                            <p className="card-text"><strong>Terrain:</strong> {store.planet.terrain}</p>
                            <p className="card-text"><strong>Diameter:</strong> {store.planet.diameter}</p>
                            <p className="card-text"><strong>Population:</strong> {store.planet.population}</p>
                            <p className="card-text"><strong>Rotation Period:</strong> {store.planet.rotation_period}</p>
                            <p className="card-text"><strong>Orbital Period:</strong> {store.planet.orbital_period}</p>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <Link to="/" className="btn btn-secondary">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};
