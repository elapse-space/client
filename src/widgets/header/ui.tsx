import { User, useSession } from "@entities/session";
import { RouterPaths } from "@shared/lib/router";
import { Button } from "@shared/ui/button";
import { Container } from "@shared/ui/container";
import { SessionDropdownControls } from "@widgets/session/dropdown-controls";
import { useNavigate } from "react-router-dom";
import { shallow } from "zustand/shallow";

export const Header = () => {
  const navigate = useNavigate();
  const { isAuth, payload } = useSession((state) => state, shallow);

  return (
    <header>
      <Container>
        <div
          className={
            "flex flex-row justify-end w-full items-center pt-6 gap-8 pb-6"
          }
        >
          {isAuth ? (
            <SessionDropdownControls payload={payload as User} />
          ) : (
            <Button
              variant={"default"}
              onClick={() => navigate(RouterPaths.AUTH_PAGE)}
            >
              Sign In
            </Button>
          )}
        </div>
      </Container>
    </header>
  );
};
