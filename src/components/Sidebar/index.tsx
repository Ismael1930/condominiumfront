"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaBuilding, FaCalculator, FaChevronDown, FaComments, FaPiggyBank, FaUsers } from "react-icons/fa";
import { RiSurveyFill } from "react-icons/ri";
import { PiTreeEvergreenFill } from "react-icons/pi";
import { BsShieldLockFill } from "react-icons/bs";
import { MdMapsUgc, MdOutlineAttachMoney } from "react-icons/md";
import { FaHelmetSafety, FaUserGear } from "react-icons/fa6";
import SidebarLinkGroup from './SidebarLinkGroup';
import { LuListTodo } from "react-icons/lu";
import { AiFillMessage } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <Image
            width={176}
            height={32}
            src={"/images/logo/logo.svg"}
            alt="Logo"
            priority
          />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>


            <React.Fragment>
              {/* <!-- Dropdown Menu Start --> */}
              <div
                className={`translate transform overflow-hidden ${!open && "hidden"}`}
              >
                <ul className="mb-5.5 mt-4 flex flex-col gap-4 pl-6">

                  <SidebarLinkGroup
                    activeCondition={
                      pathname === "/" || pathname.includes("dashboard")
                    }
                  >
                    {(handleClick, open) => {
                      return (
                        <React.Fragment>
                          <Link
                            href="/dashboard/miCondominio"
                            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/" ||
                              pathname.includes("miCondominio")) &&
                              "bg-graydark dark:bg-meta-4"}`}
                          >
                            <FaBuilding size={20} />
                            Mi Condominio
                            <FaChevronDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180"}`} onClick={(e) => { e.preventDefault(); sidebarExpanded? handleClick(): setSidebarExpanded(true);}} />
                          </Link>
                          {/* <!-- Dropdown Menu Start --> */}
                          <div
                            className={`translate transform overflow-hidden ${!open && "hidden"}`}
                          >
                            <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                              <li>
                                <Link
                                  href="/dashboard/miCondominio/residentes"
                                  className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/dashboard/miCondominio/residentes" && "text-white"}`}
                                >
                                  <FaUsers size={20} />
                                  Residentes
                                </Link>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- Dropdown Menu End --> */}
                        </React.Fragment>
                      );
                    }}
                  </SidebarLinkGroup>
                  <SidebarLinkGroup
                    activeCondition={
                      pathname === "/dashboard/administracion" || pathname.includes("administracion")
                    }
                  >
                    {(handleClick, open) => {
                      return (
                        <React.Fragment>
                          <Link
                            href="/dashboard/administracion"
                            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/" ||
                              pathname.includes("administracion")) &&
                              "bg-graydark dark:bg-meta-4"}`}
                          >
                            <FaUserGear size={20} />
                            Administación
                            <FaChevronDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180"}`} onClick={(e) => { e.preventDefault(); sidebarExpanded? handleClick(): setSidebarExpanded(true);}} />
                          </Link>
                          {/* <!-- Dropdown Menu Start --> */}
                          <div
                            className={`translate transform overflow-hidden ${!open && "hidden"}`}
                          >
                            <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                              <li>
                                <Link
                                  href="/dashboard/administracion/pagos"
                                  className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/dashboard/administracion/pagos" && "text-white"}`}
                                >
                                  <MdOutlineAttachMoney size={20} />
                                  Pagos
                                </Link>
                              </li>  
                              <li>
                                <Link
                                  href="/dashboard/administracion/presupuestos"
                                  className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/dashboard/administracion/presupuestos" && "text-white"}`}
                                >
                                  <FaCalculator size={20} />
                                  Presupuestos
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/dashboard/administracion/fondos"
                                  className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/dashboard/administracion/fondos" && "text-white"}`}
                                >
                                  <FaPiggyBank size={20} />
                                  Fondos
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/dashboard/administracion/tareas"
                                  className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/dashboard/administracion/tareas" && "text-white"}`}
                                >
                                  <LuListTodo size={20} />
                                  Tareas
                                </Link>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- Dropdown Menu End --> */}
                        </React.Fragment>
                      );
                    }}
                  </SidebarLinkGroup>
                  <SidebarLinkGroup
                    activeCondition={
                      pathname === "/dashboard/comunicacion" || pathname.includes("comunicacion")
                    }
                  >
                    {(handleClick, open) => {
                      return (
                        <React.Fragment>
                          <Link
                            href="#"
                            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/" ||
                              pathname.includes("comunicacion")) &&
                              "bg-graydark dark:bg-meta-4"}`}
                          >
                            <AiFillMessage size={20} />
                            Comunicación
                            <FaChevronDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180"}`} onClick={(e) => { e.preventDefault(); sidebarExpanded? handleClick(): setSidebarExpanded(true);}} />
                          </Link>
                          {/* <!-- Dropdown Menu Start --> */}
                          <div
                            className={`translate transform overflow-hidden ${!open && "hidden"}`}
                          >
                            <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                            <li>
                                <Link
                                  href="/dashboard/comunicacion/anuncios"
                                  className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/dashboard/comunicacion/anuncios" && "text-white"}`}
                                >
                                  <HiSpeakerphone size={20} />
                                  Anuncios
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/dashboard/comunicacion/encuestas"
                                  className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/dashboard/comunicacion/encuestas" && "text-white"}`}
                                >
                                  <RiSurveyFill size={20} />
                                  Encuestas
                                </Link>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- Dropdown Menu End --> */}
                        </React.Fragment>
                      );
                    }}
                  </SidebarLinkGroup>
                  <li>
                    <Link
                      href="/dashboard/areasComunes"
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/dashboard/areasComunes" ||
                        pathname.includes("areasComunes")) &&
                        "bg-graydark dark:bg-meta-4"
                        }`}
                    >
                      <PiTreeEvergreenFill size={30} />
                      Reservación de Areas en Común
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/personal"
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "dashboard/personal" ||
                        pathname.includes("personal")) &&
                        "bg-graydark dark:bg-meta-4"
                        }`}
                    >
                      <FaHelmetSafety size={20} />
                      Personal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/seguridad"
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/dashboard/seguridad" ||
                        pathname.includes("seguridad")) &&
                        "bg-graydark dark:bg-meta-4"
                        }`}
                    >
                      <BsShieldLockFill size={20} />
                      Seguridad
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/sugerencias"
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/dashboard/sugerencias" ||
                        pathname.includes("sugerencias")) &&
                        "bg-graydark dark:bg-meta-4"
                        }`}
                    >
                      <MdMapsUgc size={20} />
                      Sugerencias
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!-- Dropdown Menu End --> */}
            </React.Fragment>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
