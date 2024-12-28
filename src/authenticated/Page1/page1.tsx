import {Link} from "@mui/material";
import React from "react";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import {useNavigate} from "react-router-dom";
import {Box, Header, Main, Subtitle, Title} from "./page1.styles";

/**
 * Page1 component.
 *
 * This component represents a protected page that requires the user to be logged in.
 * It includes a logout button that, when clicked, will sign out the user and navigate
 * them to the homepage or login page.
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @component
 * @example
 * return (
 *   <Page1 />
 * )
 *
 * @remarks
 * - The `handleLogoutClick` function currently signs out the user and navigates to the homepage.
 * - When the logout endpoint is defined, uncomment the block that sends a POST request to the logout endpoint,
 *   and comment out the direct `signOut` and `navigate` calls.
 *
 * @hook
 * - `useSignOut` - Hook to sign out the user.
 * - `useNavigate` - Hook to programmatically navigate to a certain route.
 */
const Page1: React.FC = () => {
  // Use the following hook to sign out the user.
  const signOut = useSignOut();
  // Use the following hook to programmatically navigate to a certain route.
  const navigate = useNavigate();

  // Handler to perform sign out then navigating to the index route (homepage).
  const handleLogoutClick = async () => {
    //TODO: Uncomment the following block when the logout endpoint is defined
    // const url = "https://server.com/logout";
    // const resp = await axios.post(url, user, {
    //   headers: {
    //     authorization: `Bearer ${state.login?.accessToken}`,
    //   },
    // });
    // if (resp.data) {
    //   signOut();
    //   navigate("/login");
    // }

    //TODO: Comment out the following lines when the logout endpoint is defined
    signOut();
    navigate("/");
  };

  // Render the page. Note that this page is protected (i.e., requires login).
  return (
    <>
      <Box>
        <Link className="mr-4!" component="button" variant="h6" onClick={handleLogoutClick}>
          Logout
        </Link>
      </Box>
      <Header>
        <Title>Page 1 - Protected!</Title>
      </Header>
      <Main>
        <Subtitle>This page is restricted to logged in users.</Subtitle>
      </Main>
    </>
  );
};

export default Page1;
