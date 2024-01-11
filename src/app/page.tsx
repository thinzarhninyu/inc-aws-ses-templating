import Link from "next/link";

import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import EmailEditor from "./_components/email-editor";
import { Button } from "@/app/_components/ui/button";
import RedirectPage from "./_components/access-redirect";

export default async function Home() {

  const session = await getServerAuthSession();
 
  if (!session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <RedirectPage />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <EmailEditor />
    </main>
  );
}