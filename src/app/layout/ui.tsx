import { useSessionInfo } from "@features/session/info/api";
import { Loader } from "@widgets/loader";
import { motion } from "framer-motion";
import React, { FC, Fragment, ReactNode } from "react";
import { createSlot } from "react-slotify";

export type LayoutProps = {
  children: ReactNode;
};

export const ContainerSlot = createSlot();
export const HeaderSlot = createSlot();
export const SidebarSlot = createSlot();

export const BaseLayout: FC<LayoutProps> = ({ children }) => {
  const { isLoading: sessionLoading } = useSessionInfo();

  return (
    <Fragment>
      <Loader loading={sessionLoading} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.5, delay: 1 } }}
        className={"flex relative"}
      >
        <HeaderSlot.Renderer childs={children} />
        <main className={"w-screen"}>
          <ContainerSlot.Renderer childs={children} />
        </main>
      </motion.div>
    </Fragment>
  );
};
