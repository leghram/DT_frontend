import { useQuery, useMutation, useQueryClient } from "react-query";

import { get, getById, deleteUser } from "../../services/users.service";

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
  useDeleteUser: () => {
    const queryClient = useQueryClient();
    const { mutate, isLoading, data } = useMutation(
      (id: number) => deleteUser(id),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["GetUsers"]);
        },
      },
    );
    return { mutate, isLoading, data };
  },
};

export default UserService;
