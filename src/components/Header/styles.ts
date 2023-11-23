import styled from 'styled-components/native';

interface ThemeProps {
  theme: 'light' | 'dark';
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 32px 28px;
`;

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const UserImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const UserName = styled.Text<ThemeProps>`
  font-size: 16px;
  font-weight: 800;
  color: ${({theme}) => (theme !== 'dark' ? '#06070D' : '#FFF')};
`;

export const IconSlider = styled.Image<ThemeProps>`
  width: 20px;
  height: 16px;
  color: ${({theme}) => (theme !== 'dark' ? '#06070D' : '#FFF')};
`;
