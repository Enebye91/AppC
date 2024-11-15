import React, { useState } from "react";
import {
  Wrapper,
  Container,
  SubTitle,
  NameHolder,
  Username,
  Password,
  ButtonText,
  Checkbox,
  LoginButton,
  BodyText,
} from "../components/styles";
import { Text } from "react-native";

export default function SignupPage({ navigation }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://86.52.2.35:5174/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, lastname, username, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setErrorMessage(data.message || "Signup failed");
        return;
      }

      const data = await response.json();

      if (response.ok) {
        navigation.navigate("LoginPage");
      } else {
        setErrorMessage(data.message || "Signup failed");
      }
    } catch (error) {
      setErrorMessage("Network error, please try again later.");
      console.error("Error in fetch:", error);
    }
  };

  return (
    <Wrapper>
      <Container>
        <SubTitle>Signup</SubTitle>
        <NameHolder
          placeholder="Firstname"
          value={firstname}
          onChangeText={(text) => setFirstname(text)}
        />
        <NameHolder
          placeholder="lastname"
          value={lastname}
          onChangeText={(text) => setLastname(text)}
        />
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

        <Password
          placeholder="Confirm password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <ButtonText> I Agree with privacy and policy</ButtonText>
        <Checkbox></Checkbox>

        <LoginButton title="Sign Up" onPress={handleSignup}>
          <ButtonText>Signup</ButtonText>
        </LoginButton>
        <BodyText>Already have an account? Sign in</BodyText>
      </Container>
    </Wrapper>
  );
}
