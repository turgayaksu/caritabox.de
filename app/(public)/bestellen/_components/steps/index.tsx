"use client";
import { FC } from "react";
import { useFormStore } from "@/hooks";
import { StepOne, StepTwo, StepThree, StepFour } from "..";
import { ProductProps } from "@/types";

interface StepsProps {
  products: ProductProps[];
}

const FormSteps: FC<StepsProps> = ({ products }) => {
  const { step } = useFormStore();

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne products={products} />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      default:
        return <StepOne products={products} />;
    }
  };

  return renderStep();
};

export default FormSteps;
