import styled from 'styled-components';

const NavRow = styled.div`
    margin-right: 0;
    margin-left: 0;
    > .col,
    > [class*='col-'] {
        padding-right: 0;
        padding-left: 0;
    }
`;

export {
    NavRow,
};