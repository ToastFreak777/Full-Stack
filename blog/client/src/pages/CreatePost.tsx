import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContextType } from "../@types/auth";
import { AuthContext } from "../context/authContext";
import { fetchPost, newPost, updatePost } from "../utils/post.API";

const CreatePost = () => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const { id: postId } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { title, content } = formData;

    if (!title || !content)
      return toast.error("Please provide a title and content");

    let response;

    if (postId) {
      response = await updatePost(formData, user!.token, postId);
    } else {
      response = await newPost(formData, user!.token);
    }

    if (!response.success) toast.error(response.msg);

    navigate("/");
  };

  useEffect(() => {
    if (!user) return navigate("/");

    if (postId) {
      const fetchPostInfo = async () => {
        const response = await fetchPost(postId);

        setFormData((prev) => ({
          title: response.title,
          content: response.content,
        }));
      };

      fetchPostInfo();
    }
  }, []);

  return (
    <div className="content-section">
      <form onSubmit={handleSubmit}>
        <fieldset className="form-group">
          <legend className="border-bottom mb-4">Create Post</legend>
          <div className="form-group">
            <label htmlFor="title" className="form-control-label">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className="form-control form-control-lg"
              onChange={handleChange}
              value={formData.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content" className="form-control-label">
              Content
            </label>
            <input
              id="content"
              name="content"
              type="text"
              className="form-control form-control-lg"
              onChange={handleChange}
              value={formData.content}
            />
          </div>
        </fieldset>
        <div className="form-group">
          <button className="btn btn-outline-info">
            {postId ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
