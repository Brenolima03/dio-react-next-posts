import { api } from "../services/api";

export const getPosts = async () => {
  const { data } = await api.get("/posts");

  return data || [];
};

export const getPostById = async (id) => {
  const { data } = await api.get(`/posts?id=eq.${ id }`);

  return data || {};
};
