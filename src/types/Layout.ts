import { PropsWithChildren } from "react";

export interface HeaderProps {
  onShowCart: () => void;
}

export interface HeaderCartButtonProps extends PropsWithChildren {
  onClick: () => void;
}
