import { useEffect, useState } from "react";
import { getVotingData } from "../api/dfx";
import { getIssueData } from "../api/github";
import useLocalStorage from "./useLocalStorage";
import { Proposal, ProposalType, VotingRound } from "../types";
import { formatTitle, getProposalId } from "../utils/common";

export default function useProposals(votingRoundId: string = 'latest'): [Proposal[], boolean] {
    const [isLoading, setIsLoading] = useState(true);
    const [votingRounds, setVotingRounds] = useLocalStorage('votingRounds', []);
    const [proposals, setProposals] = useState<Proposal[]>([]);

    useEffect(() => {
        const getProposals = async () => {
            setIsLoading(true);
            const potentialVotingRound: VotingRound = votingRounds.find((votingRound: VotingRound) => votingRound.id === votingRoundId);
            if (potentialVotingRound) {
                setProposals(potentialVotingRound.proposals);
            } else {
                const votingRoundData = await getVotingData(votingRoundId);
                const proposalData: Proposal[] = await Promise.all(votingRoundData.map(async (proposalData: any) => {
                    const issueData = await getIssueData(proposalData.number);

                    return {
                        id: proposalData.number,
                        title: formatTitle(proposalData.title),
                        proposalNr: getProposalId(proposalData.title),
                        type: proposalData.type === 'cfp' ? ProposalType.CFP : ProposalType.DFIP,
                        dfiAmount: proposalData.dfiAmount,
                        issueURL: proposalData.htmlUrl,
                        isApproved: proposalData.currentResult === 'Approved',
                        startDate: proposalData.startDate,
                        endDate: proposalData.endDate,
                        yesVotes: proposalData.totalVotes.yes,
                        neutralVotes: proposalData.totalVotes.neutral,
                        noVotes: proposalData.totalVotes.no,
                        totalVotes: proposalData.totalVotes.total,
                        turnout: proposalData.totalVotes.turnout,
                        possibleVotes: proposalData.totalVotes.possible,
                        username: issueData?.user.login || 'unknown',
                        avatarURL: issueData?.user.avatar_url || 'https://avatars.githubusercontent.com/u/0',
                        userURL: issueData?.user.html_url || proposalData.htmlUrl
                    }
                }));

                const oldVotingRounds = [...votingRounds];
                setVotingRounds([...oldVotingRounds, { id: votingRoundId, proposals: proposalData }]);
                setProposals(proposalData);
            }

            setIsLoading(false);
        };

        getProposals();
    }, [setVotingRounds, votingRoundId, votingRounds]);

    return [proposals, isLoading];
}