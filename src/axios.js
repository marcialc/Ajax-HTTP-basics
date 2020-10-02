import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorizaition'] = 'AUTH TOKEN FROM INSTANCE';

// You can use interceptors in the axios object
// instance.interceptors.request...

export default instance;