import { useQuery, useMutation, useQueryClient } from "react-query";

import { get } from "../../services/users.service";

const UserService = {
  useGetUsers: () => {
    const { data, isLoading, refetch, isError } = useQuery({
      queryKey: ["GetUsers"],
      queryFn: () => get(),
    });
    return { data, isLoading, refetch, isError };
  },
};

export default UserService;
