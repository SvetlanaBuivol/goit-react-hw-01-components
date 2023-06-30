import styled from '@emotion/styled';

export const FriendCard = styled.li`
 display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  width: 300px;
  background-color: #F8F1E8;
  border-radius: 6px;
  transition: 250ms ease-in;

  :hover {
    border-radius: 30px;
    box-shadow: 0px 0px 41px -7px rgba(0,0,0,0.36);
  }

  span {
    display: block;
    width: 15px;
    height: 15px;
    background-color: green;
    border-radius: 50%;
    margin-left: auto;
  }

   ${({ status }) =>
    status === 'false' &&
    `
    span {
        background-color: red;
        filter: grayscale(0);
    }
  `}

`;

export const FriendPhoto = styled.img`
 width: 70px;
    height: 70px;
    border-radius: 25%;
    margin-right: 10px;
`;

export const FriendName = styled.p`
font-size: 20px;
font-weight: 600;
margin: auto;
`;

