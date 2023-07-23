import { SessionLogin, useSession } from "@entities/session";
import { api } from "@shared/api";
import { BasicResponse } from "@shared/api/types";
import { STORAGE_TOKEN } from "@shared/config";
import { toast } from "@shared/lib/react-hooks/use-toast";
import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

type Login = {
  username: string;
  password: string;
};

type Response = BasicResponse<SessionLogin>;

export const useSessionLogin = () => {
  const store = useSession.getState();

  return useMutation<Response, Error, Login>(
    (data) => {
      return api.post("/auth/login", data).then((r: AxiosResponse) => r.data);
    },
    {
      onSuccess: (response: Response) => {
        store.setPayload(response.data.user);
        store.setAuth(true);
        localStorage.setItem(STORAGE_TOKEN, response.data.access_token);

        toast({
          title: "Success",
          description: response.message,
        });
      },
      onError: (error: any) => {
        const errorMessage = error["response"].data;

        toast({
          title: "Error",
          description: errorMessage.message,
        });
      },
    }
  );
};
