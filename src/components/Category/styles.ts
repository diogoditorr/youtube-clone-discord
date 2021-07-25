import styled from 'styled-components';
import { Add, ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 20px;
    margin-bottom: 6px;

    cursor: pointer;

    > div {
        display: flex;
        align-items: center;

        position: relative;
        left: calc(-14px + 3px);
    }

    > div span {
        margin-left: 3px;

        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        color: var(--gray);
    }

    div span, div svg {
        transition: color .2s;
    }

    &:hover {
        div span, div svg { 
            color: var(--white);
        }
    }
`;

export const ExpandIcon = styled(ExpandMore)`
    height: 14px;
    width: 14px;

    color: var(--gray);
`;

export const AddCategoryIcon = styled(Add)`
    width: 21px;
    height: 21px;

    color: var(--gray);
    cursor: pointer;

    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;