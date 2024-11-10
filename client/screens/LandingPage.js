// import styled from 'styled-components/native';

import {
  Wrapper,
  Container,
  PageLogo,
  Title,
  SubTitle,
} from "../components/styles";

export default function LandingPage() {
  return (
    <>
      <Wrapper>
        <Container>
          <PageLogo />
          <Title>Clarity</Title>

          <SubTitle>Login</SubTitle>
        </Container>
      </Wrapper>
    </>
  );
}
