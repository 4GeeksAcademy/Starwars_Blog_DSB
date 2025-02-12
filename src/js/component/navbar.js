import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm" style={{ paddingTop: "5px", paddingBottom: "5px" }}>
            <div className="container">
                <Link to="/">
                    <img 
                        src="https://img.icons8.com/color/512/star-wars.png" 
                        alt="logo" 
                        width="100px" 
                    />
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    style={{ border: "none" }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <button 
                                className="btn btn-primary dropdown-toggle" 
                                type="button" 
                                data-bs-toggle="dropdown"
                                style={{ padding: "5px 10px", fontSize: "14px" }}
                            >
                                Favorites <span className="badge bg-warning text-dark">{store.favorites.length}</span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end p-2" style={{ minWidth: "200px", maxHeight: "200px", overflowY: "auto" }}>
                                {store.favorites.length === 0 ? (
                                    <li className="dropdown-item text-muted">Empty</li>
                                ) : (
                                    store.favorites.map((favorite, index) => (
                                        <li key={index} className="d-flex justify-content-between align-items-center p-2">
                                            <span>{favorite.name}</span>
                                            <button 
                                                className="btn btn-sm btn-outline-danger" 
                                                onClick={() => actions.deleteFavorite(favorite.uid, favorite.type)}
                                                style={{ fontSize: "12px", padding: "2px 5px" }}
                                            >
                                                <i className="fa-solid fa-trash-can"></i>
                                            </button>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
