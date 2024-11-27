import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import {
  Wrapper,
  Container,
  HeadlineContainer,
  Headline,
  LoginArea,
  Username,
  LoginPassword,
  ButtonText,
  Checkbox,
  LoginButton,
  RememberContainer,
  BlueText,
} from "../components/styles";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    setError("");

    try {
      const response = await fetch("http://localhost:5174/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login succesful", data);
        navigation.navigate("UserPage");
      } else {
        console.error("Login failed", response.status);
        setError(data.message || "Invalid username or password");
      }
      // if (response.ok) {
      //   const data = await response.json();
      //   console.log(data);
      // } else {
      //   console.error("Login failed", response.status);
      // }

      // if (response.status === 200) {
      //   navigation.navigate("UserPage");
      // } else {
      //   setError(data.message || "Invalid username or password");
      // }
    } catch (err) {
      console.error("Error", err);
      setError("Something went wrong");
    }
  };

  return (
    <Wrapper>
      <Container>
        <HeadlineContainer>
          <Headline>Login</Headline>
        </HeadlineContainer>
        <LoginArea>
          <Username
            placeholder="username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />

          <LoginPassword
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          ></LoginPassword>
          {/* {errorMessage ? <Text>{errorMessage}</Text> : null} */}
          {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
          <RememberContainer>
            <BlueText>Remember me</BlueText>
            <Checkbox></Checkbox>
          </RememberContainer>
          <LoginButton onPress={handleLogin}>
            <ButtonText>Login</ButtonText>
          </LoginButton>
        </LoginArea>
      </Container>
    </Wrapper>
  );
}
