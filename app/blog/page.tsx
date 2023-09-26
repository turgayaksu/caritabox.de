import { PageHeader } from "../components";

const BlogPage = () => {
  return (
    <>
      <PageHeader title="Caritabox Blog">
        <p className="mt-8 max-w-3xl text-sm">
          Sie können aktuelle Nachrichten und Caritabox-Ankündigungen verfolgen.
        </p>
      </PageHeader>

      <section className="container relative mx-auto px-4 lg:px-0">
        <div className="my-16 flex flex-col items-center space-y-12 text-center">
          <p className="text-3xl font-semibold text-red-500">coming soon...</p>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
