import { Description } from './Description';
import { Topic } from './Profile.styled';
import { UserStats } from './UserStats';
import PropTypes from 'prop-types';

export const Profile = ({ user }) => {
  return (
    <section>
      <Topic>Profile</Topic>

      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <UserStats stats={user.stats} />
    </section>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
};
