import styled from 'styled-components';

export const Status = styled.span`
  display: flex;
  align-items: center;
  border: 1px solid #303030;
  border-radius: 50%;
  background-color: ${props => (props.status === 'true' ? 'green' : 'red')};
  width: 20px;
  height: 20px;
`;

export const AvatarImg = styled.img`
  width: 48px;
`;

export const NameFriend = styled.p`
  font-weight: 600;
  font-size: 24px;
`;
