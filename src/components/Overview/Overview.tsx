import { useParams } from "react-router";
import styled from "styled-components";
import useProposals from "../../hooks/useProposals";
import { Proposal } from "../../types";
import { CardContainer } from "../CardContainer";
import { Loader } from "../Loader";
import { NotFound } from "../NotFound";
import { ProposalCard } from "../ProposalCard";

const StyledTitle = styled.h1`
  text-align: center;
`;

export default function Overview() {
    const { votingRound } = useParams();
    const [proposals, isLoading] = useProposals(votingRound || '2111'); // TODO: get latest voting round dynamically

    const getTitle = () => {
        if (votingRound) {
            return `DFIPs and CFPs of Voting Round: ${votingRound}`;
        }

        return 'DFIPs and CFPs of the Latest Voting Round';
    }

    if (isLoading) {
        return <Loader />;
    } else if (proposals) {
        return (
            <>
                <StyledTitle>{getTitle()}</StyledTitle>
                <CardContainer>
                    {
                    proposals.map((proposal: Proposal) => <ProposalCard key={proposal.id}>{proposal}</ProposalCard>)
                    }
                </CardContainer>
            </>
        );
    } else {
        return <NotFound />;
    }
}