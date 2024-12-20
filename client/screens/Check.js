import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from "react-native";
import {
  CheckWrapper,
  SubTitle,
  Grid,
  InButton,
  NextButton,
  ButtonText,
} from "../components/styles";

export default function Check() {
  const navigation = useNavigation();
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  useEffect(() => {
    const fetchSymptoms = async () => {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        setError("Unauthorized: Missing token");
        return;
      }

      try {
        const response = await fetch("http://localhost:5174/api/Symptom", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setSymptoms(data);
        } else {
          setError(data.message || "Failed to fetch symptoms");
        }
      } catch (error) {
        console.error("Error fetching symptoms:", error);
        setError("Something went wrong while fetching symptoms");
      }
    };

    fetchSymptoms();
  }, []);

  const handleSymptom = (symptom) => {
    const pushSymptoms = [...selectedSymptoms];
    if (pushSymptoms.includes(symptom)) {
      const index = pushSymptoms.indexOf(symptom);
      pushSymptoms.splice(index, 1);
    } else {
      pushSymptoms.push(symptom);
    }
    setSelectedSymptoms(pushSymptoms);
  };

  const handleNext = async () => {
    await AsyncStorage.setItem(
      "selectedSymptoms",
      JSON.stringify(selectedSymptoms)
    );
    navigation.navigate("Nutrisian");
  };

  return (
    <View>
      <SubTitle>Symptoms</SubTitle>
      <CheckWrapper>
        <Text>Checkin</Text>

        {symptoms.length > 0 ? (
          symptoms.map((symptom) => (
            <Grid key={symptom._id}>
              <InButton
                onPress={() => handleSymptom(symptom.name)}
                selected={selectedSymptoms.includes(symptom.name)}
              >
                <Text>{symptom.name}</Text>
              </InButton>
            </Grid>
          ))
        ) : (
          <Text>No symptoms found</Text>
        )}

        <NextButton onPress={handleNext}>
          <ButtonText>Next</ButtonText>
        </NextButton>
      </CheckWrapper>
    </View>
  );
}
