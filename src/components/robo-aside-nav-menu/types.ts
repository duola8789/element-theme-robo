export interface TypeMenuItem {
    path: string;
    title: string;
}

export interface TypeMenuConfig {
    path: string;
    icon: string;
    title: string;
    children: TypeMenuItem[];
}
