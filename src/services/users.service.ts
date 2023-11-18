import { service } from ".";

export const get = async () => {
  const response = await service.get("/users/");
  return response.data;
};

export const getById = async (id: number) => {
  const response = await service.get(`/users/${id}`);
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await service.delete(`/users/${id}`);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await service.post("/users/", user);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await service.put(`/users/${user.id}`, user);
  return response.data;
};
