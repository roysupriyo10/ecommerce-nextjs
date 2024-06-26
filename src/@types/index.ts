import { ReactNode } from "react";

export type NavbarLink = {
  pathname: string;
  displayText: string;
};

export type SocialLink = {
  url: string;
  displayText: string;
  icon: ReactNode;
};

export type FormContextType = {
  name: string;
  message: string;
};

export type CustomJwtPayload = {
  email?: string;
  id: string;
};

export type JwtExpiry = "1d" | "30d";
