import { getCurrentUser } from "@/libs";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = async () => {
  const currentUser = await getCurrentUser();
  const userId = currentUser?.id;

  if (!userId) throw new Error("Unauthorized");
  return { userId };
};

export const ourFileRouter = {
  productImage: f({ image: { maxFileSize: "1MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  signatureImage: f({ image: { maxFileSize: "1MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
