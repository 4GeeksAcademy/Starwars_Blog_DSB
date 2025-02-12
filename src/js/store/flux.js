const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			vehicle: [],
			vehicles: [],
			planet: [],
			planets: [],
			character: [],
			characters: []
		},
		actions: {
			displayCharacters: () => {
				fetch('https://www.swapi.tech/api/people/')
					.then(response => response.json())
					.then(response => {
						setStore({ characters: response.results });
					})
					.catch(err => console.error(err));
			},
			displayPlanets: () => {
				fetch('https://www.swapi.tech/api/planets/')
					.then(response => response.json())
					.then(response => {
						setStore({ planets: response.results });
					})
					.catch(err => console.error(err));
			},
			displayVehicles: () => {
				fetch('https://www.swapi.tech/api/vehicles/')
					.then(response => response.json())
					.then(response => {
						setStore({ vehicles: response.results });
					})
					.catch(err => console.error(err));
			},
			getOneCharacter: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(response => response.json())
					.then(response => {
						setStore({ character: response.result.properties });
					})
					.catch(err => console.error(err));
			},
			getOnePlanet: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(response => response.json())
					.then(response => {
						setStore({ planet: response.result.properties });
					})
					.catch(err => console.error(err));
			},
			getOneVehicle: (id) => {
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					.then(response => response.json())
					.then(response => {
						setStore({ vehicle: response.result.properties });
					})
					.catch(err => console.error(err));
			},

			handleFavorite: (item, type) => {
				const store = getStore();
				const isFavorite = store.favorites.some(fav => fav.uid === item.uid && fav.type === type);
				
				if (isFavorite) {
					const updatedFavorites = store.favorites.filter(fav => fav.uid !== item.uid || fav.type !== type);
					setStore({ favorites: updatedFavorites });
				} else {
					const updatedItem = {
						uid: item.uid,
						type: type,
						name: item.name
					};

					setStore({ favorites: [...store.favorites, updatedItem] });
				}
			},

			deleteFavorite: (uid, type) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter(fav => fav.uid !== uid || fav.type !== type);
				setStore({ favorites: updatedFavorites });
			}
		},
	};
};

export default getState;
