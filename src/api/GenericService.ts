const axios = require('axios').default;
const loginClient = axios.create({
  baseURL: 'https://api.stackexchange.com/2.3/questions?',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default class GenericService {
  constructor() {}

  static get(url: string, callback: (arg0: null, arg1: null) => void) {
    loginClient
      .get(url)
      .then((response: {data: null}) => {
        callback(null, response.data);
      })
      .catch(function (error: null) {
        callback(error, null);
      });
  }
}
