import React from "react";
import styled from "styled-components";
import pix from "./Assets/finbarr.png";
import { FiSearch } from "react-icons/fi";
import { BsPerson, BsCartCheck } from "react-icons/bs";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <img src={pix} />
        <Holder>
          <Navs>Home</Navs>
          <Navs>Products</Navs>
          <Navs>About</Navs>
          <Navs>Services</Navs>
        </Holder>
        <Icons>
          <FiSearch style={{ fontSize: "25px", marginRight: "20px" }} />
          <BsPerson style={{ fontSize: "25px", marginRight: "20px" }} />
          <BsCartCheck style={{ fontSize: "25px", marginRight: "20px" }} />
        </Icons>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Icons = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 85%;
  height: 80px;
  /* background-color: gray; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 80px;
  }
`;

const Holder = styled.div`
  display: flex;
`;
const Navs = styled.div`
  margin: 15px;
`;
