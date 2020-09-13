import axios from 'axios';

const url = process.env.REACT_APP_TYPICODE_API_URL;

async function getUsers() {
  try {
    const result = await axios.get(`${url}/users`);
    return result.data;
  } catch (e) {
    throw e;
  }
}

export const userServices = {
  getUsers,
};
