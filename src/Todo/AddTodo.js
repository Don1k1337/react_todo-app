import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultVal = "") {
  const [value, setVal] = useState(defaultVal);
  return {
    bind: {
      value,
      onChange: (e) => setVal(e.target.value),
    },
    clear: () => setVal(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(e) {
    e.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }
  return (
    <form style={{ margin: "1rem 1rem" }} onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add new todo</button>
    </form>
  );
}

export default AddTodo;

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
