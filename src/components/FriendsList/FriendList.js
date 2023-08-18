import { FriendCard } from './FriendCard';
import { FriendListItem, List, Topic } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Topic>
      FriendList
      <List>
        {friends.map(friend => (
          <FriendListItem key={friend.id}>
            <FriendCard friend={friend} />
          </FriendListItem>
        ))}
      </List>
    </Topic>
  );
};
