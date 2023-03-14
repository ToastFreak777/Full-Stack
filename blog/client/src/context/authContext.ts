import React from "react";
import { AuthContextType } from "../@types/auth";

export const AuthContext = React.createContext<AuthContextType | null>(null);
