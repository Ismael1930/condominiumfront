"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { SessionAuthProvider } from '../context/SessionAuthProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="es">
      <body >
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <SessionAuthProvider>
            {loading? <Loader/> :children}
          </SessionAuthProvider>
        </div>
      </body>
    </html>
  );
}
