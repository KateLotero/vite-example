import TwitterFollowCard from "./components/TwitterFollowCard";
function App() {
  return (
    <>
      <div className="flex flex-col items-center  justify-center h-screen space-y-4">
        <TwitterFollowCard
          userName="KateLotero"
          name="Katerine Lotero"
          avatar="https://random-d.uk/api/248.jpg"
          initialIsFollowing
        />
        <TwitterFollowCard
          userName="Gatito"
          name="Wilson Machado"
          avatar="https://imagenes.20minutos.es/files/og_thumbnail_1900/uploads/imagenes/2022/11/10/gato-naranja-sam-chang-unsplash.jpeg"
        />
      </div>
    </>
  );
}

export default App;
