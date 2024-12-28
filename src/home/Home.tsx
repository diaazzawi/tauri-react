import React from "react";
import {useNavigate} from "react-router-dom";
import {ButtonsContainer, Container, PrimaryButton, SecondaryButton, Subtitle, Title} from "./Home.styles";

/**
 * Home component.
 *
 * This component renders the homepage of the MassVirtual Tauri App.
 * It provides navigation buttons to the login page and a protected page.
 *
 * @returns {JSX.Element} The rendered homepage component.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
const Home: React.FC = () => {
  // Use the following hook to programmatically navigate to a certain route.
  const navigate = useNavigate();

  // Render the homepage. Note that this page is unprotected (i.e., does not require login).
  return (
    <Container>
      <Title variant="h1" gutterBottom>
        Welcome to MassVirtual Tauri App
      </Title>
      <Subtitle variant="h3" gutterBottom>
        This is the unprotected homepage
      </Subtitle>
      <ButtonsContainer>
        <PrimaryButton
          onClick={() => {
            // When the user clicks this button, navigate the user to the login page.
            navigate("/login");
          }}
        >
          Login
        </PrimaryButton>
        <SecondaryButton
          onClick={() => {
            // When the user clicks this button, navigate the user to the page1.
            navigate("/page1");
          }}
        >
          Protected Page 1
        </SecondaryButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Home;
