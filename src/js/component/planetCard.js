import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetCard = (props) => {
    const { store, actions } = useContext(Context);
    const [info, setInfo] = useState({});

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${props.planet.uid}`)
            .then(response => response.json())
            .then(response => setInfo(response.result.properties))
            .catch(err => console.error(err));
    }, []);

    const onClickFav = () => {
        actions.handleFavorite(props.planet, 'planet');
    };

    const isFavorite = store.favorites.some(fav => fav.uid === props.planet.uid && fav.type === 'planet');

    return (
        <div className="card shadow-lg p-3 mb-4 bg-white rounded" style={{ width: "18rem", height: "450px" }}>
            <img 
                src={`https://starwars-visualguide.com/assets/img/planets/${props.planet.uid}.jpg`} 
                className="card-img-top" 
                alt={`Image of ${props.planet.name}`} 
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body text-center" style={{ overflow: "hidden", height: "250px" }}>
                <h5 className="card-title fw-bold">{props.planet.name}</h5>
                <p className="card-text"><strong>Climate:</strong> {info.climate}</p>
                <p className="card-text"><strong>Terrain:</strong> {info.terrain}</p>
                <p className="card-text"><strong>Diameter:</strong> {info.diameter}</p>

                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/planets/${props.planet.uid}`} className="btn btn-primary">
                        Learn more!
                    </Link>
                    <button className="btn btn-outline-warning" onClick={onClickFav}>
                        <i className={`fa-solid fa-heart ${isFavorite ? "text-warning" : "text-secondary"}`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
