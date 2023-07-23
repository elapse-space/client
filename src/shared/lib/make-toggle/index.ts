import { create, SetState } from "zustand";

export type Toggle<T> = {
  active: boolean;
  setActive: (active: boolean) => void;
  depend?: T;
  setDepend?: (depend: T) => void;
};

export const createToggle =
  <T>(model?: T) =>
  (props?: Partial<Toggle<T>>) =>
    create<Toggle<T>>((set: SetState<Toggle<T>>) => {
      const toggle: Toggle<T> = {
        active: false,
        setActive: (active) =>
          set((state) => ({
            ...state,
            active,
          })),
        ...model,
        ...props,
      };

      if (toggle.setDepend === undefined) {
        toggle.setDepend = (depend) =>
          set((state) => ({
            ...state,
            depend,
          }));
      }

      return toggle;
    });
