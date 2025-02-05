import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/ui/button";
// import { IPosts } from ".";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchPost = async () => {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  };

  const { data, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: fetchPost,
    // queryFn: async () =>
    //   await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
  });
  //   console.log("The post value", data);
  //   const { title, body } = data?.data;

  if (error) return <div>Error found </div>;
  //   console.log(id);
  return (
    <div className="my-20 p-10 mb-5 bg-gray-100 mx-[5%}">
      <h1 className="text-3xl mb-5">Post {data?.data.title}</h1>
      <p className="text-1.5xl mb-5">{data?.data.body}</p>
      <Button onClick={() => navigate("/posts")}>Back to Posts</Button>
    </div>
  );
};

export default Post;
