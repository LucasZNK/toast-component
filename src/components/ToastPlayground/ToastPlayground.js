import React, { useCallback, useContext, useState } from "react";
import { ToastContext } from "../../context/ToastProvider";

import Button from "../Button";
import RadioButton from "../RadioButton";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

const defaultValue = "";

function ToastPlayground() {
  const { toastList, createToast, removeToast } = useContext(ToastContext);

  const [variantPicked, setVariantPicked] = useState("notice");
  const [message, setMessage] = useState(defaultValue);

  const changeVariant = useCallback((variantValue) => {
    return setVariantPicked(variantValue);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    createToast(message, variantPicked);
    setMessage(defaultValue);
    setVariantPicked("notice");
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
        {toastList && toastList.length > 0 && (
          <ToastShelf removeToast={removeToast} toastList={toastList} />
        )}
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={message}
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <RadioButton
              options={VARIANT_OPTIONS}
              changeVariant={changeVariant}
              variantPicked={variantPicked}
              name="variant"
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
