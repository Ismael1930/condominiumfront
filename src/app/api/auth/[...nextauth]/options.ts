import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import api from '@/api/authApi'



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
                const res = await api.loginUser(credentials)

                const {data,status} =  res;
                
                if (status !== 200) return

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

