import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; 

import {
  Wrapper,
  Container,
  HeadlineContainer,
  Headline,
  LoginArea,
  Username,
  LoginPassword,
  ButtonText,
  LoginButton,
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
        console.log("Logged in successfully");


        await AsyncStorage.setItem("token", data.token);
        console.log("Token saved:", data.token);

     
        navigation.navigate("UserPage");
      } else {
        console.error("Login failed", response.status);
        setError(data.message || "Invalid username or password");
      }
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
          />
          {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

          <LoginButton onPress={handleLogin}>
            <ButtonText>Login</ButtonText>
          </LoginButton>
        </LoginArea>
      </Container>
    </Wrapper>
  );
}
