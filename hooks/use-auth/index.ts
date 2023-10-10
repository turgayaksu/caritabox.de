import { SafeUser } from "@/types";
import { create } from "zustand";

type AuthProps = {
  isLogged: SafeUser | null;
  isUser: (user: SafeUser) => void;
};

const useAuth = create<AuthProps>((set) => ({
  isLogged: null,
  isUser: (user) => {
    set((state) => ({ isLogged: user }));
  },
}));

export default useAuth;
