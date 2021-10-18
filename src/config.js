const random_API_KEY = 'YOUR-RANDOM-API-KEY'    // redux-blog handles posts on random key basis so that you can have
                                                // personal post that only you can access with your desired random key.
                                                // It can be any string with random sequence of characters.

export const projectConfig = {
    FETCH_POSTS : 'FETCH_POSTS',
    FETCH_POST : 'FETCH_POST',
    CREATE_POST : 'CREATE_POSTS',
    DELETE_POST : 'DELETE_POST',
    UPDATED_POSTS_VIEWED: 'UPDATED_POSTS_VIEWED',
    ROOT_URL : 'http://reduxblog.herokuapp.com/api',
    API_KEY : `?key=${random_API_KEY}`,
}
