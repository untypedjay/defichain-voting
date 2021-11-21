import { useEffect, useState } from "react";
import styled from "styled-components";
import { getVotingData } from "./api/dfx";
import { Loader } from "./components/Loader";
import Proposal from "./components/Proposal/Proposal";
import useLocalStorage from "./hooks/useLocalStorage";

const StyledApp = styled.div`
`;

export default function App() {
  const [proposals, setProposals] = useLocalStorage('proposals', [{title: 'test'}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const votingData = await getVotingData();
      setProposals(votingData);
      // const issueData = await getIssueData();
      // console.log(issueData)
      setIsLoading(false);
    };

    loadData();
  }, []);

  useEffect(() => {
    console.log(proposals)
  }, [proposals])

  return (
    <StyledApp>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {
            proposals.map((proposal: any) => <Proposal>{proposal}</Proposal>)
          }
        </>
      )}
    </StyledApp>
  );
}