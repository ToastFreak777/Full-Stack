import { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AuthContextType } from "../@types/auth";
import { AuthContext } from "../context/authContext";
import { IMAGE_BASE_URL } from "../utils/config";
import { deletePost, fetchPost } from "../utils/post.API";

const Post = () => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const { id: postId } = useParams();
  const [post, setPost] = useState({
    title: "",
    content: "",
    createdAt: "",
    author: {
      token: "",
      username: "",
      avatar: "",
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!postId) return navigate("/");

    const fetchPostInfo = async () => {
      const response = await fetchPost(postId);
      // console.log(response);

      setPost(response);
    };

    fetchPostInfo();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!user) return navigate("/");

    await deletePost(user.token, postId!);

    // Removing the bootstrap modal manually
    const body = document.querySelector("body") as HTMLBodyElement;
    const modal = document.querySelector("#deleteModal") as HTMLDivElement;
    const backdrop = document.querySelector(
      ".modal-backdrop"
    ) as HTMLDivElement;

    body.className = "";
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    modal.className = "modal fade";
    backdrop.remove();

    navigate("/");
  };

  return (
    <>
      <article className="media content-section">
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
            {post.author.username === user?.username && (
              <div>
                <Link
                  className="btn btn-secondary btn-sm mt-1 mb-1"
                  to={`/createPost/${postId}`}
                >
                  Update
                </Link>
                {/* <!-- Using a bootstrap modal --> */}
                <button
                  type="button"
                  className="btn btn-danger btn-sm m-1 "
                  data-toggle="modal"
                  data-target="#deleteModal"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
          <h2 className="article-title">{post.title}</h2>
          <p className="article-content">{post.content}</p>
        </div>
      </article>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">
                Delete Post?
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <form onSubmit={handleSubmit} method="POST">
                <input
                  type="submit"
                  className="btn btn-danger"
                  value="Delete"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
