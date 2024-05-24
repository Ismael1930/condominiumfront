import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";



export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({

            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {

                process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}Api/User/LogIn`,
                    {
                        method: "POST",
                        body: JSON.stringify({
                            username: credentials?.username,
                            password: credentials?.password,
                        }),
                        headers: { "Content-Type": "application/json" },
                    }
                );
                console.log(res.ok);

                const data = await res.json();

                console.log(data);
                if (!res.ok) return

                const { token, user } = data;

                return { token, ...user };
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, token }) {
            session.user = token as any
            return session;
        },
    },
    pages: {
        signIn: '/auth/signin',
    },
}

