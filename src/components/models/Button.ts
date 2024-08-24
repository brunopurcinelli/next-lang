export interface ButtonProps{
    keyProp?:string | undefined;
    cssClass?: string;
    label?: string;
    isReadOnly?: boolean;
    onClick?: () => void;
    iconStart?: any | undefined;
    iconEnd?:any | undefined;
    isLoading?: boolean;
}

export interface LoginButtonProps extends ButtonProps{
}

export interface SignUpButtonProps extends ButtonProps{
}