import { useSession, signIn, signOut } from 'next-auth/react';
import { Button, Typography } from '@mui/material';
import MainContainer from '@components/Layout/MainContainer';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <MainContainer>
        Signed in as {session.user.email}
        <br />
        <Button
          variant="contained"
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          Sign out
        </Button>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      Not signed in
      <br />
      <Button variant="contained" onClick={() => signIn()}>
        Sign in
      </Button>
      <br />
      <Typography variant="h2">TEST</Typography>
    </MainContainer>
  );
}
