import { ReactNode } from "react";

export type TUserPath = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPath[];
}
export type TSidebarPath = {
    key: string;
    label: ReactNode;
    children?: TSidebarPath[];
};

export type TReactRoute = {
    path: string;
    element: ReactNode;
}
