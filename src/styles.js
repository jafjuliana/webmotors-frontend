import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  @media (max-width: 932px) {
    padding: 20px;
  }

  .container {
    max-width: 933px;
    width: 100%;
  }
`;
