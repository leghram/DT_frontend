import { useQuery, useMutation, useQueryClient } from "react-query";

import { get, getById } from "../../services/users.service";

const UserService = {
  useGetUsers: () => {
    const { data, isLoading, refetch, isError } = useQuery({
      queryKey: ["GetUsers"],
      queryFn: () => get(),
    });
    return { data, isLoading, refetch, isError };
  },
  useGetUserById: (id: number) => {
    const { data, isLoading, refetch, isError } = useQuery({
      queryKey: ["GetUser", id],
      queryFn: () => getById(id),
    });
    return { data, isLoading, refetch, isError };
  },
};

export default UserService;
