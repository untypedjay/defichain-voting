export function formatTitle(input: string): string {
    return (removeParanthesis(removeLabel(input)));
}

export function getProposalId(proposalTitle: string): string {
    const proposalLabel = getProposalLabel(proposalTitle);
    const indexOfLastWhitespace = proposalLabel.lastIndexOf(' ');
    if (indexOfLastWhitespace !== -1) {
        console.log(proposalLabel.substring(indexOfLastWhitespace + 1))
        return proposalLabel.substring(indexOfLastWhitespace + 1);
    }

    console.log(proposalLabel)
    return proposalLabel;
}

export function getVotingRoundId(proposalId: string): string {
    return proposalId.substring(0, 4);
}

function getProposalLabel(proposalTitle: string): string {
    const indexOfFirstSemicolon = proposalTitle.indexOf(':');
    if (indexOfFirstSemicolon !== -1) {
        return proposalTitle.substring(0, indexOfFirstSemicolon);
    }

    return '';
}

function removeParanthesis(input: string): string {
    if (input[input.length - 1] === ')') {
        const indexOfOpeningParanthesis = input.lastIndexOf('(');
        if (indexOfOpeningParanthesis !== -1) {
            return input.substring(0, indexOfOpeningParanthesis);
        }
    }

    return input;
}

function removeLabel(input: string): string {
    const indexOfFirstSemicolon = input.indexOf(':');
    if (indexOfFirstSemicolon !== -1) {
        return input.substring(indexOfFirstSemicolon + 1);
    }
    
    return input;
}