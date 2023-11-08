import Link from "next/link";

const AdminMenu = () => {
  return (
    <div className="flex flex-row gap-x-10">
      <Link href="/admin/products" className="hover:underline">
        Produkte
      </Link>
      <Link href="/admin/options" className="hover:underline">
        Produkt Optionen
      </Link>
      <Link href="/admin/orders" className="hover:underline">
        Aufträge
      </Link>
      <Link href="/admin/customers" className="hover:underline">
        Kunden
      </Link>
      <Link href="/admin/blog" className="hover:underline">
        Blogeintrag
      </Link>
    </div>
  );
};

export default AdminMenu;
