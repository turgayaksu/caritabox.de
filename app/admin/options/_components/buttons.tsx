"use client";

import { FiTrash2 } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

type OptionType = {
  optionId: string;
};

const OptionButtons = ({ optionId }: OptionType) => {
  const router = useRouter();

  const onDelete = async () => {
    try {
      await axios.delete(`/api/options/${optionId}`);
      router.push("/admin/options");
      toast.success("Option successfully deleted");
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center gap-x-4">
      <Button
        onClick={() => onDelete()}
        className="rounded bg-red-500 px-2.5 py-1"
      >
        <FiTrash2 size={22} />
      </Button>
      {/* <Button
        onClick={() => router.push(`/admin/products/edit/${optionId}`)}
        className="bg-caritabox-500 rounded px-2.5 py-1"
      >
        <HiOutlinePencilAlt size={22} />
      </Button> */}
    </div>
  );
};

export default OptionButtons;
