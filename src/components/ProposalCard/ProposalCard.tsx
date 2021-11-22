import { useEffect, useState } from "react";
import styled from "styled-components";
import { getIssueData } from "../../api/github";
import { formatTitle, getProposalLabel } from "../../utils/text";

interface Props {
    children: any;
}

const StyledProposalCard = styled.section`
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

const StyledAvatar = styled.img`
    border-radius: 50%;
    width: 60px;
    height: 60px;
`;

const StyledHorizontalContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledAuthor = styled.p`
    margin-left: 1em;
    color: var(--clr-grey-text);

`;

const StyledResult = styled.p<{ result: boolean }>`
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
    const [author, setAuthor] = useState<any>({ name: '...', avatarURL: 'https://avatars.githubusercontent.com/u/0' });

    useEffect(() => {
        const loadData = async () => {
            const issueData = await getIssueData(children.number);
            setAuthor({ name: issueData.user.login, avatarURL: issueData.user.avatar_url });
        };

        loadData();
    }, []);

    return (
        <StyledProposalCard>
            <StyledHeader>
                <StyledHorizontalContainer>
                    <StyledAvatar src={author.avatarURL} alt={author.name}></StyledAvatar>
                    <StyledAuthor>{author.name}</StyledAuthor>
                </StyledHorizontalContainer>
                <StyledText>{getProposalLabel(children.title)}</StyledText>
            </StyledHeader>
            <StyledBody>
                <div>
                    <StyledTitle>{formatTitle(children.title)}</StyledTitle>
                    {children.type === 'cfp' && <StyledText>{children.dfiAmount} DFI</StyledText>}
                </div>

                <StyledResult result={children.currentResult === 'Approved' ? true : false}>
                    Currently {children.currentResult.toLowerCase()}
                </StyledResult>
            </StyledBody>
        </StyledProposalCard>
    );
}