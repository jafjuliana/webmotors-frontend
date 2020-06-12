import React from "react";
import Loader from "react-spinners/ClipLoader";

import { Container } from "./styles";

export default function Loading() {
  return (
    <Container>
      <Loader color="#04032b" size="3rem" />
    </Container>
  );
}
