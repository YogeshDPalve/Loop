"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SmilePlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const CreateWorkspace = () => {
  const [coverImage, setCoverImage] = useState("/cover.png");
  const [workspaceName, setWorkspaceName] = useState();
  return (
    <div className="p-10 md:px-36 lg:px:64 xl:px-96 py-28">
      <div className='shadow-2xl rounded-xl'>
        {/* cover Image */}

        <div className="relative group cursor-pointer">
          <h2 className=" hidden absolute p-4 w-full h-full items-center justify-center group-hover:flex font-bold">
            Change Cover
          </h2>
          <div className="group-hover:opacity-40">
            <Image
              src={coverImage}
              width={400}
              height={400}
              alt="coverImage"
              className="w-full h-[150px] object-cover rounded-t-xl"
            />
          </div>
        </div>
        {/* input section */}
        <div className="p-12">
          <h2 className='font-medium text-xl'>Create a new workspace</h2>
          <h2 className="text-sm mt-2">
            This is a shared space where you can collaborate with your team You
            can always rename it later.
          </h2>
          <div className="mt-8 flex items-center gap-2">
            <Button variant="outline">
              <SmilePlus />
            </Button>
            <Input
              placeholder="Workspace Name"
              onChange={(e) => setWorkspaceName(e.target.value)}
            />
          </div>
          <div className="mt-7 flex justify-end gap-6">
            <Button disabled={!workspaceName?.length}>Create</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkspace;
