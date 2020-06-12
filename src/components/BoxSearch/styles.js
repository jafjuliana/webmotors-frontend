import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .container {
    max-width: 933px;
    width: 100%;
  }

  .isMobile {
    display: none;
  }

  .isDesktop {
  }

  @media (max-width: 932px) {
    .isMobile {
      display: initial;
      margin-bottom: 20px;
    }

    .isDesktop {
      display: none;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  float: left;

  button {
    float: right;
    box-shadow: none;
    background: #f3f5f8;
    border-radius: 3px;
    border: 2px solid #e09c57;
    color: #e09c57;
    font-weight: 600;
    cursor: pointer;
    padding: 10px 28px;
    font-size: 1rem;
    transition: 0.3s;
    outline: 0;

    &:hover {
      background: #e09c57;
      color: #fff;
    }
  }

  @media (max-width: 932px) {
    text-align: center;

    button {
      float: none;
    }
  }
`;

export const ListType = styled.ul`
  list-style: none;
  padding: 0;
  float: left;
  margin-top: 0;
  margin-bottom: 0;

  li {
    float: left;
    display: flex;
    text-transform: uppercase;
    padding: 0 15px 10px;
    margin-right: 2px;
    cursor: pointer;
    color: #a5a7a6;
    font-size: 0.8rem;
    border-bottom: 3px solid #f3f5f8;
    transition: 0.3s;

    .icon {
      width: 45px;
      font-size: 2rem;
      position: relative;

      svg {
        position: absolute;
        bottom: 0;
      }
    }

    &:hover,
    &.active {
      border-color: #b92630;

      span {
        color: #b92630;
      }

      .icon {
        color: #b92630;
      }
    }

    p {
      margin: 0;
    }

    span {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 932px) {
    width: 100%;

    li {
      margin-right: 0;
      width: calc(50% - 30px);
      text-align: left;
    }
  }
`;

export const Content = styled.div`
  background: #fff;
  width: calc(100% - 100px);
  float: left;
  padding: 25px 50px;
  color: #44474c;
  font-size: 0.9rem;

  @media (max-width: 932px) {
    padding: 25px;
    width: calc(100% - 50px);
  }

  .line {
    width: 100%;
    float: left;
    margin-bottom: 8px;

    .column {
      float: left;
      width: 50%;

      &:last-child {
        text-align: right;
      }
    }

    button,
    select {
      outline: 0;
      cursor: pointer;
    }

    &:last-child {
      margin-top: 25px;
    }

    button {
      border: 0;
      box-shadow: none;
      background: #fff;
    }

    .search {
      margin-top: 11px;

      svg {
        margin-bottom: -2px;
      }

      padding: 0;
      color: #b92630;
      font-weight: bold;
      font-size: 0.9rem;
    }

    .clear {
      font-size: 0.9rem;
      color: #44474c;
    }

    .filter {
      background: #b92631;
      text-align: center;
      font-weight: bold;
      color: #fff;
      text-transform: uppercase;
      border-radius: 2px;
      padding: 10px;
      font-size: 1rem;
      max-width: 240px;
      width: 100%;
      margin-left: 15px;
    }

    .contChecbox {
      display: block;
      position: relative;
      padding-left: 26px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      float: left;

      &:first-child {
        margin-right: 50px;
      }
    }

    .contChecbox input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkView {
      position: absolute;
      top: 0;
      left: 0;
      height: 18px;
      width: 18px;
      border: 1px solid #ccc;
      border-radius: 2px;
    }

    .checkView:after {
      content: "";
      position: absolute;
      display: none;
    }

    .contChecbox input:checked ~ .checkView:after {
      display: block;
    }

    .contChecbox .checkView:after {
      left: 6px;
      top: 2px;
      width: 4px;
      height: 8px;
      border: solid #b92630;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    @media (max-width: 932px) {
      .filter {
        margin-left: 0;
        max-width: 100%;
      }

      .column {
        width: 100%;

        &:last-child {
          margin-top: 25px;
          text-align: center;
        }
      }
    }
  }
`;
