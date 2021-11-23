import styled from "styled-components";

interface Props {
    avatarURL: string;
    name: string;
}

const StyledAvatar = styled.img`
    border-radius: 50%;
    width: 60px;
    height: 60px;
`;

export default function Avatar({ avatarURL, name }: Props) {
    return (
        <StyledAvatar src={avatarURL || 'https://avatars.githubusercontent.com/u/0'} alt={name || '...'}></StyledAvatar>
    )
}