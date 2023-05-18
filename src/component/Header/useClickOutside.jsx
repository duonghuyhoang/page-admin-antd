import { useState, useEffect } from "react";

function useClickOutside(ref, callback) {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (active) {
          callback();
        }
        setActive(!active);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, active]);

  return [active, setActive];
}

export default useClickOutside;
