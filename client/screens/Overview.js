import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Overview() {
  const [mood, setMood] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const [energi, setEnergi] = useState([]);
  const [nutrisions, setNutrisions] = useState([]);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        const storedMood = await AsyncStorage.getItem("selectedMood");
        const storedSymptoms = await AsyncStorage.getItem("selectedSymptoms");
        const storedEnergi = await AsyncStorage.getItem("selectedEnergi");
        const storedNutrisions = await AsyncStorage.getItem(
          "selectedNutrisions"
        );

        if (storedMood) {
          console.log("Stored Mood:", storedMood);
        }
        if (storedSymptoms) {
          console.log("Stored Symptoms:", storedSymptoms);
        }

        setMood(storedMood ? JSON.parse(storedMood) : []);
        setSymptoms(storedSymptoms ? JSON.parse(storedSymptoms) : []);
        setEnergi(storedEnergi ? JSON.parse(storedEnergi) : []);
        setNutrisions(storedNutrisions ? JSON.parse(storedNutrisions) : []);
      } catch (error) {
        console.error("Error fetching overview data:", error);
        setError("Could not load overview data. Please try again.");
      }
    };

    fetchOverviewData();
  }, []);

  const handleSave = async () => {
    const token = await AsyncStorage.getItem("token");

    if (!token) {
      setError("Unauthorized: Missing token.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5174/api/Overview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          mood,
          symptoms,
          energi,
          nutrisions,
        }),
      });

      const responseBody = await response.json();
      console.log("Response from API:", responseBody);

      if (response.ok) {
        console.log("Data successfully saved");
        navigation.navigate("UserPage");
      } else {
        const data = await response.json();
        console.error(
          "Error saving data:",
          data.message || response.statusText
        );
        setError(data.message || "Failed to save data.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      setError("Something went wrong while saving data.");
    }
  };

  return (
    <View>
      <Text>Your overview:</Text>
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      <Text>Mood:</Text>
      {mood.length > 0 ? (
        mood.map((item, index) => <Text key={index}>{item}</Text>)
      ) : (
        <Text>None</Text>
      )}

      <Text>Symptoms:</Text>
      {symptoms.length > 0 ? (
        symptoms.map((item, index) => <Text key={index}>{item}</Text>)
      ) : (
        <Text>None</Text>
      )}

      <Text>Energi:</Text>
      {energi.length > 0 ? (
        energi.map((item, index) => <Text key={index}>{item}</Text>)
      ) : (
        <Text>None</Text>
      )}

      <Text>Nutrisions:</Text>
      {nutrisions.length > 0 ? (
        nutrisions.map((item, index) => <Text key={index}>{item}</Text>)
      ) : (
        <Text>None</Text>
      )}

      <Button title="Let's go" onPress={handleSave} />
    </View>
  );
}
