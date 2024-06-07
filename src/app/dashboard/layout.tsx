import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function DashboaedLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
      <DefaultLayout>
        {children}
      </DefaultLayout>
    );
}