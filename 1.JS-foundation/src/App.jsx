function App() {

  //Assignment 2
  const movie = { title: "Inception", year: 2010, director: "Nolan" };
  const { title, year } = movie;
  
  //Assignment 3
  const calculate = (a, b) => {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
    return [add, subtract, multiply, divide];
  }
  const [add, subtract, multiply, divide] = calculate(6, 8);

  //Assignment 4
  const names = ['alice', 'bob', 'carol'];

  const capitalized  = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));

  //Assignment 5
  const users = [
    { name: 'Anna', active: true },
    { name: 'Tom', active: false },
    { name: 'Luna', active: true }
  ];

  const activeUsers = users.filter(user => user.active);

  //assignment 6

  const animals = ['dog', 'cat', 'dog', 'bird', 'cat', 'dog'];

  const count = animals.reduce((acc, animal) => {
    acc[animal] = (acc[animal] || 0) + 1;
    return acc;
  }, {});


  return (
    <div>
      <p>The movie "{title}" was released in {year}.</p> {/* Assignment 2 */}
      <p>6 * 8 =  {multiply}.</p> {/* Assignment 3 */}
      <p>['{capitalized.join("', '")}']</p> {/* Assignment 4 */}
      <p>{activeUsers.map(user => `{ name: '${user.name}', active: ${user.active} }`).join(', ')}</p>  {/* Assignment 5*/} 
      <p>{`{dog: ${count.dog}, cat: ${count.cat}, bird: ${count.bird} }`}</p> {/* Assignment 6 */}   
    </div>
  );
}

export default App;