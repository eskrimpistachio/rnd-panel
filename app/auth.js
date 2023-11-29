import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authConfig } from './authconfig';
import { connectDB } from './lib/utils';
import { User } from './lib/models';
import bcrypt from 'bcrypt';

const login = async (credentials) => {
  try {
    connectDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error('Username atau Password anda salah!');

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect)
      throw new Error('Username atau Password anda salah!');

    return user;
  } catch (err) {
    // console.log(err);
    throw new Error('Failed to Login');
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
      }
      return token ;
    },
    async session({ session, token }) {
      if (token) {
        session.username = token.username;
      }
      return session ;
    },
  },
});
