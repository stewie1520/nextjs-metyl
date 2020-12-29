import axios from 'axios';

const baseEndpoint = process.env.server;

export const fetchProducts = async () => {
    try {
        const { data } = await axios.get(`${baseEndpoint}/product/shop`);
        return data;
    } catch (err) {
        return err.data;
    }
};
