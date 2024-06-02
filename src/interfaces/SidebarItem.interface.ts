import { ReactElement } from "react";

export interface SidebarItemInferface {
    to: string;
    icon: string;
    title: string;
    description: string;
    component: ReactElement
}