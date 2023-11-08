import Link from "next/link";
import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";

import { prisma } from "@/libs";
import { PageHeader } from "@/app/components";
import { Button } from "@/components/ui/button";
import OptionButtons from "./_components/buttons";

const OptionsPage = async () => {
  const options = await prisma.options.findMany({
    include: {
      optionGroups: {
        include: {
          optionGroup: true,
        },
      },
    },
  });
  return (
    <>
      <PageHeader title="Product Options">
        <div className="flex space-x-8">
          <Link className="underline" href="/admin/options/create">
            Add Option
          </Link>
        </div>
      </PageHeader>
      <section className="gradient-section">
        <div className="container mx-auto px-4 py-10 lg:px-44">
          <h3 className="mb-8 text-3xl font-medium tracking-tight">
            Product Options
          </h3>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Option Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Option Gorup
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {options &&
                  options.map((option, key) => {
                    return (
                      <tr
                        key={key}
                        className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        >
                          {option.name}
                        </th>
                        <td className="px-6 py-4">
                          {option.optionGroups.map(
                            (optionGroup) => optionGroup.optionGroup.name,
                          )}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <OptionButtons optionId={option.id} />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default OptionsPage;
