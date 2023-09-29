import http from '../utils/http';

export const getListProducts = () => http.get('listProducts');
export const getProduct = (id) => http.get(`listProducts/${id}`);
