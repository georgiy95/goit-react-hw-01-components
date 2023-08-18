import { AvatarImg, NameFriend, Status } from './FriendCard.styled';

export const FriendCard = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status status={isOnline.toString()} />
      <AvatarImg src={avatar} alt="User avatar" width="48" />
      <NameFriend>{name}</NameFriend>
    </>
  );
};
