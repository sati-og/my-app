import s from "./Page.module.scss";
import { FC, ReactNode } from "react";

export const Page: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        {children}
      </div>
    </div>
  )
}
