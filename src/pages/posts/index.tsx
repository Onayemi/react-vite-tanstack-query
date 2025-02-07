// import { useFetchPosts } from "@/hooks/useFetchPosts";
import Seo from "@/components/content/Seo";
import { Button } from "@/components/ui/button";
import { fetchPosts } from "@/lib/fetchPost";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface IPosts {
  id: number;
  title: string;
  body: string;
}
const Posts = () => {
  const [page, setPage] = useState(1);

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    placeholderData: keepPreviousData,
  });
  const total = (data?.data.length * page) / page;
  //   console.log("The post value", data?.data);

  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>{error.message} </div>;

  return (
    <div className="my-20">
      <Seo title="Posting Page" description="Remlex Technologies Post page" />

      {data?.data.map((item: IPosts) => {
        const { id, title, body } = item;
        return (
          <div key={item.id} className="bg-gray-100 p-10 mb-5 mx-[5%]">
            <Link to={`/post/${id}`}>
              <h2 className="text-3xl">{title}</h2>
              <p className="text-1.5xl">{body}</p>
            </Link>
          </div>
        );
      })}
      <div className="mx-[5%] flex p-5">
        <Button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 0 ? true : false}
        >
          Prev Page
        </Button>
        <div className="p-2">Page(s) {page}</div>
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === total ? true : false}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default Posts;
