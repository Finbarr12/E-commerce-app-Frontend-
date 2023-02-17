import React from "react";
import styled from "styled-components";
import pic from "./Assets/img.png";
const NewArrival = () => {
  return (
    <Container>
      <h2>New Arrivals. REY backpacks & bags</h2>
      <Holder>
        <Products>
          <Box>
            <img src={pic} alt="" />
          </Box>
          <Chold>
            <Circles></Circles>
            <Circles></Circles>
            <Circles></Circles>
          </Chold>
          <h4>Leather Gloves</h4>
          <p>Perfect mint green</p>
          <RateHold>
            <button>$30.00</button>
            <p>4.1(76 reviews)</p>
          </RateHold>
        </Products>
        <Products>
          <Box>
            <img src={pic} alt="" />
          </Box>
          <Chold>
            <Circles></Circles>
            <Circles></Circles>
            <Circles></Circles>
          </Chold>
          <h4>Leather Gloves</h4>
          <p>Perfect mint green</p>
          <RateHold>
            <button>$30.00</button>
            <p>4.1(76 reviews)</p>
          </RateHold>
        </Products>
        <Products>
          <Box>
            <img src={pic} alt="" />
          </Box>
          <Chold>
            <Circles></Circles>
            <Circles></Circles>
            <Circles></Circles>
          </Chold>
          <h4>Leather Gloves</h4>
          <p>Perfect mint green</p>
          <RateHold>
            <button>$30.00</button>
            <p>4.1(76 reviews)</p>
          </RateHold>
        </Products>
        <Products>
          <Box>
            <img src={pic} alt="" />
          </Box>
          <Chold>
            <Circles></Circles>
            <Circles></Circles>
            <Circles></Circles>
          </Chold>
          <h4>Leather Gloves</h4>
          <p>Perfect mint green</p>
          <RateHold>
            <button>$30.00</button>
            <p>4.1(76 reviews)</p>
          </RateHold>
        </Products>
      </Holder>
    </Container>
  );
};

export default NewArrival;

const RateHold = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    width: 60px;
    height: 30px;
    border: 2px solid lightgreen;
    color: lightgreen;
    background-color: transparent;
    border-radius: 5px;
  }
`;

const Chold = styled.div`
  display: flex;
  margin-top: 15px;
`;
const Circles = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: blue;
  margin-right: 10px;
`;

const Box = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 15px;
  background-color: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 270px;
    /* background-color: #f8fafc; */
  }
`;

const Products = styled.div`
  /* background-color: gold; */

  p {
    margin: 0;
    margin-top: 5px;
  }
  h4 {
    margin: 0;
    margin-top: 15px;
  }
`;

const Holder = styled.div`
  width: 90%;
  height: 400px;
  /* background-color: red; */
  margin-left: 80px;
  margin-top: 30px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, 1fr);
  height: repeat(4, 300px);
`;

const Container = styled.div`
  h2 {
    font-size: 35px;
    margin: 0;
    margin-left: 80px;
    margin-top: 50px;
  }
`;
