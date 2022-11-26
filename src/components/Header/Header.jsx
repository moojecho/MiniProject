import styled from "styled-components";

import {logo} from "../../static/index";

import {LoginButton,SignButton} from "./index";

const Header = () => {
  const logout = () => {
    window.localStorage.removeItem("refresh-token");
    window.localStorage.removeItem("authorization");
    navigator("/");
  };

  return (
    <HeaderLayout>
      <LogoLayout>
        <Logo src={logo} />
      </LogoLayout>
      <LoginSignLayout>
        <LoginButton />
        <SignButton />
      </LoginSignLayout>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  width: 99.8vw;
  height: 10vh;
  border: solid 1px;
  display: flex;
  align-items: center;
`

const LogoLayout = styled.div`
  width: 60px;
  height: 60px;
  margin-left: 5vw;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-left: -20px;
  margin-top: -10px;
  background-color: red;
  cursor: pointer;
`;
const LoginSignLayout = styled.div`
  width: 11vw;
  display: inline-flex;
  float: right;
`;
export default Header;
