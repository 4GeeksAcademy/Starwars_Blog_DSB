import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CharacterDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getOneCharacter(params.peopleId);
    }, [params.peopleId]);

    const birthDate = store.character.birth || "Unknown";  // Si no hay valor, mostrar "Unknown"

    return (
        <div className="container my-5">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <img 
                            src={`https://starwars-visualguide.com/assets/img/characters/${params.peopleId}.jpg`} 
                            className="img-fluid rounded" 
                            alt={`Image of ${store.character.name}`} 
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title fw-bold">{store.character.name}</h2>
                            <p className="card-text"><strong>Gender:</strong> {store.character.gender}</p>
                            <p className="card-text"><strong>Date of Birth:</strong> {birthDate}</p>
                            <p className="card-text"><strong>Height:</strong> {store.character.height}</p>
                            <p className="card-text"><strong>Skin Color:</strong> {store.character.skin_color}</p>
                            <p className="card-text"><strong>Eye Color:</strong> {store.character.eye_color}</p>
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
