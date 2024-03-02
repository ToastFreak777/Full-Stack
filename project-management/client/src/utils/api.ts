import axios from "axios";

export const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
  },
});

export const createProject = async (payload) => {
  try {
    const response = await makeRequest.post("/projects", { data: payload });
    console.log(response);
  } catch (error) {
    console.log(error.response.data.error);
  }
};

export const createTodo = async (payload) => {
  try {
    const response = await makeRequest.post("/todos", { data: payload });
    console.log(response);
  } catch (error) {
    console.log(error.response.data.error);
  }
};
