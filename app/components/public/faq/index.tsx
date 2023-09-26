"use client";

import { Disclosure, Transition } from "@headlessui/react";
import classNames from "classnames";
import { BiChevronDown } from "react-icons/bi";

type FaqProps = {
  question: string;
  answer: string;
  isOpen?: boolean;
};

const Faq = ({ question, answer, isOpen = false }: FaqProps) => {
  return (
    <Disclosure
      as="div"
      className="mb-6 rounded-lg bg-primary-100/70 dark:bg-slate-700"
      defaultOpen={isOpen}
    >
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-primary-200/80 px-4 py-2 text-left font-semibold text-primary-600 hover:bg-primary-300 hover:text-primary-700 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-900">
            <span>{question}</span>
            <BiChevronDown
              className={classNames(
                "h-5 w-5 text-primary-500 dark:text-slate-300",
                {
                  "rotate-180 transform": open,
                },
              )}
            />
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="px-4 pb-2 pt-4">
              {answer}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Faq;
