import TwitterFollowCard from "./components/TwitterFollowCard";
function App() {
  return (
    <>
      <div className="flex flex-col items-center  justify-center h-screen space-y-4">
        <TwitterFollowCard />
        <TwitterFollowCard />
      </div>
    </>
  );
}

export default App;
