import { create } from "zustand";

type FormStepStore = {
  step: number;
  onHandleNext: () => void;
  onHandleBack: () => void;
};

const useFormStore = create<FormStepStore>((set) => ({
  step: 1,
  onHandleNext: () => set((state) => ({ step: state.step + 1 })),
  onHandleBack: () => set((state) => ({ step: state.step - 1 })),
}));

export default useFormStore;
