import React, { useState } from "react";

import PropTypes from "prop-types";

import { Box, ListType, Header } from "./styles";

function BoxSearch({ makes }) {
  const [activeTab, setActiveTab] = useState("0");

  const isActive = (id) => activeTab.includes(id);

  return (
    <Box>
      <div className="container">
        <Header>
          <ListType>
            <li
              className={`${isActive("0") ? "active" : ""}`}
              onClick={() => setActiveTab("0")}
            >
              <p>comprar</p>
              <span>carros</span>
            </li>
            <li
              className={`${isActive("1") ? "active" : ""}`}
              onClick={() => setActiveTab("1")}
            >
              <p>comprar</p>
              <span>motos</span>
            </li>
          </ListType>

          <button type="button">Vender meu carro</button>
        </Header>
      </div>
    </Box>
  );
}

export default BoxSearch;

BoxSearch.propTypes = {
  makes: PropTypes.array.isRequired,
};
