import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const Landing = () => {
  return (
    
      <Button className="bg-white text-purple-700 hover:bg-purple-100">
        <Link href="/documents/144">Go to Document</Link>
      </Button>

      
  );
};

export default Landing;