import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border-top: 1px solid #303030;
  border-left: 1px solid #303030;
  border-right: 1px solid #303030;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const UserName = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.36;
  text-transform: uppercase;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.36;
`;

export const Avatar = styled.img`
  margin: 20px auto;
  width: 250px;
  border-radius: 50%;
  border: 1px solid #303030;
  padding: 8px;
`;
