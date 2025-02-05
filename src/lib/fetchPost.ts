import axios from "axios";
export const fetchPosts = async (pageId: number) => {
  try {
    // const url1 = `https://jsonplaceholder.typicode.com/posts/?_limit=4&_page=1`
    const url1 = `https://jsonplaceholder.typicode.com/posts/?_limit=10&_page=${pageId}`;
    // const url2 = `https://jsonplaceholder.typicode.com/posts`;
    const res = await axios.get(url1);
    return res;
  } catch (error) {
    console.log(error);
  }
};
