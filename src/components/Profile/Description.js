import { Avatar, ProfileCard, Text, UserName } from './Description.styled';
import PropTypes from 'prop-types';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <ProfileCard>
      <Avatar src={avatar} alt="User avatar" />

      <UserName>{username}</UserName>
      <Text>@{tag}</Text>
      <Text>{location}</Text>
    </ProfileCard>
  );
};

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
