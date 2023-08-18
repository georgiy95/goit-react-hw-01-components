import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #303030;
  border-radius: 4px;
  width: 400px;
  margin: 0 auto;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  width: 400px;
`;
const getLabelColor = props => {
  switch (props.label) {
    case '.docx':
      return getRandomHexColor();
    case '.pdf':
      return '#f8f3a7';
    case '.mp3':
      return getRandomHexColor();
    case '.psd':
      return getRandomHexColor();
    default:
      return 'black';
  }
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${getLabelColor};
  width: 80px;
  border: 1px solid #303030;
  padding: 8px 16px;
`;
export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.36;
  text-transform: uppercase;
  padding: 24px;
`;


