import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from "react-native";
import {
  CheckWrapper,
  Grid,
  InButton,
  NextButton,
  ButtonText,
} from "../components/styles";

export default function YourMood() {
  const navigation = useNavigation();
  const [moods, setMoods] = useState([]);
  const [selectedMood, setSelectedMood] = useState([]);

  useEffect(() => {
    const fetchMood = async () => {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        setError("Unauthorized: Missing token");
        return;
      }

      try {
        const response = await fetch("http://localhost:5174/api/Mood", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setMoods(data);
        } else {
          setError(data.message || "Failed to fetch mood data");
        }
      } catch (error) {
        console.error("Error fetching mood:", error);
        setError("Something went wrong while fetching mood data");
      }
    };

    fetchMood();
  }, []);

  const handleMood = (mood) => {
    const pushMood = [...selectedMood];
    if (pushMood.includes(mood)) {
      const index = pushMood.indexOf(mood);
      pushMood.splice(index, 1);
    } else {
      pushMood.push(mood);
    }
    setSelectedMood(pushMood);
  };

  const handleNext = async () => {
    await AsyncStorage.setItem("selectedMood", JSON.stringify(selectedMood));
    navigation.navigate("Energi");
  };

  return (
    <View>
      <CheckWrapper>
        <Text>Hello</Text>

        {moods.length > 0 ? (
          moods.map((mood) => (
            <Grid key={mood._id}>
              <InButton
                onPress={() => handleMood(mood.name)}
                selected={selectedMood.includes(mood.name)}
              >
                <Text>{mood.name}</Text>
              </InButton>
            </Grid>
          ))
        ) : (
          <Text>No mood found</Text>
        )}

        <NextButton onPress={handleNext}>
          <ButtonText>Next</ButtonText>
        </NextButton>
      </CheckWrapper>
    </View>
  );
}
