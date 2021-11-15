import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .dropdown-e {
    display: none;
  }

  :hover {
    .dropdown-e {
      display: inline-block;
    }
  }
`;

export const NavigationBar = styled.div`
  display: flex;
  padding: 0 6rem;
  width: 100%;
  color: white;
  max-width: 95rem;

  @media (max-width: 1024px) {
    padding: 0;
  }
`;

export const TabNavigator = styled.div`
  display: flex;
  align-items: center;

  .h {
    .d-menu {
      display: none;
    }

    :hover {
      .d-menu {
        display: flex;
      }
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

interface TabItemProps {
  color: string;
}

export const TabItem = styled.a<TabItemProps>`
  text-decoration: none;
  padding: 0px 15px;
  font-weight: 600;
  transition: 200ms ease-in-out;
  color: ${(props) => props.color};

  :hover {
    color: #fff;
  }
`;

export const AuthButton = styled.div`
  .auth-button {
    display: inline-block;
    width: 100px;
    height: 38px;
    color: #fff;
    background: linear-gradient(127.06deg, #f40076 21.53%, #b36dfa 67.6%);
    font-size: 15px;
    font-weight: bold;
    border: none;
    border-radius: 25px;
    transition: 200ms ease-in-out;
    /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.75); */

    :hover {
      opacity: 0.6;
      cursor: pointer;
      box-shadow: rgb(80 63 205 / 50%) 0px 1px 40px;
      transition: all 0.1s ease 0s;
    }
  }

  .hamburger {
    display: none;
  }

  @media (max-width: 1024px) {
    .auth-button {
      display: none;
    }

    .hamburger {
      display: inline-block;
    }
  }
`;

//actual info
export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 4.75rem;

  @media only screen and (max-width: 1440px) {
    margin-top: 0rem;
  }
`;

export const ImageContainer = styled.div`
  height: inherit;
  width: 30%;
  transform: translateX(-50%);

  /* @media only screen and (max-width: 1440px) {
        transform: translateX(-75%);
    } */
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-left: 5rem;
`;

export const WelcomeHeader = styled.h1<{ marginBottom?: string }>`
  font-size: 92px;
  color: #fff;
  margin: 0px;
  font-weight: 700;
  letter-spacing: -0.35rem;
  margin-bottom: ${(props) => props.marginBottom};
`;

export const SubHeaderWrapper = styled.div`
  margin-top: 1rem;
`;

export const MoreInfo = styled.p`
  font-size: 1.2rem;
  font-weight: 450;
  color: #fff;
  margin: 0;
`;

export const ActionContainer = styled.div`
  margin-top: 30px;
`;

export const JoinButton = styled.button`
  border: none;
  border-radius: 25px;
  color: #fff;
  background-color: #3a61ff;
  font-size: 15px;
  padding: 9px 18px;
  margin-right: 15px;
  font-weight: 600;
`;

export const ScheduleButton = styled.a`
  color: rgba(255, 255, 255, 0.75);
  font-weight: 600;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const MobileNavStyle = styled.div<{ isOpen: boolean }>`
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 250px;
  background: rgba(0, 0, 0, 0.9);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  ${(props) =>
    props.isOpen &&
    css`
      display: flex;
    `}

  @media(min-width: 1024px) {
    display: none;
  }
`;

export const MobileLink = styled.a`
  margin: 0.5rem 0;
  color: white;
  text-decoration: none;
  font-size: 0.875rem;
  color: #546884;
  font-weight: bold;

  :hover {
    opacity: 0.6;
  }
`;
