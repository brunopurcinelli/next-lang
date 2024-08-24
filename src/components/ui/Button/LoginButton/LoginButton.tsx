"use client"

import { LoginButtonProps } from "@/components/models";
import { Button } from "../Button";
import { MdPeopleAlt } from "react-icons/md";

export const LoginButton = ({isReadOnly = false, onClick = ()=>{}}: LoginButtonProps) => {
    return (
        <Button
            cssClass="btn btn-outline-light me-2"
            label="Login"
            iconStart={<MdPeopleAlt />}
            isReadOnly={isReadOnly}
            onClick={onClick}
            />
    );
}
