import { useFormStore } from "@/hooks";
import { cn } from "@/libs/utils";

type CountProps = {
  label: string;
  count: number;
  line?: boolean;
};

const FormStepCircle = ({ label, count, line = true }: CountProps) => {
  const { step } = useFormStore();
  return (
    <>
      <div
        className={cn(
          "relative flex items-center text-white",
          step < count && "text-gray-500 dark:text-gray-200/70",
        )}
      >
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full border border-caritabox-600 bg-caritabox-600 transition duration-500 ease-in-out",
            step < count &&
              "border-gray-400 bg-transparent dark:border-gray-200/70",
          )}
        >
          {count}
        </div>
        <div
          className={cn(
            "absolute left-1/2 top-10 -translate-x-1/2 text-center text-xs font-medium text-caritabox-600",
            step < count && "text-gray-400",
          )}
        >
          {label}
        </div>
      </div>
      {line && (
        <div
          className={cn(
            "flex-auto border-t border-caritabox-600 transition duration-500 ease-in-out",
            step < count && "border-gray-400 dark:border-gray-200/70",
          )}
        ></div>
      )}
    </>
  );
};

export default FormStepCircle;
