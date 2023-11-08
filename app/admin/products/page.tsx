import Link from "next/link";
import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";

import { prisma } from "@/libs";
import { PageHeader } from "@/app/components";
import { Button } from "@/components/ui/button";
import ProductButtons from "./_components/buttons";

const AdminProducsPage = async () => {
  const products = await prisma.products.findMany();
  return (
    <>
      <PageHeader title="Products">
        <Link className="underline" href="/admin/products/create">
          Add New
        </Link>
      </PageHeader>
      <section className="gradient-section">
        <div className="container mx-auto px-4 py-10 lg:px-44">
          <h3 className="mb-8 text-3xl font-medium tracking-tight">
            Product List
          </h3>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product, key) => {
                    return (
                      <tr
                        key={key}
                        className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        >
                          {product.title}
                        </th>
                        <td className="px-6 py-4">
                          <Image
                            src={product.imageUrl ? product.imageUrl : ""}
                            width={80}
                            height={80}
                            alt={product.title}
                          />
                        </td>
                        <td className="px-6 py-4">€{product.price}</td>
                        <td className="px-6 py-4">{product.unit}</td>
                        <td className="px-6 py-4 text-right">
                          <ProductButtons productId={product.id} />
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

export default AdminProducsPage;
