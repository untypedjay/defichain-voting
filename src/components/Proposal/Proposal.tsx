interface Props {
    children: any;
}

export default function Proposal({children}: Props) {
    return (
        <>
            <p>{children.title}</p>
        </>
    );
}