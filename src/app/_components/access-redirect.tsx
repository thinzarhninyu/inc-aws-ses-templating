import Link from 'next/link';
import { Button } from '@/app/_components/ui/button';

const RedirectPage = () => {
  return (
    <div className="w-1/2">
      <p>You need to get invited to this page.</p>
      <Link href="/api/auth/signin">
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
        >
          Log In
        </Button>
      </Link>
    </div>
  );
};

export default RedirectPage;