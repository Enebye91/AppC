import React from "react";
import {
  Wrapper,
  Container,
  PageLogo,
  Title,
  SubTitle,
  Button,
} from "../components/styles";

export default function LandingPage({ navigation }) {
  return (
    <>
      <Wrapper>
        <Container>
          <PageLogo />
          <Title>Clarity</Title>

          <SubTitle>Lorem ipsum</SubTitle>
          <Button
            title="Login"
            onPress={() => navigation.navigate("LoginPage")}
          />
          <Button
            title="Signup"
            onPress={() => navigation.navigate("SignupPage")}
          />
        </Container>
      </Wrapper>
    </>
  );
}
