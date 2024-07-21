import { useEffect } from "react";

const useClickOutside = (ref, handler, isActive = true) => {
  useEffect(() => {
    if (!isActive) return;

    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, isActive]);
};

export default useClickOutside;