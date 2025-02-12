import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CharacterCard = (props) => {
    const { store, actions } = useContext(Context);
    const [info, setInfo] = useState({});

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${props.character.uid}`)
            .then(response => response.json())
            .then(response => setInfo(response.result.properties))
            .catch(err => console.error(err));
    }, []);

    const onClickFav = () => {
        actions.handleFavorite(props.character, 'character');
    };

    const isFavorite = store.favorites.some(fav => fav.uid === props.character.uid && fav.type === 'character');

    return (
        <div className="card shadow-lg p-3 mb-4 bg-white rounded" style={{ width: "18rem", height: "450px" }}>
            <img 
                src={`https://starwars-visualguide.com/assets/img/characters/${props.character.uid}.jpg`} 
                className="card-img-top" 
                alt={`${props.character.name}`} 
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body text-center" style={{ overflow: "hidden", height: "250px" }}>
                <h5 className="card-title fw-bold">{props.character.name}</h5>
                <p className="card-text"><strong>Gender:</strong> {info.gender}</p>
                <p className="card-text"><strong>Hair color:</strong> {info.hair_color}</p>
                <p className="card-text"><strong>Eye color:</strong> {info.eye_color}</p>

                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/people/${props.character.uid}`} className="btn btn-primary">
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

