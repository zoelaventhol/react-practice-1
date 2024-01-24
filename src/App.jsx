import React, { useState } from "react";
import "./App.css";
import ImageGrid from "./components/ImageGrid.jsx"

function App() {
  const emptyForm = {title: '', url: ''}
  // STATE
  const [form, setForm] = useState(emptyForm)
  const [images, setImages] = useState([])
  const [showForm, setShowForm] = useState(false)

  // FUNCTIONS/SCRIPTS
  
  // Save changes to input fields in "form" state
  function handleChange(event) {
    // capture the field name and input value where the change happened
    let field  = event.target.name;
    let value = event.target.value;

    // update state using "setForm":
      // use the spread operator "..." to duplicate the state that's already there
      // use object bracket notation to update the appropriate field. 
        // i.e. If you're typing in the "title" input field, "[field]: value" will be equivalent to "title: 'example title'"
    setForm((state) => ({
      ...state, 
      [field]: value
    }))
  }

  // Add the latest form entry to "images", then reset the form
  function handleSubmit(event) {
    // stops the page from refreshing and losing your data
    event.preventDefault();

    // adds your new form entry to "images" state
    // use the spread operator "..." to duplicate the state that's already there, so you don't lose all your other images
    setImages((state)=>([...state, form]))

    // reset your form to blank
    setForm(emptyForm)
  }

  // TEMPLATE
  return (
    <div className="App">
      <h1>Picture time! 📸</h1>
      
      {/* FORM */}
      <button className = "form-btn" onClick={()=>setShowForm(!showForm)}>
        {showForm ? "Hide form 🙈" : "Add images! 🖼️"}
      </button>
      
      {showForm && 
      <form onSubmit={handleSubmit}>
        <div className='form-inputs'>
          <label htmlFor='title'>Title: </label>
          <input 
            name='title'
            value={form.title}
            onChange={handleChange}
          />
          <br />
          
          <label htmlFor='url'>URL: </label>
          <input 
            name='url'
            value={form.url}
            onChange={handleChange}
          />
        </div>

        <button>Submit</button>
      </form>}
      {/* END FORM */}
      
      {/* Pass "images" to ImageGrid as a prop */}
      <ImageGrid images={images}/>
    </div>
  );
}

export default App;
