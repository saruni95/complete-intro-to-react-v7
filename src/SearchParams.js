import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
// const location = "Seattle, WA";
const [location, setLocation] =useState("");
const [animal, setAnimal] = useState("");
const [breed, setBreed] = useState("");
const breeds = ["poodle", "bichon"];

/* const sum = (x, y) => {
  return x + y;
};

const sum2 = (x, y) => (x+y) //Arrow Function, implicit return */

//console.log(location);
return (
  <div className="search-params">
    <form>
      <label htmlFor="location">
        Location
        <input type="location" 
        value={location} 
        placeholder="Location" 
        onChange = {(e) => setLocation(e.target.value)} />
      </label>
      <label htmlFor="animal">
        Animal
        <select 
        id="animal"
        value={animal}
        onChange = {(e) => {
          setAnimal(e.target.value);
          setBreed("");
        }}
          onBlur = {(e) => {
            setAnimal(e.target.value);
            setBreed("");
            }}
            >
              <option/>
              {ANIMALS.map((animal) => (
                  <option key= {animal} value={animal}>
                    {animal}
                  </option>
                ))
              };
          </select>
      </label>
      <label htmlFor="breed">
        Animal
        <select 
        id="breed"
        value={breed}
        onChange = {(e) => {
          setBreed(e.target.value);
        }}
          onBlur = {(e) => {
            setBreed(e.target.value);
            }}
            >
              <option/>
              {breeds.map((allBreed) => (
                  <option key= {allBreed} value={allBreed}>
                    {allBreed}
                  </option>
                ))
              };
          </select>
      </label>
      <button>Submit</button>
    </form>
  </div>
);
};

export default SearchParams;