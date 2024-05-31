import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/components/Tables/TableThree";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { BsPersonPlusFill } from "react-icons/bs";
import Link from "next/link";



export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};


const MaintenancePage = () => {
  return (
    <div>
      <DefaultLayout>
        <Breadcrumb pageName="Users" />
        <Link href={'/dashboard/users/register'}>
          <BsPersonPlusFill size={25}/>
        </Link>
        <TableThree />
      </DefaultLayout>
    </div>
  );
};

export default MaintenancePage;
