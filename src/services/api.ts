import axios from 'axios';
import { BASE_URL } from '@env';
import { Alert } from 'react-native';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      Alert.alert(
        "TestApp",
        "Não autorizado!",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    } else if (error.response.status === 503) {
      Alert.alert(
        "TestApp",
        "Servidor esta fora no momento. Tente mais tarde!",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }

    return Promise.reject(error);
  },
);

export {
  api,
};
