import React from "react";
import styled from "styled-components";
import heropix from "../Assets/Hero.png";
import { FiSearch } from "react-icons/fi";
const Hero = () => {
  return (
    <Container>
      <Left>
        <p>In this season, find the best 🔥</p>
        <h2>
          Exclusive collection for <br /> everyone
        </h2>
        <Button>
          Explore now{" "}
          <FiSearch
            style={{
              fontSize: "20px",
              marginLeft: "7px",
            }}
          />
        </Button>
      </Left>
      <Right>
        <img src={heropix} alt="" />
      </Right>
    </Container>
  );
};

export default Hero;

const Button = styled.button`
  width: 180px;
  height: 55px;
  background-color: #0f172a;
  margin-top: 40px;
  border-radius: 30px;
  border: 0;
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #e3ffe6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  p {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
  }
  h2 {
    margin: 0;
    font-size: 50px;
    margin-top: 20px;
  }
`;
const Right = styled.div`
  img {
    height: 580px;
  }
`;
