import { useState, useEffect } from "react";

const useChips = (storageKey = "myChips") => {
  const [chips, setChips] = useState(() => {
    const storedChips = localStorage.getItem(storageKey);
    return storedChips ? JSON.parse(storedChips) : [];
  });

  const [enteredTxt, setEnteredTxt] = useState("");

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(chips));
  }, [chips, storageKey]);

  // handle state changes
  function handleChange(e) {
    setEnteredTxt(e.target.value);
  }

  // handle delete button
  function handlBtnClick(indexRemove) {
    setChips((prevChips) =>
      prevChips.filter((_, index) => index !== indexRemove)
    );
  }

  // handle keys in an input
  function handleKeys(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const trimmedValue = enteredTxt.trim();
      if (trimmedValue) {
        setChips((prevChips) => [...prevChips, trimmedValue]);
        setEnteredTxt("");
      }
    }
  }

  return {
    chips,
    enteredTxt,
    handleChange,
    handlBtnClick,
    handleKeys,
  };
};

export default useChips;
