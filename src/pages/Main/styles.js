import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  input {
    padding: 10px 15px;
    border-radius: 4px;
    border: 1px solid #999;
    flex: 1;
  }
`;

export const ButtonSubmit = styled.button.attrs({
  type: 'submit',
})`
  padding: 0 15px;
  border: 0;
  color: #fff;
  font-weight: 1.7;
  background: #003386;
  border-radius: 4px;
  margin-left: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Checker = styled.span`
  color: ${({ found }) => (found ? 'green' : 'red')};
  font-size: 13px;
  font-weight: 600;
`;

export const Character = styled.div`
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #d7cece;
  box-shadow: rgb(0, 0, 0, 0.3);
  margin-top: 10px;
  img {
    height: 80px;
    width: 80px;
    border: 2px solid #999;
    border-radius: 2px;
    margin-left: 15px;
  }
  span {
    margin-left: 20px;
    font-size: 20px;
    font-weight: 700;
    color: #777;
  }
`;

export const ListCharacters = styled.ul`
  margin-top: 10px;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
      height: 60px;
      width: 60px;
      border: 2px solid #999;
      border-radius: 2px;
    }

    span {
      font-size: 20px;
      font-weight: 700;
      color: #777;
    }

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #003386;
      text-decoration: none;
    }
  }
`;
