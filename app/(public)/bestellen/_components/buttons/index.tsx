"use client";

import { useCartStore, useFormStore } from "@/hooks";
import { Button } from "@/components/ui/button";
import { cn } from "@/libs/utils";

const StepButtons = () => {
  const step = useFormStore();
  const { cartTotal } = useCartStore();
  const disabled = cartTotal < 70 ? true : false;
  return (
    <div className="mt-4 flex items-center justify-between">
      {step.step > 1 && <Button onClick={step.onHandleBack}>Zurück</Button>}

      <Button
        disabled={disabled}
        onClick={step.onHandleNext}
        className={cn("", step.step === 1 && "w-full")}
      >
        {step.step === 4 ? "Kostenlos bestellen" : "Weiter"}
      </Button>
    </div>
  );
};

export default StepButtons;
