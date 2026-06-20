function App() {
  const movie = { title: "Inception", year: 2010, director: "Nolan" };
  const { title, year } = movie;

  return (
    <div>
      <p>The movie "{title}" was released in {year}.</p>
    </div>
  );
}

export default App;