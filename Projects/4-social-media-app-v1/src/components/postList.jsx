import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  
  // console.log(postList);
  // console.log(typeof postList);



  return (
    <>
      {postList.map((post)=>(<Post key={post.id} post={post}></Post>))}

    </>
  );
};

export default PostList;
