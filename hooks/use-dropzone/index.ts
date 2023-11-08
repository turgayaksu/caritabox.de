import { create } from "zustand";

type DropzoneUploadStore = {
  url: string | null | undefined;
  setUrl: (link: string | undefined) => void;
};

const useDropzoneUpload = create<DropzoneUploadStore>((set) => ({
  url: null,
  setUrl: (link) => set((state) => ({ url: link })),
}));

export default useDropzoneUpload;
