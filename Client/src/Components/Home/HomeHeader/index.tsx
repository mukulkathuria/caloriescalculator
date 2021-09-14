import React, { memo, lazy, Suspense, useState } from 'react';
import { Header, DivContainer, Logo, Userinfo, Icons } from '../Style';
import { Link } from 'react-router-dom';
import Loader from '../../Loader';

const { default: Avatar } = require('../../../Assets/images/avatar.png');
const UserDetails = lazy(() => import('../UserDetails'));

const { default: logoImg } = require('../../../Assets/images/fitness.png');
const HomeHeader = memo(() => {
  const [showAcc, hideAcc] = useState(() => false);

  return (
    <Header>
      <DivContainer>
        <Logo>
          <Link to="/">
            <img src={logoImg} alt="logo" />
          </Link>
        </Logo>
        <Icons>
          <Userinfo onClick={() => hideAcc(!showAcc)}>
            <img src={Avatar} alt="avatar" />
            <Suspense fallback={<Loader />}>
              {showAcc && <UserDetails />}
            </Suspense>
          </Userinfo>
        </Icons>
      </DivContainer>
    </Header>
  );
});

export default HomeHeader;
