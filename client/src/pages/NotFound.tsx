import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen p-4">
      <Card className="w-full max-w-md text-center">
        <CardContent>
          <div className="flex flex-col items-center gap-4 w-full">
            <img
              src="/images/404.png"
              alt="404 Illustration"
              className="w-full h-full object-cover aspect-square rounded-xl mb-3"
            />
            <div className="text-neutral-300 text-2xl font-semibold">
              Page Not Found
            </div>
            <p className="text-neutral-500">
              This page has slipped through the cracks. <br /> Even BugFlow
              can't track this one down.
            </p>
            <Link to="/" className="w-full mt-3">
              <Button variant="secondary" className="w-full">
                Go Back Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
