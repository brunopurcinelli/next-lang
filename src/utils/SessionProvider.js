"use client"

import { SessionProvider } from "next-auth/react"

export default function AuthProvider ({ children }) {
    return <SessionProvider basePath="/PkAdmin/api/auth">{children}</SessionProvider>
}
