"use client"

import { SignUpButtonProps } from "@/components/models";
import { Button } from "../Button";
import { FaUserPlus } from "react-icons/fa";

export const SignUpButton = ({isReadOnly = false, onClick = ()=>{}}: SignUpButtonProps) => {
    return (
        <Button
            cssClass="btn btn-warning ms-2"
            label="Sign-up"
            iconStart={<FaUserPlus />}
            isReadOnly={isReadOnly}
            onClick={onClick}
            />
    );
}
