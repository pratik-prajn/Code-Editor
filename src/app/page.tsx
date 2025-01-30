"use client";

import { useQuery } from "convex/react";
import Link from "next/link";
import { api } from "../../convex/_generated/api";
// import { api } from "../convex/_generated/api";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import Landing from "./landing"
import Navbar from "./home/navbar";
import FullScreenLoader from "../components/fullscreenloader"

const Home = () => {
  const documents = useQuery(api.documents.get);
  if (documents===undefined){
    return(
      <FullScreenLoader/>
    )
  }
  return (
    <div>
    <Navbar/>
      <div className="flex min-h-screen items-center justify-center">
          <Landing/>

      </div>

      <div className="relative flex min-h-screen items-center justify-center top-0">
      {documents?.map((document ) =>
        <span key={document._id}>{document.content}</span>)}
      </div>

    </div>
  );
};

export default Home;