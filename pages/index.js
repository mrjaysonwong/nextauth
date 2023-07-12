import { useSession, signIn, signOut } from 'next-auth/react';
import { Button, Typography } from '@mui/material';
import MainContainer from '@components/Layout/MainContainer';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Typography variant="body1">
          Signed in as {session.user.email}
        </Typography>

        <Button
          variant="contained"
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          Sign out
        </Button>
      </>
    );
  }

  return (
    <>
      <Typography variant="body1">Not signed in</Typography>

      <Button variant="contained" onClick={() => signIn()}>
        Sign in
      </Button>
      <br />
    </>
  );
}
