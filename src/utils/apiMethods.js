import axios from "axios";

export const BASE_URL = "https://13.82.2.24.nip.io/api";

const postApi = async (url, body, config = {}) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/${url}`, body, config);
    return data;
  } catch (error) {}
};

const getApi = async (url, config = {}) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, config);
    return data;
  } catch (error) {}
};
const deleteApi = async (url, config = {}) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/${url}`, config);
    return data;
  } catch (error) {}
};

const updateApi = async (url, body, config = {}) => {
  try {
    const { data } = await axios.put(`${BASE_URL}/${url}`, body, config);
    return data;
  } catch (error) {}
};

export { updateApi, postApi, deleteApi, getApi };
