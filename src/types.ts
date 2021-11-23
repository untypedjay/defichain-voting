export type Proposal = {
    id: number;
    title: string;
    proposalNr: string;
    type: ProposalType;
    dfiAmount: number;
    issueURL: string;
    isApproved: boolean;
    startDate: string;
    endDate: string;
    yesVotes: number;
    neutralVotes: number;
    noVotes: number;
    totalVotes: number;
    turnout: number;
    possibleVotes: number;
    username: string;
    avatarURL: string;
    userURL: string;
}

export type VotingRound = {
    id: string;
    proposals: Proposal[];
}

export enum ProposalType {
    CFP,
    DFIP
}