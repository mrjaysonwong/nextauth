import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    router.push('/');
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
