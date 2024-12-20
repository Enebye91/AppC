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

export default function EnergiLevel() {
  const navigation = useNavigation();
  const [energies, setEnergies] = useState([]);
  const [selectedEnergi, setSelectedEnergi] = useState([]);

  useEffect(() => {
    const fetchEnergi = async () => {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        setError("Unauthorized: Missing token");
        return;
      }

      try {
        const response = await fetch("http://localhost:5174/api/energi", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setEnergies(data);
        } else {
          setError(data.message || "Failed to fetch energi data");
        }
      } catch (error) {
        console.error("Error fetching energi:", error);
        setError("Something went wrong while fetching energi data");
      }
    };

    fetchEnergi();
  }, []);

  const handleEnergi = (energi) => {
    const pushEnergi = [...selectedEnergi];
    if (pushEnergi.includes(energi)) {
      const index = pushEnergi.indexOf(energi);
      pushEnergi.splice(index, 1);
    } else {
      pushEnergi.push(energi);
    }
    setSelectedEnergi(pushEnergi);
  };

  const handleNext = async () => {
    await AsyncStorage.setItem(
      "selectedEnergi",
      JSON.stringify(selectedEnergi)
    );
    navigation.navigate("Overview");
  };

  return (
    <View>
      <CheckWrapper>
        <Text>Hello</Text>

        {energies.length > 0 ? (
          energies.map((energi) => (
            <Grid key={energi._id}>
              <InButton
                onPress={() => handleEnergi(energi.number)}
                selected={selectedEnergi.includes(energi.number)}
              >
                <Text>{energi.number}</Text>
              </InButton>
            </Grid>
          ))
        ) : (
          <Text>No Energi found</Text>
        )}

        <NextButton onPress={handleNext}>
          <ButtonText>Next</ButtonText>
        </NextButton>
      </CheckWrapper>
    </View>
  );
}
