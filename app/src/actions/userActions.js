import {
  USERS_REQUEST,
  USERS_RESPONSE,
  USERS_ERROR
} from '../constants';
import axios from 'axios';

const baseUrl = "http://www.json-generator.com";
// https://github.com/axios/axios
//bVniyHjjdu?indent=2
const userActionCreator = {
  getUsers: () => {
    return function (dispatch, getState) {
      /*
        axios.типЗапроса
            .get
            .post
      */
      dispatch({
        type: USERS_REQUEST
      });
      axios.post(`${baseUrl}/api/json/get/cfJgSoaajS?indent=2`)
      .then(function(response) {
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
          dispatch({
            type: USERS_RESPONSE,
            data: response.data
          });
      });
    };
  }
};

export default userActionCreator;
