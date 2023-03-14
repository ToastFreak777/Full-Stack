import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContextType, authenticatedUser, User } from "../@types/auth";
import { AuthContext } from "../context/authContext";
import { loginUser } from "../utils/authAPI";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const { user, setUser } = useContext(AuthContext) as AuthContextType;

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { email, password }: Pick<User, "email" | "password"> = formData;

    if (!email || !password) return toast.error("Please fill in all fields");

    const response = await loginUser({ email, password });

    if (!response.success) return toast.error(response.msg);

    setUser({ token: response.token, username: response.username });
    if (formData.remember)
      localStorage.setItem(
        "user",
        JSON.stringify({ token: response.token, username: response.username })
      );
    else
      sessionStorage.setItem(
        "user",
        JSON.stringify({ token: response.token, username: response.username })
      );

    navigate("/");
  };

  useEffect(() => {
    if (user) navigate("/");
  }, []);

  return (
    <>
      <div className="content-section">
        <form method="POST" onSubmit={handleSubmit}>
          <fieldset className="form-group">
            <legend className="border-bottom mb-4">Login</legend>
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
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
                id="remember"
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    remember: !formData.remember,
                  }));
                }}
              />
              <label className="form-check-label">Remember Me</label>
            </div>
          </fieldset>
          <div className="form-group">
            <button className="btn btn-outline-info">Login</button>
          </div>
          <small className="text-muted ml-2">
            <Link to="/reset_password">Forgot Password?</Link>
          </small>
        </form>
      </div>
      <div className="border-top pt-3">
        <small className="text-muted">
          Need An Account?
          <Link className="ml-2" to="/register">
            Sign Up Now!
          </Link>
        </small>
      </div>
    </>
  );
};

export default Login;
