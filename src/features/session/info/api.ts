import { User, useSession } from "@entities/session";
import { api } from "@shared/api";
import { BasicResponse } from "@shared/api/types";
import { STORAGE_TOKEN } from "@shared/config";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

type Response = BasicResponse<User>;

export const useSessionInfo = () =>
  useQuery<Response>("session", {
    queryFn: () => {
      const token = localStorage.getItem(STORAGE_TOKEN);

      return api
        .get(`/user/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((r: AxiosResponse) => r.data);
    },
    onSuccess: (response: Response) => {
      const { setPayload, setAuth } = useSession.getState();

      setPayload(response.data);
      setAuth(true);
    },
  });
