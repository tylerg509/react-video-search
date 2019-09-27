import axios from 'axios';

const KEY = 'AIzaSyD-drYzGrFXf8_NHjZYZTTWHykzqq146bY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5, 
        key: KEY
    }
});