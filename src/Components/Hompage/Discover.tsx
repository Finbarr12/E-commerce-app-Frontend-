import React from "react";
import styled from "styled-components";
import pic from "../Assets/img.png";

const Discover = () => {
  return (
    <Container>
      <h2>Discover more. Good things are waiting for you</h2>
      <Holder>
        <Card>
          <Left>
            <p>Explore new arrivals</p>
            <h3>Shop the latest from top brands</h3>
            <button>Show me all</button>
          </Left>

          <img src={pic} alt="" />
        </Card>
        <Card>
          <Left>
            <p>Explore new arrivals</p>
            <h3>Shop the latest from top brands</h3>
            <button>Show me all</button>
          </Left>

          <img src={pic} alt="" />
        </Card>
        <Card>
          <Left>
            <p>Explore new arrivals</p>
            <h3>Shop the latest from top brands</h3>
            <button>Show me all</button>
          </Left>

          <img src={pic} alt="" />
        </Card>
      </Holder>
    </Container>
  );
};

export default Discover;

const Left = styled.div`
  margin-left: 20px;
  p {
    margin: 0%;
    margin-top: 30px;
  }
  h3 {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    margin-top: 6px;
  }

  button {
    width: 100px;
    height: 39px;
    border: none;
    border-radius: 30px;
    margin-top: 30px;
    font-size: 14px;
    background-color: white;
  }
`;
const Right = styled.div`
  width: 90%;
  height: 100%;
  margin-bottom: 70px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  h2 {
    font-size: 35px;
    margin: 0;
    margin-left: 80px;
    margin-top: 50px;
  }
`;
const Holder = styled.div`
  display: flex;
  overflow: hidden;
  /* overflow-x: scroll; */
  margin-bottom: 16px;
  /* scroll-behavior: smooth; */
  margin-left: 80px;
  margin-top: 50px;
`;
const Card = styled.div`
  width: 430px;
  height: 220px;
  background-color: #fefce8;
  /* background-color: gold; */
  border-radius: 15px;
  /* align-items: center; */
  justify-content: space-between;
  display: flex;
  margin-right: 40px;

  img {
    /* width: 600px; */
    height: 160px;
    object-fit: cover;
    /* background-color: red; */
  }
`;
