import React, { createContext, useState, useContext } from "react";

// Créez le contexte
const AuthContext = createContext();

// Créez un composant fournisseur pour encapsuler votre application avec le contexte
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("isLoggedIn2", isLoggedIn);
  // Fonction pour connecter l'utilisateur
  const login = () => {
    console.log("call");
    setIsLoggedIn(true);
  };

  // Fonction pour déconnecter l'utilisateur
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Créez un hook personnalisé pour utiliser le contexte
export const useAuth = () => useContext(AuthContext);
