import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext({
    currentUser: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

// Definición del Componente Proveedor (ContextProvider):
// Responsable de envolver a los componentes hijos con el contexto proporcionado (StateContext). Este componente acepta children como prop, que se refiere a los componentes que estarán dentro de él.

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    
    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    return (
        <StateContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

// Custom Hook useStateContext:
// Has creado un custom hook llamado useStateContext, que utiliza la función useContext para acceder al contexto StateContext. Este hook se utilizará en cualquier componente donde se necesite acceder a los valores compartidos dentro del contexto.

export const useStateContext = () => useContext(StateContext);
