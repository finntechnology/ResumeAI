import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + "/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const CreateNewResume = (data) => axiosClient.post("/resumes", data);

const GetUserResumes = (userEmail) =>
  axiosClient.get(`/resumes?filters [userEmail] [$eq]=` + userEmail);
const updateResumeDetails = (id, data) =>
  axiosClient.put("/resumes/" + id, data);

const GetResumeById = (id) => axiosClient.get("/resumes/" + id + "?populate=*");

const DeleteResumeById = (id) => axiosClient.delete("/resumes/" + id);

export default {
  CreateNewResume,
  GetUserResumes,
  updateResumeDetails,
  GetResumeById,
  DeleteResumeById,
};
