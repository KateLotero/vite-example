/* eslint-disable react/prop-types */
import { useState } from "react";

function TwitterFollowCard({ userName, name, avatar, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";

  const handelClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="flex items-center space-x-4">
      <article>
        <header className="flex items-center space-x-4">
          <img className="w-12 h-12 rounded-full" alt="avatar" src={avatar} />
          <div>
            <strong>{name}</strong>
            <div>@{userName}</div>
          </div>
        </header>
      </article>
      <aside>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handelClick}
        >
          {text}
        </button>
      </aside>
    </div>
  );
}
export default TwitterFollowCard;
