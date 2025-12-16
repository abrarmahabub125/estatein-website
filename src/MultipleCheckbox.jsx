import { useState } from "react";

function MultipleCheckbox() {
  const [values, setValues] = useState({
    apple: false,
    banana: false,
    litchi: false,
    jackfruit: false,
    orange: false,
    cherry: false,
  });

  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.checked;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div>
      <form onSubmit={handelSubmit} className="mt-10 flex flex-col gap-4">
        <label>
          <input
            type="checkbox"
            name="apple"
            checked={values.apple}
            onChange={handelChange}
          />
          Apple
        </label>
        <label>
          <input
            type="checkbox"
            name="banana"
            checked={values.banana}
            onChange={handelChange}
          />
          Banana
        </label>
        <label>
          <input
            type="checkbox"
            name="litchi"
            checked={values.litchi}
            onChange={handelChange}
          />
          Litchi
        </label>
        <label>
          <input
            type="checkbox"
            name="jackfruit"
            checked={values.jackfruit}
            onChange={handelChange}
          />
          Jackfruit
        </label>
        <label>
          <input
            type="checkbox"
            name="orange"
            checked={values.orange}
            onChange={handelChange}
          />
          Orange
        </label>
        <label>
          <input
            type="checkbox"
            name="cherry"
            checked={values.cherry}
            onChange={handelChange}
          />
          Cherry
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MultipleCheckbox;
