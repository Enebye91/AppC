import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;
console.log(StatusBarHeight);

export const Colors = {
  turkis: "#83c1c2",
  brun: "#472f15",
  offwhite: "#eaebe6",
};

const { turkis, brun, offwhite } = Colors;

export const Wrapper = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${turkis};
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: green;
`;

export const Title = styled.Text`
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  color: ${brun};
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  color: ${brun};
`;

export const Box = styled.View`
width: 90%; 
height: 50px; 
background-color: pink; 

`