import styled from "@emotion/styled";

export const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const Section = styled.section`
  margin-top: 20px;
  width: 700px;
  margin-bottom: 80px;
  cursor: default;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-transform: uppercase;
  text-align: center;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  border-radius: 8px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 130px;
  background-color: ${({ color }) => color};
  padding: 20px 10px;
  color: #fff;
  
  span {
      -webkit-text-stroke: 0.5px black;
      font-size: 24px;
      font-weight: 700;
  }

  }
`;