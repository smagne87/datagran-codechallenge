import axios from 'axios';

const url = process.env.REACT_APP_TYPICODE_API_URL;

async function getPostsByUser(userId) {
  try {
    const result = await axios.get(`${url}/posts?userId=${userId}`);
    return result.data;
  } catch (e) {
    throw e;
  }
}

export const postServices = {
  getPostsByUser,
};
