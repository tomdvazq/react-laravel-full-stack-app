import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

axiosClient.interceptors.response.use(
    (response) => {
        // Si la respuesta es exitosa, simplemente devuélvela sin cambios
        return response;
    },
    (error) => {
        try {
            // Intenta acceder a la respuesta de error en caso de que sea una respuesta de error del servidor
            const { response } = error;
            
            if (response.status === 401) {
                // Si el estado es 401 (Unauthorized), elimina el token de acceso del almacenamiento local
                localStorage.removeItem('ACCESS_TOKEN');
            }
        } catch (e) {
            // Si hay un problema al acceder a la respuesta de error, muestra un mensaje de error
            console.error("Error en el interceptor:", e);
        }
        
        // Rechaza la promesa para que el manejador de errores posterior pueda manejarla
        return Promise.reject(error);
    }
);

export default axiosClient;