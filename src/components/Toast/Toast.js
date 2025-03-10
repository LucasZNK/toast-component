import React, { memo, useEffect } from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ message, variant, removeToast, id, timeVisible = 2000 }) {
  let Icon = ICONS_BY_VARIANT[variant];
  useEffect(() => {
    let timeout = setTimeout(() => {
      removeToast(id);
    }, timeVisible);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{message}</p>
      <button
        onClick={() => {
          removeToast(id);
        }}
        className={styles.closeButton}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default memo(Toast);
