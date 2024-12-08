import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Calender() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePrevDay = () => {
    const prevDay = new Date(selectedDate);
    prevDay.setDate(selectedDate.getDate() - 1);
    setSelectedDate(prevDay);
  };

  const handleNextday = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(selectedDate.getDate() + 1);
    setSelectedDate(nextDay);
  };

  const day = selectedDate.getDate();
  const month = selectedDate.toLocaleString("default", { month: "long" });

  return (
    <View>
      <Text>{`${day} ${month}`}</Text>
    </View>
  );
}
