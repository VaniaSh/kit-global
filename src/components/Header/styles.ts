import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 70px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  margin-bottom: 100px;
`;
export const Logo = styled.div`
  height: 100%;
  width: 70px;
  padding: 25px;
`;
export const Options = styled.div`
  font-size: 20px;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const Option = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #282c34;
  text-decoration: none;
`;
