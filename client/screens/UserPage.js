import React, { useState, useEffect } from "react";
import { Text } from "react-native";

import {
  Wrapper,
  Container,
  SubTitle,
  Box,
} from "../components/UserPageStyle.js";

export default function UserPage() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:5174/api/user/UserPage",
  //         {
  //           method: "GET",
  //           // Authorization: `Bearer ${token}`,
  //           // credentials: "include",
  //         }
  //       );

  //       const data = await response.json();
  //       console.log(data);

  //       if (response.ok) {
  //         setUserData(userData);
  //       } else {
  //         setError(data.message || "Failed to fetch user data");
  //       }
  //     } catch (err) {
  //       console.error("Error fetching user data:", err);
  //       setError("Something went wrong");
  //     }
  //   };

  //   fetchUserData();
  // }, []);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Hent token fra cookies (eller asyncStorage, hvis du bruger det)
        const token = document.cookie.replace(
          /(?:(?:^|.*;\s*)authToken\s*\=\s*([^;]*).*$)|^.*$/,
          "$1"
        );

        // Hvis token ikke findes, returner fejl
        if (!token) {
          setError("No token found");
          return;
        }

        const response = await fetch(
          "http://localhost:5174/api/user/UserPage",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, // Tilføj Authorization header
            },
            credentials: "include", // Sørg for, at cookies sendes
          }
        );

        const data = await response.json();
        console.log(data);

        if (response.ok) {
          setUserData(data.user); // Hvis succes, gem brugerdata
        } else {
          setError(data.message || "Failed to fetch user data");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Something went wrong");
      }
    };

    fetchUserData();
  }, []);
  if (error) {
    return (
      <Wrapper>
        <Container>
          <Text style={{ color: "red" }}>{error}</Text>
        </Container>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Container>
        <SubTitle>Journal</SubTitle>

        <Box>
          <Text>Symptomer</Text>
        </Box>

        <Box>
          <Text>Nutrition</Text>
        </Box>

        <Box>
          <Text>Mood</Text>
        </Box>

        <Box>
          <Text>Energi level</Text>
        </Box>
      </Container>
    </Wrapper>
  );
}
