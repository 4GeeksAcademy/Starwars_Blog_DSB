import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const VehicleDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    
    useEffect(() => {
        actions.getOneVehicle(params.vehicleId); 
    }, [params.vehicleId]);
    
    return (
        <div className="container my-5">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <img 
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${params.vehicleId}.jpg`}
                            className="img-fluid rounded"
                            alt={`Image of ${store.vehicle.name}`} 
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title fw-bold">{store.vehicle.name}</h2>
                            <p className="card-text"><strong>Model:</strong> {store.vehicle.model}</p>  
                            <p className="card-text"><strong>Crew:</strong> {store.vehicle.crew}</p>
                            <p className="card-text"><strong>Pilots:</strong> {store.vehicle.pilots ? store.vehicle.pilots : 'No pilots available'}</p>
                            <p className="card-text"><strong>Passengers:</strong> {store.vehicle.passengers}</p>
                            <p className="card-text"><strong>Manufacturer:</strong> {store.vehicle.manufacturer}</p>
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

