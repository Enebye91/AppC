// import React, { useState, useEffect } from "react";
// import { Text } from "react-native";

// import {
//   Wrapper,
//   Container,
//   SubTitle,
//   Box,
// } from "../components/UserPageStyle.js";

// export default function UserPage() {
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);

//   if (error) {
//     return (
//       <Wrapper>
//         <Container>
//           <Text style={{ color: "red" }}>{error}</Text>
//         </Container>
//       </Wrapper>
//     );
//   }

//   return (
//     <Wrapper>
//       <Container>
//         <SubTitle>Journal</SubTitle>
//         <Text>Welcome, {userData}!</Text>
//         <Box>
//           <Text>Symptomer</Text>
//         </Box>

//         <Box>
//           <Text>Nutrition</Text>
//         </Box>

//         <Box>
//           <Text>Mood</Text>
//         </Box>

//         <Box>
//           <Text>Energi level</Text>
//         </Box>
//       </Container>
//     </Wrapper>
//   );
// }
// import React, { useState, useEffect } from "react";
// import { Text } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage"; // Importer AsyncStorage for at hente userId

// import {
//   Wrapper,
//   Container,
//   SubTitle,
//   Box,
// } from "../components/UserPageStyle.js";

// export default function UserPage() {
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         // Hent userId fra AsyncStorage (kan også være fra andre kilder som et JWT token)
//         const userId = await AsyncStorage.getItem("userId");

//         if (!userId) {
//           setError("User is not logged in");
//           return;
//         }

//         // Lav GET-request til backend med userId som query parameter
//         const response = await fetch(
//           `http://localhost:5174/api/user/UserPage?userId=${userId}`,
//           {
//             method: "GET",
//           }
//         );

//         const data = await response.json();

//         if (response.ok) {
//           setUserData(data.username); // Opdater kun med username
//         } else {
//           setError(data.message || "Failed to fetch user data");
//         }
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//         setError("Something went wrong");
//       }
//     };

//     fetchUserData();
//   }, []); // Kør kun én gang, når komponenten er blevet rendret

//   if (error) {
//     return (
//       <Wrapper>
//         <Container>
//           <Text style={{ color: "red" }}>{error}</Text>
//         </Container>
//       </Wrapper>
//     );
//   }

//   return (
//     <Wrapper>
//       <Container>
//         <SubTitle>Journal</SubTitle>
//         <Text>Welcome, {userData}!</Text>
//         <Box>
//           <Text>Symptomer</Text>
//         </Box>

//         <Box>
//           <Text>Nutrition</Text>
//         </Box>

//         <Box>
//           <Text>Mood</Text>
//         </Box>

//         <Box>
//           <Text>Energi level</Text>
//         </Box>
//       </Container>
//     </Wrapper>
//   );
// }
import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserPage() {
  const [userData, setUserData] = useState(null); // Til at holde brugerens data
  const [loading, setLoading] = useState(true); // Loader tilstand
  const [error, setError] = useState(""); // Fejlmeddelelse

  // Funktion til at hente brugerdata
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
          Authorization: `Bearer ${token}`, // Send tokenet med i Authorization header
        },
      });

      const data = await response.json();

      if (response.ok) {
        setUserData(data); // Sæt brugerdata, hvis anmodningen var succesfuld
      } else {
        setError(data.message || "Failed to fetch user data");
      }
    } catch (err) {
      console.error("Error fetching user data", err);
      setError("Something went wrong while fetching user data");
    } finally {
      setLoading(false); // Uanset hvad, stop loading
    }
  };

  useEffect(() => {
    fetchUserData(); // Kald funktionen når komponenten loades
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Vis loading indicator
  }

  if (error) {
    return <Text style={{ color: "red" }}>{error}</Text>; // Vis fejlmeddelelse, hvis der er en
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Welcome, {userData?.username}!
      </Text>
      <Text>Email: {userData?.email}</Text>
      {/* Tilføj andre brugerdata her */}
    </View>
  );
}
