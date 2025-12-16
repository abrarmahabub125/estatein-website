import { useState } from "react";
import Radio from "./Radio";

function Checkbox() {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    isRemember: false,
  });

  const handelChange = (e) => {
    const { name, type } = e.target;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!values.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!values.password) {
      newErrors.password = "Password is required";
    } else if (values.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!values.isRemember) {
      newErrors.remember = "remember is required";
    }

    return newErrors;
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
  };

  return (
    <>
      <div className="rounded-2xl bg-gray-50 p-8">
        <form
          onSubmit={handelFormSubmit}
          className="flex flex-col items-start gap-8"
        >
          <label className="flex flex-col gap-1 text-gray-800">
            Name:
            <input
              type="text"
              name="fullName"
              value={values.fullName}
              placeholder="Enter your name"
              onChange={handelChange}
              className={`w-xs rounded-md border px-4 py-2 outline-0 ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
            />
            <p>{errors.fullName}</p>
          </label>
          <label className="flex flex-col gap-1 text-gray-800">
            Email:
            <input
              type="email"
              name="email"
              value={values.email}
              placeholder="Enter your name"
              onChange={handelChange}
              className={`w-xs rounded-md border px-4 py-2 outline-0 ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            <p>{errors.email}</p>
          </label>
          <label className="flex flex-col gap-1 text-gray-800">
            Password:
            <input
              type="password"
              name="password"
              value={values.password}
              placeholder="Enter your name"
              onChange={handelChange}
              className={`w-xs rounded-md border px-4 py-2 outline-0 ${errors.password ? "border-red-500" : "border-gray-300"}`}
            />
            <p>{errors.password}</p>
          </label>
          <label className="flex gap-1 text-gray-800">
            <input
              type="checkbox"
              name="isRemember"
              checked={values.isRemember}
              placeholder="Enter your name"
              onChange={handelChange}
            />
            Remember me <p>{errors.remember}</p>
          </label>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-blue-600 py-2 font-medium text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
      <Radio />
    </>
  );
}

export default Checkbox;
