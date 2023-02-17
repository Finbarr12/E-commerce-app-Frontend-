import React from "react";
import styled from "styled-components";
import pix from "../Assets/special.png";
import logo from "../Assets/remove.png";

const Special = () => {
  return (
    <Container>
      <Wrapper>
        <img src={pix} alt="" />

        <Right>
          <img src={logo} />
          <h2>
            Logo Special offer <br /> in kids products
          </h2>
          <p>
            Fashion is a form of self-expression and autonomy at a particular
            period and place.
          </p>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Special;

const Right = styled.div`
  img {
    height: 40px;
  }
  p {
    margin: 0;
  }
  h2 {
    margin: 0;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  /* width: 50%;
  height: 500px; */
  position: absolute;
  top: 1%;
  /* background-color: red; */
`;

const Wrapper = styled.div`
  width: 90%;
  height: 500px;
  border-radius: 35px;
  background-color: #fefce8;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 60%;
    height: 100%;
    object-fit: cover;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
