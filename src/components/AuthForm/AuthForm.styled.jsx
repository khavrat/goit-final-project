import styled from '@emotion/styled';

import { ReactComponent as ErrorIcon } from '../../images/registrationPage/icons/error.svg';
import { ReactComponent as CorrectIcon } from '../../images/registrationPage/icons/correct.svg';
import { ReactComponent as WarnIcon } from '../../images/registrationPage/icons/warn.svg';

export const Form = styled.form`
  font-family: Poppins;
  display: flex;
  flex-direction: column;

  width: 335px;
  padding: 15px 15px 30px 15px;

  position: absolute;
  top: 250px;
  left: 50%;
  transform: translate(-50%, 0);

  border-radius: 30px;
  color: var(--white-color);
  background-color: var(--background-authForm-color);

  @media (min-width: 768px) {
    top: 360px;
  }
  @media (min-width: 1280px) {
    top: 15%;
    left: 75%;

    width: 500px;
    padding: 15px 15px 50px 15px;
  }

  @media (min-width: 1640px) {
    top: 30%;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--white-color);
  margin-top: 10px;
  margin-bottom: 35px;

  @media (min-width: 1280px) {
    font-size: 28px;
    font-weight: 600;

    margin-top: 20px;
    margin-bottom: 55px;
    margin-left: 25px;
  }
`;

export const LabelGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: -34px;
  margin-left: 20px;
  z-index: 2;

  @media (min-width: 1280px) {
    margin-bottom: -42px;
    margin-left: 40px;
  }
`;

export const LabelIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: #2a2c36;
  stroke: var(--white-color);
  opacity: 0.8;

  stroke: ${props => {
    switch (props.ValidationState) {
      case 'correct':
        return '#3CBC81';
      case 'warn':
        return '#F6C23E';
      case 'error':
        return '#E74A3B';
      default:
        return '#fafafa';
    }
  }};

  @media (min-width: 1280px) {
    width: 24px;
    height: 24px;
  }
`;

export const ErrorIconStyled = styled(ErrorIcon)`
  position: absolute;
  right: 20px;
  top: 14px;

  @media (min-width: 1280px) {
    right: 55px;
    top: 20px;
  }
`;

export const CorrectIconIconStyled = styled(CorrectIcon)`
  position: absolute;
  right: 20px;
  top: 14px;

  @media (min-width: 1280px) {
    right: 55px;
    top: 20px;
  }
`;

export const WarnIconIconStyled = styled(WarnIcon)`
  position: absolute;
  right: 20px;
  top: 14px;

  @media (min-width: 1280px) {
    right: 55px;
    top: 20px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  position: relative;
`;

export const Input = styled.input`
  width: 279px;
  height: 45px;
  border: 1px solid;
  background-color: #2a2c36;
  padding-left: 40px;
  margin: 0 auto;
  margin-bottom: 3px;

  font-family: inherit;
  font-size: 16px;
  color: #ffffff;
  opacity: 0.9;
  border-radius: 6px;

  &::placeholder {
    font-size: 14px;
    opacity: 0.8;
  }

  &:focus,
  :hover {
    border-color: var(--white-color);
    outline: 0;
    opacity: 1;
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 59px;

    &::placeholder {
      font-size: 18px;
    }
  }

  border-color: ${props => {
    switch (props.ValidationState) {
      case 'correct':
        return '#3CBC81';
      case 'warn':
        return '#F6C23E';
      case 'error':
        return '#E74A3B';
      default:
        return 'gray';
    }
  }};
`;

export const ErrMessage = styled.span`
  color: #e74a3b;
  margin-left: 7px;
  font-size: 14px;

  @media (min-width: 1280px) {
    margin-left: 28px;
  }
`;

export const WarnMessage = styled.span`
  color: #f6c23e;
  margin-left: 7px;
  font-size: 14px;

  @media (min-width: 1280px) {
    margin-left: 28px;
  }
`;

export const BtnSubmit = styled.button`
  height: 45px;
  background-color: #8baa36;
  border: 1px solid gray;
  border-radius: 6px;
  width: 279px;
  height: 45px;
  margin: 0 auto;
  color: var(--white-color);
  cursor: pointer;

  font-family: inherit;
  font-size: 16px;

  @media (min-width: 1280px) {
	width: 400px;
    height: 59px;
    font-size: 18px;
  }

  &:focus,
  :hover {
    color: var(--background-color-circle);
  }
`;
