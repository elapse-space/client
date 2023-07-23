import { create } from "zustand";

export type SessionLogin = {
  user: User;
  access_token: string;
};

export type SessionRegistration = {
  user: User;
  access_token: string;
};

export type User = {
  id: number;
  username: string;
};

export type SessionStore = {
  isAuth: boolean;
  payload: Partial<User>;

  setAuth: (isAuth: boolean) => void;
  setPayload: (payload: Partial<User>) => void;
};

export const useSession = create<SessionStore>()((set) => ({
  isAuth: false,
  payload: {},

  setAuth: (isAuth) =>
    set({
      isAuth,
    }),

  setPayload: (payload) =>
    set({
      payload,
    }),
}));
