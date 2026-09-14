import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
  });


  const toggleFavorite = (product) => {

    setFavorites((currentFavorites) => {

      const exists = currentFavorites.some(
        (item) => item.id === product.id
      );


      const updatedFavorites = exists
        ? currentFavorites.filter(
            (item) => item.id !== product.id
          )
        : [...currentFavorites, product];


      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );


      return updatedFavorites;

    });

  };


  const isFavorite = (productId) => {
    return favorites.some(
      (item) => item.id === productId
    );
  };


  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );

}



export function useFavorite() {
  return useContext(FavoriteContext);
}