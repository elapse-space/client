import { User } from "@entities/session";
import { useSessionLogout } from "@features/session/logout";
import { Avatar, AvatarFallback } from "@shared/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@shared/ui/dropdown-menu";
import { FC } from "react";

export const SessionDropdownControls: FC<{ payload: User }> = ({ payload }) => {
  const { mutate } = useSessionLogout();

  const signOut = () => {
    mutate();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar style={{ cursor: "pointer" }}>
          <AvatarFallback>{payload.username?.slice(0, 2)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"mr-6"} sideOffset={10}>
        <DropdownMenuLabel>{payload.username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
