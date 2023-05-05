import { useHistory } from 'react-router-dom';
import Axios from 'axios';

export default onClick = () => {
  const history = useHistory;
  const { email, password } = inputValue;
  Axios.post('http://localhost:3001/login', {
    email,
    password,
  })
    .then((response) => {
      console.log(response.data.token);
      history.push('/user');
    })
    .catch(() => {
      setLoginError(true);
    });
};
