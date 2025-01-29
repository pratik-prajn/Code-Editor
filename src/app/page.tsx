"use client";

import { useQuery } from "convex/react";
import Link from "next/link";
import { api } from "../../convex/_generated/api";
// import { api } from "../convex/_generated/api";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import Landing from "./landing"

const Home = () => {
  const documents = useQuery(api.documents.get);
  if (documents===undefined){
    return(
      <p>loading...</p>
    )
  }
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* <Button>
        Click me <Link href="/documents/144">Go to Document</Link>
      </Button> */}
      <Landing/>

      {documents?.map((document ) =>
        <span key={document._id}>{document.title}</span>)}
    </div>
  );
};

export default Home;