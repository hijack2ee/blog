import React, {FC} from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled/macro';

import {horizontal_mid, vertical_mid} from '@styles/align';

const HeaderContainer = styled.div`
  ${tw`border h-10`}
  ${horizontal_mid}
`;

const HeaderUtils = styled.div`
  ${tw`max-w-4xl h-full`}
  ${vertical_mid}
`;

const Header: FC = () => (
  <HeaderContainer>
    <HeaderUtils>
      <div>header</div>
    </HeaderUtils>
  </HeaderContainer>
);

export default Header;
