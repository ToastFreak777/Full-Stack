import { useState, useEffect, useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.scss";
import { getAllPosts } from "../utils/post.API";
import { PostSchemaType } from "../@types/Post";

import { IMAGE_BASE_URL } from "../utils/config";
import { PaginationContext } from "../context/paginationContext";
import { ACTIONS, reducer } from "../context/paginationReducer";
import Paginate from "../components/Pagination";

function Home() {
  const pageData = useContext(PaginationContext);
  const [state, dispatch] = useReducer(reducer, pageData);
  console.log(state);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const fetchedPosts = (await getAllPosts()) as PostSchemaType[];
      dispatch({ type: ACTIONS.LOAD_POSTS, payload: fetchedPosts });
      dispatch({ type: ACTIONS.SET_PAGE, payload: 1 });
      dispatch({ type: ACTIONS.SET_LIMIT, payload: 3 });
    };

    fetchAllPosts();
  }, []);

  const indexOfLastPage = state.currentPage * state.itemsPerPage;
  const indexOfFirstPage = indexOfLastPage - state.itemsPerPage;
  const currentPosts = state.posts.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <>
      {currentPosts.map((post: PostSchemaType) => (
        <article className="media content-section" key={post._id}>
          <img
            src={`${IMAGE_BASE_URL}/${post.author.avatar}`}
            alt=""
            className="rounded-circle article-img"
          />
          <div className="media-body">
            <div className="article-metadata">
              <Link to={`/user/${post.author.username}`} className="mr-2">
                {post.author.username}
              </Link>
              <small className="text-muted">
                {new Date(post.createdAt).toLocaleDateString()}
              </small>
            </div>
            <h2>
              <Link className="article-title" to={`/post/${post._id}`}>
                {post.title}
              </Link>
            </h2>
            <p className="article-content">{post.content}</p>
          </div>
        </article>
      ))}
      {state.posts ? (
        <div className="blog-content-section">
          <Paginate
            itemsPerPage={state.itemsPerPage}
            totalItems={state.totalItems}
            dispatch={dispatch}
            currentPage={state.currentPage}
          />
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  );
}

export default Home;
