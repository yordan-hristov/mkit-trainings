import React, { useRef, useState, useEffect, memo } from "react";

/**
 * Exercise #1 - Click on Menu Item
 *
 * @param {string[]} menuItems
 * @returns {React.ReactElement}
 */
export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const itemValue = event.currentTarget.id;

    alert(itemValue);
  }

  render() {
    return (
      <ul>
        {this.props.menuItems.map((item) => (
          <li key={item} id={item} onClick={this.handleClick}>
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

/**
 * Exercise #2 - Search in TODO List
 *
 * @param {string[]} todoList
 * @returns {React.ReactElement}
 */
export function Search({ todoList = [] }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => setSearchValue(event.target.value);

  const filteredItems = todoList.filter((todoItem) => todoItem === searchValue);

  const list = filteredItems.length ? filteredItems : todoList;

  return (
    <>
      <p>You are searching for {searchValue}</p>

      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchValue}
      />

      <ul>
        {list.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

/**
 * Exercise 3 - Add 2 Numbers
 *
 * @property {number} sum
 * @returns {React.ReactElement}
 */
class Result extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderCount = 0;
  }
  render() {
    this.renderCount = this.renderCount + 1;

    return (
      <>
        <p>Rendered: {this.renderCount}</p>

        <p>Sum: {this.props.sum}</p>
      </>
    );
  }
}

/**
 * @returns {React.ReactElement}
 */
export class AddTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
      a: 0,
      b: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
  }

  handleClick() {
    this.setState({ sum: this.state.a + this.state.b });
  }

  handleChangeA(event) {
    this.setState({ a: Number(event.target.value) });
  }

  handleChangeB(event) {
    this.setState({ b: Number(event.target.value) });
  }

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.a}
          onChange={this.handleChangeA}
        />
        <input
          type="number"
          value={this.state.b}
          onChange={this.handleChangeB}
        />
        <button type="button" onClick={this.handleClick}>
          Calc
        </button>

        <Result sum={this.state.sum} />
      </div>
    );
  }
}

/**
 * Exercise #4 - User Card
 *
 * @returns {React.ReactElement}
 */

export function UserCard() {
  const [user, setUser] = useState({
    age: 0,
    description: "",
  });

  const handleChangeAge = (event) =>
    setUser((prev) => ({ ...prev, age: event.target.value }));

  const handleChangeDescription = (event) =>
    setUser((prev) => ({ ...prev, description: event.target.value }));

  return (
    <div>
      <p id="name">John</p>
      <Age age={user.age} />
      <Description description={user.description} />
      <input type="text" id="age" onChange={handleChangeAge} />
      <input type="text" id="description" onChange={handleChangeDescription} />
    </div>
  );
}

/**
 * @returns {React.ReactElement}
 */
const Age = memo(function Age({ age }) {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <>
      <p id="ageRenderCount">Render Count: {renderCount.current}</p>
      <p id="userAge">Age: {age}</p>
    </>
  );
});

/**
 * @returns {React.ReactElement}
 */
const Description = memo(function Description({ description }) {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <>
      <p id="descriptionRenderCount">Render Count: {renderCount.current}</p>
      <p id="userDescription">Description: {description}</p>
    </>
  );
});
