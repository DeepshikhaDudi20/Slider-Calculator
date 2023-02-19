import styled from 'styled-components'
import {colors} from '../../styles/color'

export const QuoteFormStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  background-color: ${colors.whiteSmoke};
  gap: 15px;
  padding: 20px;
`;

export const QuoteFormStatFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Value = styled.span`
  font-size: 35px;
  font-weight: lighter;
  color: ${colors.mediumLightGrey};
`;

export const Label = styled.span`
  font-size: 11px;
  font-weight: normal;
  color: ${colors.black};
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 0;
  border-radius: 0 0 3px 3px;
  background-color: ${colors.black};
`;

export const ButtonWrapper = styled.div`
  padding: 25px;
`;

export const Button = styled.button`
  padding: 20px 40px;
  font-size: 18px;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  border: 0;
  background-color: ${colors.pink};
  color: ${colors.white};
`;
