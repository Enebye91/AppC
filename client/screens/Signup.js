import React, { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Wrapper,
  Container,
  HeadlineContainer,
  Headline,
  NameContainer,
  NameHolder,
  Email,
  Username,
  FormArea,
  Password,
  LoginButton,
  ButtonText,
  BodyText,
  BlueText,
  CheckContainer,
  styles,
} from "../components/styles";

export default function SignupPage() {
  const navigation = useNavigation();
  const [isSignupPressed, setIsSignupPressed] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [cookieAccepted, setCookieAccepted] = useState(false);

  const handleSignup = async () => {
    if (!firstname || !lastname || !email || !username || !password) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    if (!cookieAccepted) {
      setErrorMessage("You must accept the cookie policy");
      return;
    }

    try {
      const response = await fetch("http://localhost:5174/api/signup/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          username,
          password,
          cookieConsent: cookieAccepted,
        }),
        // credentials: "include",
      });

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
        <HeadlineContainer>
          <Headline>Signup</Headline>
        </HeadlineContainer>

        <NameContainer>
          <NameHolder
            placeholder="Firstname"
            value={firstname}
            onChangeText={(text) => setFirstname(text)}
          />
          <NameHolder
            placeholder="Lastname"
            value={lastname}
            onChangeText={(text) => setLastname(text)}
          />
        </NameContainer>

        <FormArea>
          <Email
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Username
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Password
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <View>
            <CheckContainer>
              <BlueText>
                {cookieAccepted ? "Cookies accepted" : "Accept cookies"}
              </BlueText>
              <Pressable
                onPress={() => setCookieAccepted(!cookieAccepted)}
                style={[
                  styles.checkbox,
                  cookieAccepted && styles.checkboxSelected,
                ]}
              />
            </CheckContainer>
          </View>

          {errorMessage ? <Text>{errorMessage}</Text> : null}

          <LoginButton title="Sign Up" onPress={handleSignup}>
            <ButtonText
              isPressed={isSignupPressed}
              onPressIn={() => setIsSignupPressed(true)}
              onPressOut={() => setIsSignupPressed(false)}
            >
              Signup
            </ButtonText>
          </LoginButton>

          <BodyText>
            Already have an account? <BlueText>Login</BlueText>
          </BodyText>
        </FormArea>
      </Container>
    </Wrapper>
  );
}
