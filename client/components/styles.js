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

export const BodyText = styled.Text`
font-size: 16px; 
`

export const Tekst = styled.TextInput`
  font-size: 18px;
  color: ${brun};
  width: 90%;
  height: 20px;
  background-color: ${offwhite};
`;

export const Button = styled(TouchableOpacity)`
  width: 100px;
  height: 40px;
  border-radius: 24px;
  color: ${offwhite};
  background-color: ${brun};
`;

export const FormArea = styled.View`
  width: 90%;
  height: 300px;
  background-color: ${offwhite};
`;

export const LoginContainer = styled.View`
  width: 250px;
  height: 210px;
  display: flex;
  justify-content: space-between;
`;

export const NameHolder = styled.TextInput`
  width: 100px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 24px;
  padding: 10px;
`;

export const Username = styled.TextInput`
  width: 200px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 24px;
  padding: 10px;
`;

export const Password = styled.TextInput`
  width: 200px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 24px;
  padding: 10px;
`;

export const Checkbox = styled(TouchableOpacity)`
  width: 25px;
  height: 25px;

  border-radius: 5px;
  background-color: lime;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
`;

export const LoginButton = styled(TouchableOpacity)`
  width: 200px;
  height: 40px;
  border-radius: 24px;
  color: ${offwhite};
  background-color: ${brun};
`;

// export const email = styled.Text`
//   width: 150px;
//   height: 150px;
// `;
