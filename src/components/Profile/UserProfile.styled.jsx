import styled from "@emotion/styled";

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding-top: 20px;
  margin-bottom: 80px;
  background-color: #FAF9FB;
  border-radius: 8px;
  width: 350px;
  cursor: default;

  transform: scale(1);
  transition: transform 250ms ease-in,
  box-shadow 250ms ease-in;
  ;

  :hover {
    box-shadow: 12px 12px 35px 0px rgba(0,0,0,0.36);
    transform: scale(1.05);
  }
`;

export const Description = styled.div`
  margin-bottom: 20px;

  svg {
    margin-right: 8px;
    color: black;
  }
  
`;

export const Photo = styled.img`
width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 16px;
  background-color: #F6F2F8;
  outline: 1px solid #D8D0DC;
`;

export const UserName = styled.p`
display: flex;
align-items: center;
   font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const UserTag = styled.p`
display: flex;
align-items: center;
    font-size: 16px;
    color: #555555;
    margin-bottom: 8px;
`;

export const UserLocation = styled.p`
display: flex;
align-items: center;
    font-size: 16px;
    color: #555555;
`;

export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  width: 100%;

  li {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 0;
    width: calc(100% / 3);
    background-color: #F6F2F8;
    outline: 1px solid #D8D0DC;
  }

  svg {
    margin-bottom: 6px;
    width: 20px;
    height: 20px;
  }

  span {
    font-weight: bold;
  }
`;


