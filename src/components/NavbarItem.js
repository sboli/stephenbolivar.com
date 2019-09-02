import React from 'react';
import styled from 'styled-components';

const Root = styled.h5``;

export default function NavbarItem({ children }) {
    return <Root>{children}</Root>;
}
