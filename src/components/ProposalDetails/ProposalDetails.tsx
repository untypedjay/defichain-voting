import { useParams } from 'react-router';
import styled from 'styled-components';
import { FaBell, FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NotFound } from '../NotFound';
import { Loader } from '../Loader';
import { formatTitle } from '../../utils/common';
import useProposals from '../../hooks/useProposals';

const StyledProposalDetails = styled.div`
    background-color: var(--clr-white);
    margin: 1.5em;
    border-radius: var(--br-card);
    padding: 1.5em;
`;

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledHeading = styled.h1`
    margin: 0;
`;

export default function ProposalDetails() {
    const [proposals, isLoading] = useProposals();
    const [proposal, setProposal] = useState<any>();
    const { proposalId } = useParams();

    if (isLoading) {
        return <Loader />;
    }

    if (!proposalId || !proposal) {
        return <NotFound />;
    }

    return (
        <StyledProposalDetails>
            <StyledHeader>
                <Link to="/"><FaChevronLeft /></Link>
                <StyledHeading>{proposal.type.toUpperCase()} { proposalId }</StyledHeading>
                <FaBell />
            </StyledHeader>
            <main>
                <p>{formatTitle(proposal.title)}</p>
                <p>Avatar</p>
                <p>Username</p>
            </main>
        </StyledProposalDetails>
    );
}