import { supabase } from "../supabase/client";

type OAuthProvider = "google" | "apple" | "azure";

type SignInOptions = {
  redirectTo?: string;
};

export const auth = {
  signInWithOAuth: async (provider: OAuthProvider, opts?: SignInOptions) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: opts?.redirectTo ?? window.location.origin,
      },
    });

    if (error) {
      return { error };
    }

    return { redirected: true, url: data.url };
  },
};