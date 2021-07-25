import React from 'react';

import { Container, ExpandIcon, AddCategoryIcon } from './styles';

interface Props {
    name: string;
}

const Category: React.FC<Props> = ({ name }) => {
    return (
        <Container>
            <div>
                <ExpandIcon/>

                <span>{name}</span>
            </div>
            <AddCategoryIcon />
        </Container>
    )
}

export default Category;