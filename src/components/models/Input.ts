import { KeyboardEvent, MouseEvent } from "react";

export interface InputProps{
    idInput?: string;
    size?: string;//'sm' | 'default' | 'lg';
    label?: string;
    placeholder?:string;
    defaultValue?: string;
    isReadOnly?: boolean;
    cssClass?:string;
    cssClassLabel?:string;
    maxLength?: number;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputDateProps extends InputProps {
    defaultDate?: string | undefined;
}
export interface InputNumericProps extends InputProps{
    defaultNumber?: number;
}

export interface InputDatePickerProps extends InputProps {
    showTime?: boolean;
    defaultDate: Date | null;
    onChangeDate: ((date: Date | null, event?: KeyboardEvent<HTMLElement> | MouseEvent<HTMLElement, MouseEvent> | undefined) => void);
}

export interface InputTextareaProps extends InputProps {
    onChangeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface InputDropdownProps extends InputProps {
    children: React.ReactNode,
    onChangeDropDown: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface InputOptionProps extends InputProps {
    value: string;
    isSelected: boolean;
}

export interface InputSwitchProps extends InputProps {
    isSelected: boolean | undefined;
}

export interface InputCheckboxProps extends InputProps {
    isSelected: boolean | undefined;
}
export interface InputCheckboxSearchProps extends InputProps {
    cssClassSearchBox?:string;
    value?: string;
    children: React.ReactNode,
    isFilterable?: boolean,
    onBlur?: () => void;
}
export interface InputFileProps extends InputProps {
    onFileChange: (file: File | null) => void;
}
