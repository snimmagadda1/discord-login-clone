import styled from "styled-components";

const GamerInput = styled.div`
  flex: 1 0 120px;
  margin-bottom: 15px;
  input {
    border-radius: 3px;
    width: 100%;
    height: 40px;
    background-color: #303338;
    border: 1px solid black;
    color: #dcddde;
  }

  input:focus {
    outline: 1px solid ${(props) => props.theme.colors.blue};
    border-radius: 3px;
  }

  label {
    outline: none;
    display: inline-block;
    color: rgb(185, 187, 190);
    font-size: 11px;
    font-weight: 700;
  }

  @media (max-width: 830px) {
    min-wdith: 412px;
  }
`;

export default GamerInput;
