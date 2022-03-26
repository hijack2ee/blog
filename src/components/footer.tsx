import React, {FC} from 'react';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

import {vertical_mid} from '@styles/align';

const FooterContainer = styled.div`
  ${tw`border`}
  ${tw`position[absolute] left-0 bottom-0`}
  ${tw`w-full h-10`}
  ${vertical_mid}
`;

const Footer: FC = () => <FooterContainer>footer</FooterContainer>;

export default Footer;
