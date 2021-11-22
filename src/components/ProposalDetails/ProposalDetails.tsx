import { useParams } from 'react-router';

export default function ProposalDetails() {
    const { proposalId } = useParams();
    return (
        <div>
            <h1>ProposalDetails of { proposalId }</h1>
        </div>
    );
}