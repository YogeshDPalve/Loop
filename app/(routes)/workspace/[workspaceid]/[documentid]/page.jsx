"use client";
import React, { useEffect, useState } from "react";
import SideNav from "../../_components/SideNav";
import DocumentEditorSection from "../../_components/DocumentEditorSection";
import { Room } from "@/app/Room";
import { SideNavSkeleton } from "../../_components/SideNavSkeleton";
import { DocumentEditorSectionSkeleton } from "../../_components/DocumentEditorSectionSkeleton";

function WorkspaceDocument({ params }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params) {
      // Simulate loading delay or data fetching
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // Adjust time based on your needs

      return () => clearTimeout(timer);
    }
  }, [params]);

  return (
    <Room params={params}>
      <div className="flex">
        {/* Side Nav */}
        <aside className="w-72 hidden md:block">
          {loading ? <SideNavSkeleton /> : <SideNav params={params} />}
        </aside>

        {/* Document Editor Section */}
        <main className="flex-1 md:ml-72">
          {loading ? (
            <DocumentEditorSectionSkeleton />
          ) : (
            <DocumentEditorSection params={params} />
          )}
        </main>
      </div>
    </Room>
  );
}

export default WorkspaceDocument;
