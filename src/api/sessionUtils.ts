import { getSession } from "next-auth/react";


export async function getToken() {
    const session = await getSession()
    return session?.user.token
}