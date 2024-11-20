import { Wrapper, Container, SubTitle, Box } from "../components/UserPageStyle.js";
import { Text } from "react-native";

export default function UserPage() {
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
