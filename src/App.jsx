import { useState } from "react";
import "./App.css";
import ImageGrid from "./components/ImageGrid.jsx";

function App() {
  // STATE / DATA
  const emptyForm = { title: "", url: "" };
  // 1. store the form input
  const [formInput, setFormInput] = useState(emptyForm);

  // 2. array to store submitted projects
  const [projects, setProjects] = useState([]);

  // FUNCTIONS/SCRIPTS
  // on change to input, update my formInput state
  function handleChange(event) {
    let field = event.target.name;
    let value = event.target.value;
    setFormInput((oldState) => ({ ...oldState, [field]: value }));
  }

  // on submit (or button click), add form input to project array
  function handleSubmit(event) {
    // prevent page refresh
    event.preventDefault();

    // add formInput to projects array
    setProjects((oldState) => [...oldState, formInput]);

    // clear formInput
    setFormInput(emptyForm);
  }

  // TEMPLATE
  return (
    <div className="App">
      <h1>Hey there! 👋</h1>

      <form onSubmit={handleSubmit}>
        {/* ***** inputs ***** */}
        <label htmlFor="title">
          Title
          <input
            className="form-inputs"
            type="text"
            name="title"
            value={formInput.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="url">
          URL
          <input
            className="form-inputs"
            type="text"
            name="url"
            value={formInput.url}
            onChange={handleChange}
          />
        </label>

        {/* ***** submit ***** */}
        <button className="form-btn" type="submit">
          Submit
        </button>
      </form>

      <ImageGrid />
    </div>
  );
}

export default App;
