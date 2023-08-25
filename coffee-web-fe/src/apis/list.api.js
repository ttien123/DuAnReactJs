import http from '../utils/http';

export const getListProducts = () => http.get('listProducts');
