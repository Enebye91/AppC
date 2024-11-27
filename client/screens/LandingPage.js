import React, { useState } from "react";
import {
  Wrapper,
  Container,
  PageLogo,
  Button,
  WhiteButton,
  Title,
  SubTitle,
  ButtonText,
  BlackBtnText,
} from "../components/styles";

export default function LandingPage({ navigation }) {

  const [isLoginPressed, setIsLoginPressed] = useState(false);
  const [isSignupPressed, setIsSignupPressed] = useState(false);
  return (
    <>
      <Wrapper>
        <Container>
          <PageLogo />
          <Title>Clarity</Title>

          <SubTitle>Lorem ipsum</SubTitle>
          <Button
            isPressed={isLoginPressed}
            onPressIn={() => setIsLoginPressed(true)}
            onPressOut={() => setIsLoginPressed(false)}
            onPress={() => navigation.navigate("LoginPage")}
          >
            <ButtonText>Login</ButtonText>
          </Button>

          <WhiteButton
            isPressed={isSignupPressed}
            onPressIn={() => setIsSignupPressed(true)}
            onPressOut={() => setIsSignupPressed(false)}
            onPress={() => navigation.navigate("SignupPage")}
          >
            <BlackBtnText>Signup</BlackBtnText>
          </WhiteButton>
        </Container>
      </Wrapper>
    </>
  );
}
