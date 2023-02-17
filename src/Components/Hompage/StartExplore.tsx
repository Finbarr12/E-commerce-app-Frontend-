import React from "react";
import styled from "styled-components";
import pic from "../Assets/img.png";

const StartExplore = () => {
  return (
    <Container>
      <h1>Start Exploring</h1>
      <BoxHold>
        <Box>
          <Holder>
            <Circle>
              <img src={pic} alt="" />
            </Circle>
            <span>224 products</span>
          </Holder>
          <p>Manufacturer</p>
          <h2>Backpack</h2>
          <pre>See collection</pre>
        </Box>
        <Box>
          <Holder>
            <Circle>
              <img src={pic} alt="" />
            </Circle>
            <span>224 products</span>
          </Holder>
          <p>Manufacturer</p>
          <h2>Backpack</h2>
          <pre>See collection</pre>
        </Box>
        <Box>
          <Holder>
            <Circle>
              <img src={pic} alt="" />
            </Circle>
            <span>224 products</span>
          </Holder>
          <p>Manufacturer</p>
          <h2>Backpack</h2>
          <pre>See collection</pre>
        </Box>
        <Box>
          <Holder>
            <Circle>
              <img src={pic} alt="" />
            </Circle>
            <span>224 products</span>
          </Holder>
          <p>Manufacturer</p>
          <h2>Backpack</h2>
          <pre>See collection</pre>
        </Box>
        <Box>
          <Holder>
            <Circle>
              <img src={pic} alt="" />
            </Circle>
            <span>224 products</span>
          </Holder>
          <p>Manufacturer</p>
          <h2>Backpack</h2>
          <pre>See collection</pre>
        </Box>
        <Box>
          <Holder>
            <Circle>
              <img src={pic} alt="" />
            </Circle>
            <span>224 products</span>
          </Holder>
          <p>Manufacturer</p>
          <h2>Backpack</h2>
          <pre>See collection</pre>
        </Box>
      </BoxHold>
    </Container>
  );
};

export default StartExplore;

const Holder = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 30px;

  span {
    font-size: 12px;
    margin-right: 30px;
  }
`;
const Circle = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f8fafc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;

const Box = styled.div`
  background-color: white;
  border-radius: 15px;

  pre {
    /* margin-left: 30px; */
    font-size: 20px;
    margin: 0;
    margin-left: 30px;
    margin-top: 40px;
  }

  p {
    margin-left: 30px;
    margin-top: 60px;
    margin-bottom: 10px;
  }
  h2 {
    margin: 0;
    margin-left: 30px;
    font-weight: 600;
    font-size: 27px;
  }
`;

const BoxHold = styled.div`
  width: 90%;
  height: 650px;
  /* background-color: red; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 325px);
  gap: 30px;
  margin-top: 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 850px;
  background-color: #f8fafc;
  display: flex;
  align-items: center;
  margin-top: 120px;
  flex-direction: column;
  border-radius: 55px;
`;
