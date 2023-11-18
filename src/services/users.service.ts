import { service } from ".";

export const get = async () => {
  const response = await service.get("/users/");
  return response.data;
};

export const getById = async (id: number) => {
  const response = await service.get(`/users/${id}`);
  return response.data;
};
