import axios from 'axios';
class Http {
   constructor() {

   }
   install(Vue, options) {
      const _instance = axios.create({
         baseURL: [options.url, options.port].join(':'),
         headers: {
            common: {}
         }
      });
      Vue.prototype.$http = (instance => {
         return {
            get: (path) => instance.get(path).then(response => response.data)
         };
      })(_instance);
   }
};
export default Http;