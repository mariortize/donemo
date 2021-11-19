import React from 'react';
import { NavigationBar, TabNavigator, TabItem, AuthButton } from './styles';
import Link from 'next/link';
import Spacer from '../Spacer';

const Nav = () => {
  return (
    <>
      <NavigationBar id='navbar'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <a href='/'>
            <img src='/logo.png' height='40' />
          </a>
        </div>
        <Spacer />
        <TabNavigator>
          <Link href='/'>
            <TabItem href='/' color='rgba(0,0,0,0.6)'>
              Home
            </TabItem>
          </Link>

          <Link href='/gallery'>
            <TabItem href='/' color='rgba(0,0,0,0.6)'>
              Gallery
            </TabItem>
          </Link>

          {/* <Link href='/support'>
            <TabItem href='/' color='rgba(0,0,0,0.6)'>
              Stages Map
            </TabItem>
          </Link> */}
          {/* <TabItem href="/team" color="#546884">
                    Team
                </TabItem> */}
          <Link href='/chat'>
            <TabItem href='/' color='rgba(0,0,0,0.6)'>
              Q&A/Chat
            </TabItem>
          </Link>
          {/* <Link href='/soon'>
            <TabItem href='/' color='rgba(0,0,0,0.6)'>
              Learn more
            </TabItem>
          </Link> */}
        </TabNavigator>
        <Spacer />
        {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AuthButton className='auth-button'>
          <a target='_blank' href='https://web.zyndicate.app'>
            <button className='auth-button'>
              Log In &#8201; &#8201;
              <ArrowIcon />
            </button>
          </a>
          <div onClick={() => setIsOpen(!isOpen)}>
            <HamburgerIcon />
          </div>
        </AuthButton>
      </div> */}
      </NavigationBar>
    </>
  );
};

export default Nav;
