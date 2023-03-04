import React, { createContext, useEffect, useMemo, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = useState([]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        setToastList([]);
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function createToast(message, variant) {
    let id = Math.random();
    const nextList = [
      ...toastList,
      {
        message,
        variant,
        id,
      },
    ];
    setToastList(nextList);
  }

  function removeToast(idToRemove) {
    let list = toastList.filter((item) => {
      return item.id !== idToRemove;
    });

    setToastList(list);
  }

  return (
    <ToastContext.Provider value={{ toastList, createToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
