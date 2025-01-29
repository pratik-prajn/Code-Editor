import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const Landing = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 overflow-hidden">
      <h1 className="text-5xl font-extrabold text-white mb-8">Welcome to the Docs App</h1>
      <p className="text-xl text-white mb-8">Create, edit, and manage your documents with ease.</p>
      <Button className="bg-white text-purple-700 hover:bg-purple-100">
        <Link href="/documents/144">Go to Document</Link>
      </Button>

      {/* Animated Ball */}
      

      <style jsx>{`
        @keyframes car {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-50vw);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-car {
          animation: car 5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Landing;