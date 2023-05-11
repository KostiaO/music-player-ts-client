import React from "react";

interface Props {
  submitFn: () => void;
  children: React.ReactNode;
  className?: string;
}

export const FormGroup: React.FC<Props> = ({
  submitFn,
  children,
  className,
}) => {
  return (
    <form
      className={className ? className : ""}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitFn();
      }}
    >
      {children}
    </form>
  );
};
