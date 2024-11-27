import styled from "styled-components/native";

export const Colors = {
  turkis: "#83c1c2",
  darkblue: "#257586",
  offwhite: "#eaebe6",
  black: "#000",
};

const { darkblue, offwhite, black } = Colors;

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

export const BodyText = styled.Text`
  font-size: 16px;
  fontfamily: "Roboto-Regular";
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
