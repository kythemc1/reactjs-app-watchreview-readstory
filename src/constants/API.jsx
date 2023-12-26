export const API_ROOT='http://localhost:8081/api';
export const API={
    // auth
    API_LOGIN: `http://localhost:8081/api/auth/login`,


    //user
    API_SIGN_UP:`${API_ROOT}/users/create`,

    //
    API_GET_CATE_ANIME: `${API_ROOT}/story/sort-by-category/anime/1`,
    API_GET_CATE_DRAMA: `${API_ROOT}/story/sort-by-category/drama/1`,
    API_GET_CATE_FAMILY: `${API_ROOT}/story/sort-by-category/family/1`,
}
