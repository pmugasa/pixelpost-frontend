import axios from "axios";
const baseUrl = "http://localhost:4000/pack/new";
let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};
const pack = async (formData) => {
  const config = {
    headers: { Authorization: token },
  };

  const res = await axios.post(baseUrl, formData, config);

  console.log("response data", res.data);
  return res.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { pack, setToken };
