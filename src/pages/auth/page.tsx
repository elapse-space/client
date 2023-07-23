import { LoginForm } from "@widgets/forms/login";

export const Auth = () => {
  return (
    <div
      className={
        "flex flex-col items-center justify-center h-screen w-full gap-8"
      }
    >
      <LoginForm />
    </div>
  );
};
