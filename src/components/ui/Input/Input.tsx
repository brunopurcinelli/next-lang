"use client"
import { InputProps } from "@/components/models";

export const Input = ({ idInput='', label='', placeholder='', defaultValue='', onChange=()=>{}, maxLength=100, cssClass='form-control', cssClassLabel='', isReadOnly=false, required=false }: InputProps) => {
    return (
        <div className="form-floating">
            <input
                id={idInput}
                name={idInput}
                type="text"
                autoComplete="off"
                placeholder={placeholder}
                defaultValue={defaultValue}
                readOnly={isReadOnly}
                className={cssClass}
                maxLength={maxLength}
                onChange={onChange}
                required={required}
            />
            <label className={'fw-bold text-dark ' + cssClassLabel}>{label}</label>
        </div>
    );
}
