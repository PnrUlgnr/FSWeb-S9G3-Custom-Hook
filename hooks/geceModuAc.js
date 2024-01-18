import { useState } from "react";

export function geceModuAc(initialValue) {
  const [geceModu, setGeceModu] = useState(initialValue);
  function updateGeceModu(value) {
    setGeceModu(value);
  }

  return [geceModu, updateGeceModu];
}
