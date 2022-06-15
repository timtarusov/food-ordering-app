export interface CardProps extends React.PropsWithChildren {
  className?: string;
  children?: React.ReactNode;
}

export interface InputProps {
  className?: string;
  label?: string;
  input: React.InputHTMLAttributes<HTMLInputElement>;
}

export interface ModalProps extends React.PropsWithChildren {
  onHideCart?: () => void;
}
