import { prisma } from "@/libs";

const BestellenPage = async () => {
  const products = await prisma.products.findMany({
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
      <section className="gradient-section -mt-12">
        <div className="container mx-auto flex flex-col space-y-8 px-4 lg:px-0">
          <h2 className="pb-12 pt-24 text-4xl font-medium tracking-tight">
            Caritabox beantragen
          </h2>
          <div className="rounded-md bg-slate-100 pb-10 pl-8 pr-14 pt-4 dark:bg-slate-800">
            <div className="flex items-center">
              <div className="relative flex items-center text-caritabox-600">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-caritabox-600 transition duration-500 ease-in-out">
                  1
                </div>
                <div className="absolute left-1/2 top-10 -translate-x-1/2 text-center text-xs font-medium text-caritabox-600">
                  Pflegetüte
                </div>
              </div>
              <div className="flex-auto border-t-2 border-caritabox-600 transition duration-500 ease-in-out"></div>
              <div className="relative flex items-center text-white">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-caritabox-600 bg-caritabox-600 transition duration-500 ease-in-out">
                  2
                </div>
                <div className="absolute left-1/2 top-10 -translate-x-1/2 text-center text-xs font-medium text-caritabox-600">
                  Versicherter
                </div>
              </div>
              <div className="flex-auto border-t-2 border-gray-300 transition duration-500 ease-in-out"></div>
              <div className="relative flex items-center text-gray-500">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 transition duration-500 ease-in-out">
                  3
                </div>
                <div className="absolute left-1/2 top-10 -translate-x-1/2 text-center text-xs font-medium text-gray-500">
                  Pflegeperson
                </div>
              </div>
              <div className="flex-auto border-t-2 border-gray-300 transition duration-500 ease-in-out"></div>
              <div className="relative flex items-center text-gray-500">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 transition duration-500 ease-in-out">
                  4
                </div>
                <div className="absolute left-1/2 top-10 -translate-x-1/2 text-center text-xs font-medium text-gray-500">
                  Zusammenfassung
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-20 px-4 lg:px-0">
        form is here
      </section>
    </>
  );
};

export default BestellenPage;
