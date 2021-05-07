import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import logo from '../logo.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 400px;
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
`;

const Body = styled.div`
  height: 70%;
`;

const Logo = styled.img`
  display: inline-block;
  vertical-align: center;
  width: 309px;
  height: 43px;
  margin-top: 1.7rem;
  margin-left: 2rem;
`;

const Footer = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  background-color: #dedede;

`;

const ItemWrapper = styled.div`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const Button = styled.button`
  background-color: #ACACAC;
  font-size: 17px;
  padding: 12px;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 25px;
  border: none;
  border-radius: 18px;
  box-shadow: 0 6px 5px rgba(0, 0, 0, 0.16);
`;

const InputBox = styled.div`
  margin: 15px;
  &:hover{
    color: #ff9e1b;
  }
`;


function Login() {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');

  const idOnChange = (e) => {
    setUserid(e.target.value);
  }

  const passOnChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <Container>
      <Header>
        <Logo src={logo} alt='logo' />
      </Header>
      <Body>
        <ItemWrapper>
        <p style={{fontFamily: 'nexon-bold', fontSize: '30px', marginTop: '0px', marginBottom: '10px'}}>계정이 있으신가요?</p>
        <p style={{fontFamily: 'nexon-light', marginTop: '0px', marginBottom: '28px'}}>본인 계정으로 로그인해주세요</p>
        <form>
          <InputBox>
            <label style={{marginRight: '5px'}}>ID </label>
            <input style={{borderRadius: '5px'}} type="text" placeholder="아이디를 입력해주세요" value={userid} onChange={idOnChange} />
          </InputBox>
          <InputBox>
            <label style={{marginRight: '5px'}}>PW </label>
            <input style={{borderRadius: '5px'}} type="password" placeholder="비밀번호를 입력해주세요" value={password} onChange={passOnChange} />
          </InputBox>
            <br />
            <Button>
                입장하기
            </Button>
        </form>
        </ItemWrapper>
      </Body>
      <Footer></Footer>
    </Container>
  );
}

export default Login;