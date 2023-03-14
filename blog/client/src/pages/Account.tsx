import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContextType, User } from "../@types/auth";
import { AuthContext } from "../context/authContext";
import { getUserInfo, updateUserInfo } from "../utils/userAPI";

import { IMAGE_BASE_URL } from "../utils/config";

const Account = () => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const [imgURL, setImgURL] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    avatar: new File([], ""),
  });

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return navigate("/login");

    const fetchUserInfo = async () => {
      const response = (await getUserInfo(user.token)) as Pick<
        User,
        "_id" | "email" | "username" | "avatar"
      >;
      // console.log(response);

      if (!response) return;

      const { username, email, avatar } = response;

      setFormData((prev) => ({ ...prev, username, email }));
      setUsername(username);
      setEmail(email);
      setImgURL(`${IMAGE_BASE_URL}/${avatar}`);
    };

    fetchUserInfo();
  }, []);

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { username, email, avatar } = formData;

    if (!username && !email && JSON.stringify(avatar) === "{}")
      return toast.error("No data provided to update");

    const response = await updateUserInfo(formData, user!.token);
    // console.log(response);

    setUsername(response.username);
    setEmail(response.email);
    setImgURL(`${IMAGE_BASE_URL}/${response.avatar}`);
  };

  return (
    <div className="content-section">
      <div className="media">
        <img
          src={imgURL}
          alt="profile picture"
          className="rounded-circle account-img"
        />
        <div className="media-body">
          <h2 className="account-heading">{username}</h2>
          <p className="text-secondary">{email}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <fieldset className="form-group">
          <legend className="border-bottom mb-4">Account Info</legend>
          <div className="form-group">
            <label htmlFor="username" className="form-control-label">
              Username
            </label>
            <input
              className="form-control form-control-lg"
              id="username"
              name="username"
              type="text"
              onChange={handleChange}
              value={formData.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-control-label">
              Email
            </label>
            <input
              className="form-control form-control-lg"
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="avatar" className="form-control-label">
              Avatar
            </label>
            <input
              className="form-control-file"
              id="avatar"
              name="avatar"
              type="file"
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  avatar: e.target.files[0],
                }));
              }}
            />
          </div>
        </fieldset>
        <div className="form-group">
          <button className="btn btn-outline-info">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Account;
