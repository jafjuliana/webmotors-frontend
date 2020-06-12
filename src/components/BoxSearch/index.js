import React, { useState } from "react";

import PropTypes from "prop-types";

import { Box, ListType, Header, Content } from "./styles";

import { IoIosCar } from "react-icons/io";
import { MdMotorcycle, MdChevronRight } from "react-icons/md";

function BoxSearch({ makes }) {
  const [activeTab, setActiveTab] = useState("0");

  const isActive = (id) => activeTab.includes(id);

  return (
    <Box>
      <div className="container">
        <Header>
          <button type="button" className="isMobile">
            Vender meu carro
          </button>

          <ListType>
            <li
              className={`${isActive("0") ? "active" : ""}`}
              onClick={() => setActiveTab("0")}
            >
              <div className="icon">
                <IoIosCar />
              </div>
              <div>
                <p>comprar</p>
                <span>carros</span>
              </div>
            </li>
            <li
              className={`${isActive("1") ? "active" : ""}`}
              onClick={() => setActiveTab("1")}
            >
              <div className="icon">
                <MdMotorcycle />
              </div>
              <div>
                <p>comprar</p>
                <span>motos</span>
              </div>
            </li>
          </ListType>
          <button type="button" className="isDesktop">
            Vender meu carro
          </button>
        </Header>

        <Content>
          <div className="line">
            <label className="contChecbox">
              Novos
              <input type="checkbox" value="0" />
              <span className="checkView"></span>
            </label>

            <label className="contChecbox">
              Usados
              <input type="checkbox" value="1" />
              <span className="checkView"></span>
            </label>
          </div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line">
            <div className="column column1">
              <p>
                <MdChevronRight />
                Busca Avançada
              </p>
            </div>
            <div className="column column2"></div>
          </div>
        </Content>
      </div>
    </Box>
  );
}

export default BoxSearch;

BoxSearch.propTypes = {
  makes: PropTypes.array.isRequired,
};
