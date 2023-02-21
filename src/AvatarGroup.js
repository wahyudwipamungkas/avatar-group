import React, { useState } from "react";
import "./AvatarGroup.css";

const AvatarGroup = ({ avatars,size }) => {
  const [showMore, setShowMore] = useState(false);
  const visibleAvatars = showMore ? avatars : avatars.slice(0, 3);
  const avatarSize = size || 40; // default size is 40px
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };

  return (
    <div className="avatar-group">
      {visibleAvatars.map((avatar, index) => (
        <img
          key={avatar.id}
          className='avatar'
          src={avatar.image}
          alt={avatar.name}
          style={{ width: avatarSize, height: avatarSize, borderRadius: '50%', marginRight: 8 }}
        />
      ))}
      {avatars.length > 3 && (
        <button
          className="more-button"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : `+${avatars.length - 3}`}
        </button>
      )}
    </div>
  );
};

export default AvatarGroup;