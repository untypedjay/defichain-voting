import styled from "styled-components";

interface Props {
    children: any;
}

const StyledCardContainer = styled.main`
    display: grid;
    margin: 1.5em auto;
    padding: 1.5em;
    max-width: 1200px;
    grid-gap: 1em;

    @media (min-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export default function CardContainer({children}: Props) {
    return (
        <StyledCardContainer>
            {children}
        </StyledCardContainer>
    )
}