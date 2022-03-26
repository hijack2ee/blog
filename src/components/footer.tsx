import React, {FC} from 'react';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

const FooterContainer = styled.div`
  ${tw`border h-10`}
`;

const Footer: FC = () => <FooterContainer>footer</FooterContainer>;

export default Footer;
