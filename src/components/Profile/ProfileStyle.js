import styled from 'styled-components';


export const MainFormStyled = styled.div`
  margin: 30px;
  form,
  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  label {
    position: relative;
    width: 280px;
    color: rgb(24, 25, 31, 0.54);
    margin-bottom: 35px;
  }
  span {
    position: absolute;
    top: 10px;
    left: 12px;
  }
  span,
  p {
    font-size: 12px;
    line-height: 14px;
  }
  span,
  p,
  input {
    font-weight: 400;
  }
  label:hover,
  label:focus {
    color: rgb(33, 150, 243);
  }
  input {
    background: rgba(0, 0, 0, 0.03);
    padding: 30px 12px 12px;
    color: rgba(24, 25, 31, 0.87);
    font-size: 16px;
    line-height: 19px;
    border: none;
    border-bottom: 1px solid rgba(24, 25, 31, 0.36);
    border-radius: 8px 8px 0px 0px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  .secondColumn label:nth-of-type(1) input,
  .secondColumn label:nth-of-type(2) input {
    padding-top: 44px;
  }
  p {
    height: 30px;
    color: rgba(24, 25, 31, 0.54);
    padding-top: 4px;
  }
  input:hover,
  input:focus {
    border-bottom: 1px solid rgb(33, 150, 243);
  }
`;
