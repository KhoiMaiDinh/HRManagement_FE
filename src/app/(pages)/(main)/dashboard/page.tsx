"use client";
import Calendar from "src/components/calendar";
import CircleProgress from "src/components/circleProgress";
import StackChart from "src/components/stackChart";
import { User } from "@nextui-org/react";
import AttendanceCalendar from "src/components/attendaceCalendar";
import DayCounter from "src/components/dayCounter";

const DashBoard = () => {
    return (
        <div className="flex flex-1 py-6 flex-col gap-y-10 md:px-8 px-3">
            <div className="flex flex-1">
                <div className="flex flex-col gap-y-10 w-4/6">
                    <User
                        className="self-start"
                        name={
                            <p className=" text-2xl font-medium">
                                Hi, {"Joe Henry"}
                            </p>
                        }
                        description={
                            <p className="text-[#C89E31]">Product Designer</p>
                        }
                        avatarProps={{
                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                            size: "lg",
                        }}
                    />
                    <div className="flex gap-5 flex-col flex-wrap md:flex-row xl:flex-nowrap">
                        <CircleProgress
                            label="Total employees"
                            percentage={100}
                            color="success"
                        />
                        <CircleProgress
                            label="Late employees"
                            percentage={70}
                            color="warning"
                        />
                        <CircleProgress
                            label="Absent employees"
                            percentage={30}
                            color="danger"
                        />
                    </div>
                    <StackChart />
                </div>
                <div className="flex flex-col gap-y-8 w-2/6 pl-5 items-center">
                    <AttendanceCalendar />
                    <DayCounter />
                </div>
            </div>

            <Calendar />
        </div>
    );
};

export default DashBoard;