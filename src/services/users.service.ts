import { service } from ".";

export const get = async () => {
  const response = await service.get("/users/");
  return response.data;
};

export const a = 44;
