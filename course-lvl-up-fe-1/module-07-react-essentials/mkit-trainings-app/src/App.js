import { Menu, Search, AddTwo, UserCard } from "./react-components/solution";
import {
  ColorfulWord,
  StyledComponent,
  Toggle,
  StyledChildren,
  Box,
} from "./css-in-js/solution";

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

      {/* Exercise #1 - Toggle Button */}
      <p>Exercise #1 - Toggle Button</p>
      <Toggle isOn={true} />

      {/* Exercise #2 - Colorful Word */}
      <p>Exercise #2 - Colorful Word</p>
      <ColorfulWord word="Harry" />

      {/*Exercise #3 - Fully Controlled Styled Component*/}
      <p>Exercise #3 - Fully Controlled Styled Component</p>
      <StyledComponent styles={{}} />

      {/*Exercise #4 - Styled Children*/}
      <p>Exercise #4 - Styled Children</p>
      <StyledChildren>
        <span>John Doe</span>
      </StyledChildren>

      {/*Exercise #5 - Responsive Box*/}
      <p>Exercise #5 - Responsive Box</p>
      <Box />
    </>
  );
}

export default App;
