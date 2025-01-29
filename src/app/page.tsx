import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button>
        Click me <Link href="/documents/144">Go to Document</Link>
      </Button>
    </div>
  );
};

export default Home;