import styled from 'styled-components';

export const Topic = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.36;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  gap: 12px;
`;
export const FriendListItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 28px;
  padding: 16px 32px;
  align-items: center;
  background-color: #e7e9fc;
  border: 1px solid #e7e9fc;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  width: 100%;
`;
