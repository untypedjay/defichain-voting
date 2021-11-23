import { useNavigate } from "react-router";
import styled from "styled-components";
import { Proposal, ProposalType } from "../../types";
import { formatTitle, getProposalId } from "../../utils/common";
import { Avatar } from "../Avatar";

interface Props {
    children: Proposal;
}

const StyledProposalCard = styled.button`
    text-align: left;
    border: none;
    background-color: var(--clr-white);
    border-radius: var(--br-card);
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledHorizontalContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledAuthor = styled.p`
    margin-left: 1em;
    color: var(--clr-grey-text);

`;

const StyledResult = styled.p<{ result: string }>`
    margin-bottom: 0;
    color: ${props => props.result ? 'var(--clr-green)' : 'var(--clr-red)'};
`;

const StyledText = styled.p`
    color: var(--clr-grey-text);
    margin: 0;
`;

const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
`;

const StyledTitle = styled.h3`
    margin-bottom: 0.5em;
`;

export default function ProposalCard({children}: Props) {
    const navigate = useNavigate();

    return (
        <StyledProposalCard onClick={() => navigate(`/proposals/${getProposalId(children.title)}`)}>
            <StyledHeader>
                <StyledHorizontalContainer>
                    <Avatar avatarURL={children.avatarURL} name={children.username} />
                    <StyledAuthor>{children.username}</StyledAuthor>
                </StyledHorizontalContainer>
                <StyledText>{`${children.type} ${getProposalId(children.title)}`}</StyledText>
            </StyledHeader>
            <StyledBody>
                <div>
                    <StyledTitle>{formatTitle(children.title)}</StyledTitle>
                    {children.type === ProposalType.CFP && <StyledText>{children.dfiAmount} DFI</StyledText>}
                </div>

                <StyledResult result={children.isApproved.toString()}>
                    Currently {!children.isApproved && 'not'} approved
                </StyledResult>
            </StyledBody>
        </StyledProposalCard>
    );
}