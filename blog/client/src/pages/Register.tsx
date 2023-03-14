import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContextType } from "../@types/auth";
import { AuthContext } from "../context/authContext";
import { createUser } from "../utils/authAPI";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const { user } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { username, email, password, confirm_password } = formData;

    if (!username || !email || !password || !confirm_password)
      return toast.error("Please fill in all fields");

    if (password !== confirm_password)
      return toast.error("Passwords do not match");

    const response = await createUser(formData);

    if (!response.success) return toast.error(response.msg);

    navigate("/login");
  };

  useEffect(() => {
    if (user) navigate("/");
  }, []);

  return (
    <>
      <div className="content-section">
        <form method="POST" onSubmit={handleSubmit}>
          <fieldset className="form-group">
            <legend className="border-bottom mb-4">Join The Community</legend>
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-control-label">
                Password
              </label>
              <input
                className="form-control form-control-lg"
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-control-label">
                Confirm Password
              </label>
              <input
                className="form-control form-control-lg"
                id="confirm_password"
                name="confirm_password"
                type="password"
                onChange={handleChange}
              />
            </div>
          </fieldset>
          <div className="form-group">
            <button className="btn btn-outline-info">Sign Up</button>
          </div>
        </form>
      </div>
      <div className="border-top pt-3">
        <small className="text-muted">
          Already Have An Account?
          <Link className="ml-2" to="/login">
            Sign In
          </Link>
        </small>
      </div>
    </>
  );
};

export default Register;
