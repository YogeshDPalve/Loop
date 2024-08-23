// Dashboard.jsx
"use client";

import React, { useEffect, useState } from "react";
import Header from "./_components/Header";
import WorkspaceList from "./_components/WorkspaceList";
import { HeaderSkeleton } from "./_components/HeaderSkeleton";
import { WorkspaceListSkeleton } from "./_components/WorkspaceListSkeleton";

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <HeaderSkeleton /> : <Header />}
      {loading ? <WorkspaceListSkeleton /> : <WorkspaceList />}
    </div>
  );
}

export default Dashboard;
