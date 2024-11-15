import React, { useState } from "react";
import {
  Wrapper,
  Container,
  SubTitle,
  LoginContainer,
  Username,
  Password,
  ButtonText,
  Checkbox,
  LoginButton,
} from "../components/styles";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [rememberMe, setRemmemberMe] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5174/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigation.navigate("");
      } else {
        setErrorMessage(data.message || "Login failed");
      }
    } catch (error) {
      setErrorMessage("please try again later");
    }
  };

  return (
    <Wrapper>
      <Container>
        <LoginContainer>
          <SubTitle>Login</SubTitle>
          <Username
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Password
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <ButtonText>Remember me</ButtonText>
          <Checkbox></Checkbox>
          <LoginButton title="Login" onPress={handleLogin}>
            <ButtonText>Login</ButtonText>
          </LoginButton>
        </LoginContainer>
      </Container>
    </Wrapper>
  );
}
