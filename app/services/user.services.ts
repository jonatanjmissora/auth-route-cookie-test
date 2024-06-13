import { cookies } from "next/headers"

export async function getUser() {
    const res = await fetch("/api/auth/user")
    const data = await res.json()
    if(data.error) return {error: data.error, user: null}
    return {error: null, user: data.token}
}

export async function logout() {
    const res = await fetch("/api/auth/logout")
}