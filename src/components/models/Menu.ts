export interface Menu{
    title: string;
    list: MenuItem[]
}

export interface MenuItem{
    title: string;
    path: string;
    active: boolean;
    icon: any;
}

export interface MenuButtonProps{
    open: boolean
}