"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React from "react";

const WorkspaceList = () => {
  const { user } = useUser();
  return (
    <div className="my-10 p-10 md:px-24 lg:px-36 xl:px-52">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Hello, {user?.fullName} </h1>
        <Button>+</Button>
      </div>
      <div>
        <div className="mt-10">
          <h2 className="font-medium text-primary   ">Workspaces</h2>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceList;
