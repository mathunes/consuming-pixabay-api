// import api from '../../services/api';
import axios from 'axios';

const searchPhotos = (text) => {
    return axios.get('https://pixabay.com/api', {
        params: {
            key: '12264135-54d086077e5085f21d30d2762',
            q: text
        }
    })
}

export default searchPhotos;