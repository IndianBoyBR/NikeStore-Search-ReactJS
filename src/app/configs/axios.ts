import Axios from 'axios';
import { environment } from 'environment';

const axios = Axios.create({
  baseURL: `${environment.resourceOrigin}`,
});

export default axios;
