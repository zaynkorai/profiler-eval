"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react"; // Removed Github
import { User } from "@supabase/supabase-js"; // Import User type

export function AuthButton() {
  const [user, setUser] = useState<User | null>(null); // Use User type
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
        if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
          router.refresh();
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router, supabase]);

  const handleSignIn = async () => {
    const redirectToUrl = `${location.origin}/auth/callback`;
    console.log("Client-side location.origin:", location.origin);
    console.log("Client-side redirectTo URL:", redirectToUrl);

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectToUrl,
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/auth");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  ) : (
    <Button onClick={handleSignIn} className="flex items-center gap-2">
      <Chrome className="h-4 w-4" /> Sign in with Google
    </Button>
  );
}
