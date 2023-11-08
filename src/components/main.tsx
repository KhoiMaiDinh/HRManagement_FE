"use client";
import { useState } from "react";
import Footer from "./footer";
import SideBar, { SideBarMode } from "./sideBar";
import TraceBar from "./tracebar";
import { SideBarOptionType } from "./optionButton";
import {
    HomeIcon,
    PresentationChartLineIcon,
    SalaryIcon,
    UserIcon,
} from "src/svgs";
import { useSelectedLayoutSegments } from "next/navigation";
import Header from "./header";

const Main = ({ children }: { children: React.ReactNode }) => {
    const initMode: SideBarMode = SideBarMode.Large;
    const [mode, setMode] = useState<SideBarMode>(initMode);
    const SideBarOps: SideBarOptionType[] = [
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: HomeIcon,
            subSidebar: [],
            isHidden: false,
        },
        {
            name: "Attendance",
            href: "/attendance",
            icon: UserIcon,
            subSidebar: [
                {
                    name: "Attendance Form",
                    href: "/form",
                },
                {
                    name: "Monthly Attendance",
                    href: "/monthly",
                },
                {
                    name: "Absent",
                    href: "/absent",
                },
                {
                    name: "Absent form",
                    href: "/absent-form",
                },
                {
                    name: "ArriveLate / Out early",
                    href: "/arrive-late-leave-early",
                },
                {
                    name: "Attendance list",
                    href: "/list",
                },
                {
                    name: "Attendance log",
                    href: "/log",
                },
            ],
            isHidden: false,
        },
        {
            name: "Reports",
            href: "/reports",
            icon: PresentationChartLineIcon,
            subSidebar: [
                {
                    name: "Attendance report",
                    href: "/attendance",
                },
                {
                    name: "Leave report",
                    href: "/leave",
                },
                {
                    name: "New attendance report",
                    href: "/new-attendance",
                },
                {
                    name: "Outcome report",
                    href: "/outcome",
                },
            ],
            isHidden: false,
        },
        {
            name: "Salary",
            href: "/salary",
            icon: SalaryIcon,
            subSidebar: [],
            isHidden: false,
        },
        {
            name: "Account",
            href: "/account",
            icon: SalaryIcon,
            subSidebar: [
                {
                    name: "Profile",
                    href: "/profile",
                },
                {
                    name: "Edit Profile",
                    href: "/edit-profile",
                },
            ],
            isHidden: true,
        },
    ];
    const segments = useSelectedLayoutSegments();
    const option = SideBarOps.find((opt) => opt.href == "/" + segments[0]);
    const subOption = option?.subSidebar.find(
        (subOpt) => subOpt.href == "/" + segments[1]
    );
    return (
        <>
            <Header mode={mode} setMode={setMode} />
            <div className="flex absolute w-full pt-[3.5rem]">
                <SideBar
                    mode={mode}
                    setMode={setMode}
                    SideBarOps={SideBarOps}
                />
                <div
                    className={
                        " flex min-h-[calc(100vh-3.5rem)] flex-col absolute right-0 overflow-y duration-300 -z-10 w-full bg-[#FEFAEE] " +
                        (mode == SideBarMode.Large
                            ? " md:w-[calc(100%-14rem)]"
                            : " md:w-[calc(100%-56px)]")
                    }
                >
                    {option?.href !== "/dashboard" && (
                        <TraceBar option={option} subOption={subOption} />
                    )}
                    <div className="flex flex-col flex-1 h-full ">
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Main;
