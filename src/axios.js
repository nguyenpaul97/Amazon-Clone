import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-186ed.cloudfunctions.net/api',
  // baseURL: 'http://localhost:5001/clone-186ed/us-central1/api',
});

export default instance;
