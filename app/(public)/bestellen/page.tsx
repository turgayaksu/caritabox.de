"use client";
import { useState } from "react";

import { useProducts } from "@/hooks";
import { FormSteps, FormStepCircle } from "./_components";

const BestellenPage = () => {
  const { loading, products } = useProducts();
  return (
    <>
      <section className="gradient-section -mt-12">
        <div className="container mx-auto flex flex-col space-y-8 px-4 lg:px-0">
          <h2 className="pb-12 pt-24 text-4xl font-medium tracking-tight">
            Caritabox beantragen
          </h2>
          <div className="rounded-md bg-slate-100 pb-10 pl-8 pr-14 pt-4 dark:bg-slate-800">
            <div className="flex items-center">
              <FormStepCircle label="Pflegetüte" count={1} />
              <FormStepCircle label="Versicherter" count={2} />
              <FormStepCircle label="Pflegeperson" count={3} />
              <FormStepCircle label="Zusammenfassung" count={4} line={false} />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-10 px-4 lg:px-0">
        {loading && <h1>Loading...</h1>}
        {products.length > 0 && <FormSteps products={products} />}
      </section>
    </>
  );
};

export default BestellenPage;
