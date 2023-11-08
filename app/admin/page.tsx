"use client";

import { PageHeader } from "@/app/components";
import { AdminMenu } from "./components";

const AdminPage = () => {
  return (
    <>
      <PageHeader title="Verwaltungsbereich">
        <AdminMenu />
      </PageHeader>
      <section className="gradient-section">
        <div className="container mx-auto px-4 py-10 lg:px-44">
          <h3 className="mb-8 text-3xl font-medium tracking-tight">
            Last Orders
          </h3>
          <ul>
            <li>#10. order detail</li>
            <li>#9. order detail</li>
            <li>#8. order detail</li>
            <li>#7. order detail</li>
            <li>#6. order detail</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AdminPage;
