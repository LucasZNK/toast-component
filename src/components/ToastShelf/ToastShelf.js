import React, { memo } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastList, removeToast }) {
  return (
    <ol className={styles.wrapper}>
      {toastList.map(({ message, variant, id }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast
              id={id}
              message={message}
              variant={variant}
              removeToast={removeToast}
              timeVisible={variant === "error" ? 5000 : 2000}
            >
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default memo(ToastShelf);
