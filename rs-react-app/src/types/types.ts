import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  name: string;
  className: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
};