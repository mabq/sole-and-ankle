import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => (
    <Wrapper>
        {SHOES.map((shoe) => (
            <ShoeWrapper key={shoe.slug}>
                <ShoeCard {...shoe} />
            </ShoeWrapper>
        ))}
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    gap: 62px 36px;
    flex-wrap: wrap;
`;

const ShoeWrapper = styled.div`
    flex: 1;
    min-width: 275px;
`;

export default ShoeGrid;
