import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Separator } from "@/shared/components/ui/separator";
import { CalendarFold, MoreHorizontal } from "lucide-react";

const ProjectCard = () => {
  return (
    <Card className="w-full gap-5 py-5 overflow-hidden">
      <CardHeader className="flex justify-between">
        <div className="h-20 w-20 bg-black rounded-2xl"></div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Copy payment ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 w-full">
        <div className="text-neutral-300 text-lg font-semibold">
          Project Title
        </div>
        <p className="text-neutral-500 text-sm">
          Project description goes here. More details about the project. More
          details about the project.
        </p>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between items-center w-full">
        <div className="h-8 w-8 bg-neutral-700 rounded-full"></div>
        <div className="text-neutral-500 text-sm font-semibold inline-flex items-center gap-2">
          <CalendarFold size={19} />
          12 May 2023
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
