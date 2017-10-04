const random_API_KEY = 'YOUR-RANDOM-API-KEY';   // redux-blog handles posts on random key basis so that you can have
                                                // personal post that only you can access with your desired random key.
                                                // It can be any string with random sequence of characters.

export const projectConfig = {
    FETCH_POSTS : 'FETCH_POSTS',
    CREATE_POST : 'CREATE_POSTS',
    ROOT_URL : 'http://reduxblog.herokuapp.com/api',
    API_KEY : `?key=${random_API_KEY}`,
};
