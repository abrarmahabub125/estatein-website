import { useState } from "react";

function Radio() {
  const [fruit, setFruit] = useState("");

  const handelChange = (e) => {
    setFruit(e.target.value);
  };
  const handelFormSubmit = (e) => {
    e.preventDefault();
    console.log(fruit);
  };
  return (
    <div>
      <form onSubmit={handelFormSubmit} className="mt-10 flex flex-col gap-4">
        <label>
          <input
            type="radio"
            name="fruit"
            value="apple"
            checked={fruit === "apple"}
            onChange={handelChange}
          />
          Apple
        </label>
        <label>
          <input
            type="radio"
            name="fruit"
            value="banana"
            checked={fruit === "banana"}
            onChange={handelChange}
          />
          Banana
        </label>
        <label>
          <input
            type="radio"
            name="fruit"
            value="orange"
            checked={fruit === "orange"}
            onChange={handelChange}
          />
          Orange
        </label>
        <label>
          <input
            type="radio"
            name="fruit"
            value="cherry"
            checked={fruit === "cherry"}
            onChange={handelChange}
          />
          Cherry
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Radio;
