import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;
console.log(StatusBarHeight);

export const Colors = {
  turkis: "#83c1c2",
  darkblue: "#257586",
  offwhite: "#eaebe6",
  black: "#000",
};

const { turkis, darkblue, offwhite, black } = Colors;

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
`;

export const HeadlineContainer = styled.View`
  width: 260px;
  padding-left: 5px;
`;

export const Headline = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  letter-spacing: 1px;
  color: ${darkblue};
  fontfamily: "Roboto-Regular";
`;

export const BodyText = styled.Text`
  font-size: 16px;
  fontfamily: "Roboto-Regular";
  padding-left: 10px;
`;
export const SmallText = styled.Text`
  font-size: 14px;
  fontfamily: "Roboto-Regular";
`;

export const Tekst = styled.TextInput`
  font-size: 18px;
  color: ${darkblue};
  width: 90%;
  height: 20px;
  background-color: ${offwhite};
`;

export const NameContainer = styled.View`
  width: 260px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FormArea = styled.View`
  width: 260px;
  height: 260px;
  dispaly: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const NameHolder = styled.TextInput`
  width: 125px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 24px;
  padding: 10px;
  margin-top: 10px;
  background-color: ${offwhite};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
`;

export const Username = styled.TextInput`
  width: 260px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 24px;
  padding: 10px;
  margin-top: 10px;
  background-color: ${offwhite};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
`;

export const Password = styled.TextInput`
  width: 260px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 24px;
  padding: 10px;
  margin-top: 10px;
  background-color: ${offwhite};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
`;

export const CheckContainer = styled.View`
  width: 240px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const Checkbox = styled(TouchableOpacity)`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: ${offwhite};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${offwhite};
  fontfamily: "Roboto-Regular";
`;

export const BlackBtnText = styled.Text`
  font-size: 18px;
  color: ${black};
  fontfamily: "Roboto-Regular";
`;

export const BlueText = styled.Text`
font-size: 18px
color: ${darkblue};
`;

export const LoginButton = styled(TouchableOpacity)`
  width: 260px;
  height: 40px;
  border-radius: 24px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${offwhite};
  background-color: ${darkblue};
  box-shadow: 3px 3px 10px #1b5a65;
  transition: transform 0.2s ease;
  // transform: ${({ isPressed }) => (isPressed ? "scale(1.1)" : "scale(1)")};
`;
