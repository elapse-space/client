import { useSession } from "@entities/session";
import { STORAGE_TOKEN } from "@shared/config";
import { toast } from "@shared/lib/react-hooks/use-toast";
import { RouterPaths } from "@shared/lib/router";
import { useNavigate } from "react-router-dom";

export const useSessionLogout = () => {
  const store = useSession.getState();
  const navigate = useNavigate();

  const mutate = () => {
    localStorage.removeItem(STORAGE_TOKEN);
    store.setPayload({});
    store.setAuth(false);
    toast({ title: "Success logout" });

    navigate(RouterPaths.AUTH_PAGE);
  };

  return { mutate };
};
