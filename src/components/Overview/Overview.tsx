import { useEffect, useState } from "react";
import styled from "styled-components";
import { getVotingData } from "../../api/dfx";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CardContainer } from "../CardContainer";
import { Loader } from "../Loader";
import { ProposalCard } from "../ProposalCard";

const StyledTitle = styled.h1`
  text-align: center;
`;

export default function Overview() {
    const [proposals, setProposals] = useLocalStorage('proposals', [{title: 'test'}]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const loadData = async () => {
        const votingData = await getVotingData();
        setProposals(votingData);
        setIsLoading(false);
      };
  
      loadData();
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                <StyledTitle>DFIPs and CFPs of the Latest Voting Round</StyledTitle>
                <CardContainer>
                    {
                    proposals.map((proposal: any) => <ProposalCard>{proposal}</ProposalCard>)
                    }
                </CardContainer>
                </>
            )}
        </>
    );
}