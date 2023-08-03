import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
});

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    const setToken = (token) => {
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN', token);
        } else{
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext);

// Importación de módulos:
// En primer lugar, has importado las funciones necesarias de React para trabajar con contextos. Estas son createContext, useContext y useState. Estas funciones permiten crear un contexto, utilizarlo en componentes y gestionar estados locales en componentes funcionales.

// Creación del Contexto:
// Has creado un contexto llamado StateContext mediante la función createContext. Este contexto contendrá valores compartidos que estarán disponibles para todos los componentes que se encuentren dentro de su ámbito. Has proporcionado un objeto como argumento con valores iniciales para currentUser, token, setUser y setToken.

// Definición del Componente Proveedor (ContextProvider):
// Has creado un componente funcional llamado ContextProvider, que será responsable de envolver a los componentes hijos con el contexto proporcionado (StateContext). Este componente acepta children como prop, que se refiere a los componentes que estarán dentro de él.

// Estado Local con useState:
// Has utilizado la función useState de React para definir dos estados locales: user y token. Estos estados se inicializan con objetos vacíos y el valor recuperado desde el localStorage respectivamente.

// Definición de la función setToken:
// Has definido una función llamada setToken, que se utiliza para actualizar el estado token. Esta función recibe un parámetro token, actualiza el estado token mediante la función _setToken, y luego actualiza el localStorage con el nuevo valor del token. Si el token es nulo (o falso), se elimina el valor del localStorage.

// Retorno del Proveedor del Contexto:
// Has envuelto los componentes hijos con el contexto StateContext.Provider y le has proporcionado los valores que estarán disponibles para los componentes hijos. En este caso, los valores proporcionados son user, token, setUser y setToken, que están vinculados a los estados locales y funciones definidas anteriormente.

// Custom Hook useStateContext:
// Has creado un custom hook llamado useStateContext, que utiliza la función useContext para acceder al contexto StateContext. Este hook se utilizará en cualquier componente donde se necesite acceder a los valores compartidos dentro del contexto.

// En resumen, has creado un contexto llamado StateContext que contiene información sobre el usuario actual (currentUser) y el token de autenticación (token). Luego, has proporcionado este contexto a través del componente ContextProvider, que encapsula a los componentes hijos. Así, cualquier componente hijo dentro de ContextProvider puede acceder a los valores compartidos a través del custom hook useStateContext. Esto es útil para mantener un estado global y compartir datos y funciones entre múltiples componentes en una aplicación React.