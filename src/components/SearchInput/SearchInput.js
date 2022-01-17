import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';
import Icon from '../Icon';

const SearchInput = ({ label }) => {
    return (
        <Label>
            <VisuallyHidden>{label}</VisuallyHidden>
            <SearchIcon id="search" strokeWidth={1} size={16} />
            <Input placeholder="Search…" />
        </Label>
    );
};

const Label = styled.label`
    position: relative;
`;

const Input = styled.input`
    border: none;
    background: transparent;
    border-bottom: 1px solid ${COLORS.gray[300]};
    padding-left: 24px;
    font-size: 0.875rem;
    color: ${COLORS.gray[100]};
    outline-offset: 4px;

    &::placeholder {
        color: ${COLORS.gray[500]};
    }
`;

const SearchIcon = styled(Icon)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 18px;
    height: 18px;
`;

export default SearchInput;
