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
      className="bg-caritabox-100/70 mb-6 rounded-lg dark:bg-slate-700"
      defaultOpen={isOpen}
    >
      {({ open }) => (
        <>
          <Disclosure.Button className="bg-caritabox-200/80 text-caritabox-600 hover:bg-caritabox-300 hover:text-caritabox-700 focus-visible:ring-caritabox-500 flex w-full justify-between rounded-lg px-4 py-2 text-left font-semibold focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-900">
            <span>{question}</span>
            <BiChevronDown
              className={classNames(
                "text-caritabox-500 h-5 w-5 dark:text-slate-300",
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
