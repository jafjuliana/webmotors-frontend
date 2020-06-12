import React, { useState } from "react";

import PropTypes from "prop-types";

import { Box, ListType, Header, Content } from "./styles";

import { IoIosCar } from "react-icons/io";
import { MdMotorcycle, MdChevronRight } from "react-icons/md";

import Vehicles from "../../services/Vehicles";

function BoxSearch({ makes }) {
  const [activeTab, setActiveTab] = useState("0");
  const [listModels, setListModels] = useState([]);
  const [listVersions, setListVersions] = useState([]);

  const isActive = (id) => activeTab.includes(id);

  async function handleMakes(e) {
    if (e.target.value !== "Todos") {
      const resp = await Vehicles.getModels(e.target.value);

      if (resp.status === 200) {
        setListModels(resp.data);
      }
    } else {
      setListModels([]);
    }
  }

  async function handleModel(e) {
    if (e.target.value !== "Todos") {
      const resp = await Vehicles.getVersions(e.target.value);

      if (resp.status === 200) {
        setListVersions(resp.data);
      }
    } else {
      setListVersions([]);
    }
  }

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

          <div className="line">
            <label htmlFor="makes">Marca:</label>
            <select name="makes" id="makes" onChange={handleMakes}>
              <option>Todos</option>
              {makes.map((make) => (
                <option key={make.ID} value={make.ID}>
                  {make.Name}
                </option>
              ))}
            </select>

            <label htmlFor="models">Modelos:</label>
            <select
              name="models"
              id="models"
              onChange={handleModel}
              disabled={listModels.length === 0}
            >
              <option>Todos</option>
              {listModels.length > 0 &&
                listModels.map((model) => (
                  <option key={model.ID} value={model.ID}>
                    {model.Name}
                  </option>
                ))}
            </select>

            <label htmlFor="versions">Versões:</label>
            <select
              name="versions"
              id="versions"
              disabled={listVersions.length === 0}
            >
              <option>Todos</option>
              {listVersions.length > 0 &&
                listVersions.map((version) => (
                  <option key={version.ID} value={version.ID}>
                    {version.Name}
                  </option>
                ))}
            </select>
          </div>

          <div className="line">
            <div className="column">
              <button type="button" className="search">
                <MdChevronRight />
                Busca Avançada
              </button>
            </div>
            <div className="column">
              <button type="button" className="clear">
                Limpar filtros
              </button>

              <button type="button" className="filter">
                Ver ofertas
              </button>
            </div>
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
