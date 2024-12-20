import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  Wrapper,
  Sidebar,
  NavButton,
  ButtonText,
  CheckinContainer,
} from "../components/styles";

export default function UserPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const [settingPressed, setSettingPressed] = useState(false);

  const fetchUserData = async () => {
    const token = await AsyncStorage.getItem("token");

    if (!token) {
      setError("No token found. Please log in.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5174/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setUserData(data);
      } else {
        setError(data.message || "Failed to fetch user data");
      }
    } catch (err) {
      console.error("Error fetching user data", err);
      setError("Something went wrong while fetching user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={{ color: "red" }}>{error}</Text>;
  }

  const handleCheckIn = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      navigation.navigate("Check", { token });
    } else {
      setError("No token found. Please log in.");
    }
  };

  return (
    <View>
      <Wrapper>
        <Sidebar>
          <Text>Hi, {userData?.username}</Text>
          <NavButton
            isPressed={settingPressed}
            onPressIn={() => setSettingPressed(true)}
            onPressOut={() => setSettingPressed(false)}
            onPress={() => navigation.navigate("")}
          >
            <ButtonText>Profile and settings</ButtonText>
          </NavButton>
          <NavButton>
            <ButtonText>My data</ButtonText>
          </NavButton>
        </Sidebar>
        <CheckinContainer onPress={handleCheckIn}>
          <Text>Daily checkin</Text>
        </CheckinContainer>
      </Wrapper>
    </View>
  );
}
