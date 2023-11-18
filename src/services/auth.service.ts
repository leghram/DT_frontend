import { authService } from ".";

const getToken = async (formData: any) => {
  const response = await authService.post("/login/", formData);
  return response;
};

export default getToken;
