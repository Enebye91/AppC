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

export default function YourNutrisian() {
  const navigation = useNavigation();
  const [nutrisions, setNutrisions] = useState([]);
  const [selectedNutrisions, setSelectedNutrision] = useState([]);

  useEffect(() => {
    const fetchNutrision = async () => {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        setError("Unauthorized: Missing token");
        return;
      }

      try {
        const response = await fetch("http://localhost:5174/api/Nutrision", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setNutrisions(data);
        } else {
          setError(data.message || "Failed to fetch nutrision data");
        }
      } catch (error) {
        console.error("Error fetching nutrision:", error);
        setError("Something went wrong while fetching nutrision data");
      }
    };

    fetchNutrision();
  }, []);

  const handleNutrision = (nutrision) => {
    const pushNutrision = [...selectedNutrisions];
    if (pushNutrision.includes(nutrision)) {
      const index = pushNutrision.indexOf(nutrision);
      pushNutrision.splice(index, 1);
    } else {
      pushNutrision.push(nutrision);
    }
    setSelectedNutrision(pushNutrision);
  };

  const handleNext = async () => {
    await AsyncStorage.setItem(
      "selectedNutrisions",
      JSON.stringify(selectedNutrisions)
    );
    navigation.navigate("Mood");
  };

  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <CheckWrapper>
        <Text>Hello</Text>

        {nutrisions.length > 0 ? (
          nutrisions.map((nutrision) => (
            <Grid key={nutrision._id}>
              <InButton
                onPress={() => handleNutrision(nutrision.name)}
                selected={selectedNutrisions.includes(nutrision.name)}
              >
                <Text>{nutrision.name}</Text>
              </InButton>
            </Grid>
          ))
        ) : (
          <Text>No nutrisions found</Text>
        )}
      </CheckWrapper>
      <NextButton onPress={handleNext}>
        <ButtonText>Next</ButtonText>
      </NextButton>
    </View>
  );
}
