import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PostSchemaType } from "../@types/Post";
import Paginate from "../components/Pagination";
import { PaginationContext } from "../context/paginationContext";
import { ACTIONS, reducer } from "../context/paginationReducer";
import { IMAGE_BASE_URL } from "../utils/config";
import { getAllUserPosts } from "../utils/post.API";

import "./styles/UserPosts.scss";

const UserPosts = () => {
  const pageData = useContext(PaginationContext);
  const [state, dispatch] = useReducer(reducer, pageData);

  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const { username } = useParams();

  useEffect(() => {
    if (!username) return navigate("/");

    const fetchUsersPosts = async () => {
      const fetchedPosts = await getAllUserPosts(username);
      dispatch({ type: ACTIONS.LOAD_POSTS, payload: fetchedPosts.posts });
      dispatch({ type: ACTIONS.SET_PAGE, payload: 1 });
      dispatch({ type: ACTIONS.SET_LIMIT, payload: 3 });
      setAvatar(fetchedPosts.avatar);
    };

    fetchUsersPosts();
  }, []);

  const indexOfLastPage = state.currentPage * state.itemsPerPage;
  const indexOfFirstPage = indexOfLastPage - state.itemsPerPage;
  const currentPosts = state.posts.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <>
      <h1 className="mb-3">
        Posts By {username} ({state.totalItems})
      </h1>
      {currentPosts.map((post: PostSchemaType) => (
        <article className="media content-section" key={post._id}>
          <img
            src={`${IMAGE_BASE_URL}/${avatar}`}
            alt=""
            className="rounded-circle article-img"
          />
          <div className="media-body">
            <div className="article-metadata">
              <a
                className="mr-2"
                id="author_link"
                tabIndex={-1}
                aria-disabled="true"
              >
                {username}
              </a>
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
};

export default UserPosts;
