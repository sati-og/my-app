import s from "./ShadowOverlay.module.scss";
import React from "react";

export const ShadowOverlay = () => {
  return (
    <img className={s.shadowOverlay} src="/images/leafs-shadow.png" alt=""/>
  )
}
