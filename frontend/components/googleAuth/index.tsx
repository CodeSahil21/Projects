'use client';
import { toast } from "react-hot-toast";
import { useCallback } from "react";
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useQueryClient } from '@tanstack/react-query';
import { graphqlClient } from "@/clients/api";
import { VerifyGoogleUserTokenDocument } from "@/gql/graphql";

const GoogleLoginButton: React.FC = () => {
  const queryClient = useQueryClient();

  const handleLoginWithGoogle = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    if (!googleToken) {
      toast.error("Google token not found");
      return;
    }
    try {
      const { verifyGoogleToken } = await graphqlClient.request(VerifyGoogleUserTokenDocument, { token: googleToken });
      toast.success("Verified Successfully");
      console.log(verifyGoogleToken);
      if (verifyGoogleToken) {
        window.localStorage.setItem('__Xtoken', verifyGoogleToken);
        queryClient.invalidateQueries({ queryKey: ['current-user'] }); // Invalidate and refetch the user data
      }
    } catch (error) {
      toast.error("Failed to verify token");
      console.error(error);
    }
  }, [queryClient]);

  return (
    <GoogleLogin
      onSuccess={handleLoginWithGoogle}
      onError={() => toast.error("Google login failed")}
    />
  );
};

export default GoogleLoginButton;