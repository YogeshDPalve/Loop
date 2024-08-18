"use client";
import Logo from "@/app/_components/Logo";
import { OrganizationSwitcher, UserButton, useAuth } from "@clerk/nextjs";
import React from "react";
import {} from "@clerk/nextjs";

const Header = () => {
  const { orgId } = useAuth();
  console.log(orgId);
  return (
    <div className="flex justify-between items-center p-3 shadow-sm">
      <Logo />
      <OrganizationSwitcher
        afterCreateOrganizationUrl={"/dashboard"}
        afterLeaveOrganizationUrl={"/dashboard"}
      />
      <UserButton />
    </div>
  );
};

export default Header;
