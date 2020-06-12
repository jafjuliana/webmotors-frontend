import React, { useEffect, useState, useCallback } from "react";

import logo from "./assets/images/logo-webmotors.svg";

import BoxSearch from "./components/BoxSearch";
import Loading from "./components/Loading";

import Vehicles from "./services/Vehicles";

import { Container, Header } from "./styles";

function App() {
  const [loading, setLoading] = useState(true);
  const [listMakes, setListMakes] = useState([]);

  const fetchData = useCallback(async () => {
    const resp = await Vehicles.getMakes();

    if (resp.status === 200) {
      setListMakes(resp.data);
    }

    setLoading(false);
  }, [setListMakes]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <Header>
        <div className="container">
          <img src={logo} alt="logo" />
        </div>
      </Header>

      {loading ? <Loading /> : <BoxSearch makes={listMakes} />}
    </Container>
  );
}

export default App;
