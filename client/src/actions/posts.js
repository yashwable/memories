import * as api from '../api';

export const getPosts = () => async(dispatch) => {
    try {
        const data = await api.fetchPost();

        dispatch({type:'FETCH_ALL',payload:data});
    } catch (error) {
        console.log(error.message);
    }
}