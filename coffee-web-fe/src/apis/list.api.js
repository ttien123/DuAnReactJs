import http from '../utils/http';

export const getListProducts = () => http.get('listProducts');
export const getProduct = (id) => http.get(`listProducts/${id}`);
export const getComments = () => http.get('comments');
export const postComment = (body) => http.post('comments', body);
