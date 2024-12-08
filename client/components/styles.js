import styled from "styled-components/native";
import { TouchableOpacity, StyleSheet } from "react-native";
import Constants from "expo-constants";
// import { useFonts } from "expo-font";

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

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
`;

export const Title = styled.Text`
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  color: ${darkblue};
  fontfamily: "Roboto-Regular";
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  color: ${darkblue};
  fontfamily: "Roboto-Regular";
`;

export const Box = styled.View`
  width: 90%;
  height: 50px;
  background-color: pink;
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

export const Button = styled(TouchableOpacity)`
  width: 100px;
  height: 40px;
  border-radius: 24px;
  background-color: ${darkblue};
  box-shadow: 3px 3px 10px #1b5a65;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  transition: transform 0.2s ease;
  transform: ${({ isPressed }) => (isPressed ? "scale(1.1)" : "scale(1)")};
`;

export const WhiteButton = styled(TouchableOpacity)`
  width: 100px;
  height: 40px;
  border-radius: 24px;
  background-color: ${offwhite};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease;
  transform: ${({ isPressed }) => (isPressed ? "scale(1.1)" : "scale(1)")};
`;

//LoginPage
export const LoginArea = styled.View`
  width: 260px;
  height: 200px;
  dispaly: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const LoginPassword = styled.TextInput`
  width: 260px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 24px;
  padding: 10px;
  background-color: ${offwhite};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
`;

// Signup Page
export const NameContainer = styled.View`
  width: 260px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FormArea = styled.View`
  width: 260px;
  height: 300px;
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

export const Email = styled.TextInput`
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
  width: 175px;
  height: 40px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Checkbox = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: ${(props) => (props.isChecked ? "black" : "#eaebe6")};
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
  transform: ${({ isPressed }) => (isPressed ? "scale(1.1)" : "scale(1)")};
`;

export const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: offwhite,
    boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
  },
  checkboxSelected: {
    backgroundColor: darkblue,
  },
});
