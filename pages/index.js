import { useSession, signIn, signOut } from 'next-auth/react';
import MainContainer from '@components/Layout/MainContainer';
import SettingsDrawer from '@components/Layout/SettingsDrawer';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <MainContainer>
        Signed in as {session.user.email}
        <br />
        <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
      </MainContainer>
    );
  }
  return (
    <MainContainer>
      Not signed in
      <br />
      <button onClick={() => signIn()}>Sign in</button>
      <SettingsDrawer />
    </MainContainer>
  );
}
