import axios from 'axios';

const url = process.env.REACT_APP_TYPICODE_API_URL;

async function getCommentByPost(postId) {
  try {
    const result = await axios.get(`${url}/comments?postId=${postId}`);
    return result.data;
  } catch (e) {
    throw e;
  }
}

export const commentServices = {
  getCommentByPost,
};
