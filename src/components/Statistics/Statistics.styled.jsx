import styled from '@emotion/styled';

export const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

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
  overflow: hidden;
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

  position: relative;
  overflow: hidden;

:after {
  content: "";
  position: absolute;
  top: -110%;
  left: -210%;
  width: 200%;
  height: 200%;
  opacity: 0;
  transform: rotate(30deg);
  
  background: rgba(255, 255, 255, 0.13);
  background: linear-gradient(
    to right, 
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.13) 77%,
    rgba(255, 255, 255, 0.5) 92%,
    rgba(255, 255, 255, 0.0) 100%
  );
}

:hover:after {
  opacity: 1;
  top: -30%;
  left: -30%;
  transition-property: left, top, opacity;
  transition-duration: 0.7s, 0.7s, 0.15s;
  transition-timing-function: ease;
}

:active:after {
  opacity: 0;
}

  span {
    -webkit-text-stroke: 0.5px black;
    font-size: 24px;
    font-weight: 700;
  }
`;
