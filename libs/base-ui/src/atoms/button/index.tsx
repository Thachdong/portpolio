import React from 'react';

type TButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<Readonly<TButtonProps>> = ({
  children,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};
