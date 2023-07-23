import { useSessionLogin } from "@features/session/login";
import { Button } from "@shared/ui/button";
import { forwardRef } from "react";

type LoginButtonProps = {
  username: string;
  password: string;
};

export const LoginButton = forwardRef(
  ({ username, password }: LoginButtonProps, ref) => {
    const { mutate: login } = useSessionLogin();

    const submit = () => {
      login({
        username: username,
        password: password,
      });
    };

    return (
      <Button
        ref={ref as any}
        type={"submit"}
        onClick={submit}
        className={"text-sm w-full text-white"}
      >
        Login
      </Button>
    );
  }
);
