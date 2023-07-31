import axios from "axios";

// const API_KEY = `34207283-4bddbd3e33d2a5a82fc6e194a`;
axios.defaults.baseURL = `https://64c79caea1fe0128fbd5067d.mockapi.io/mockapi/v1/`;

export const getVehicles = async () => {
    const response = await axios.get(`/vehicles`);
    const vehicles = response.data;
    return vehicles;
};