import { Menu, Search, AddTwo, UserCard } from "./react-components/solution";

function App() {
  return (
    <>
      {/* Exercise #1 - Click on Menu Item */}
      <p>Exercise #1 - Click on Menu Item</p>
      <Menu menuItems={["Home", "Test", "John", "Harry"]} />

      {/* Exercise #2 - Search in TODO List */}
      <p>Exercise #2 - Search in TODO List</p>
      <Search todoList={["Home", "Test", "John", "Harry"]} />

      {/* Exercise #3 - Add 2 numbers */}
      <p>Exercise #3 - Add 2 numbers</p>
      <AddTwo />

      {/* Exercise #4 - User Card */}
      <p>Exercise #4 - User Card</p>
      <UserCard />
    </>
  );
}

export default App;
