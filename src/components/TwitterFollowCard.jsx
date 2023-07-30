function TwitterFollowCard() {
  return (
    <div className="flex items-center space-x-4">
      <article>
        <header className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full"
            alt="El avatar midudev"
            src="https://random-d.uk/api/248.jpg"
          />
          <div>
            <strong>Katerine Lotero</strong>
            <div>@kateLotero</div>
          </div>
        </header>
      </article>
      <aside>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Seguir
        </button>
      </aside>
    </div>
  );
}

export default TwitterFollowCard;
