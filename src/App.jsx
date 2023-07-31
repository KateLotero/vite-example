import TwitterFollowCard from "./components/TwitterFollowCard";

const users = [
  {
    userName: "KateLotero",
    name: "Katerine Lotero",
    avatar: "https://random-d.uk/api/248.jpg",
    initialIsFollowing: true,
  },

  {
    userName: "UveDoble",
    name: "WilsonMachado",
    avatar:
      "https://imagenes.20minutos.es/files/og_thumbnail_1900/uploads/imagenes/2022/11/10/gato-naranja-sam-chang-unsplash.jpeg",
    initialIsFollowing: false,
  },

  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    initialIsFollowing: true,
    avatar: "https://random-d.uk/api/246.jpg",
  },
  {
    userName: "pablotija",
    name: "Pablo Uribe",
    initialIsFollowing: false,
    avatar: "https://random-d.uk/api/46.jpg",
  },
  {
    userName: "TheJJ",
    name: "Juan José López",
    initialIsFollowing: true,
    avatar: "https://random-d.uk/api/41.jpg",
  },
  {
    userName: "TMChein",
    name: "Tomas",
    initialIsFollowing: false,
    avatar: "https://random-d.uk/api/28.jpg",
  },
];

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen  bg-indigo-400">
        <div className=" inline-flex flex-col space-y-4">
          {users.map((user) => {
            const { userName, name, avatar, initialIsFollowing } = user;
            return (
              <TwitterFollowCard
                key={userName}
                userName={userName}
                name={name}
                avatar={avatar}
                initialIsFollowing={initialIsFollowing}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
