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
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
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

export const Tekst = styled.TextInput`
  font-size: 18px;
  color: ${brun};
  width: 90%;
  height: 20px;
  background-color: ${offwhite};
`;

export const Button = styled(TouchableOpacity)`
  width: 100px;
  height: 150px;
  background-color: ${brun};
`;

export const FormArea = styled.View`
  width: 90%;
  height: 300px;
  background-color: ${offwhite};
`;

// export const email = styled.Text`
//   width: 150px;
//   height: 150px;
// `;
