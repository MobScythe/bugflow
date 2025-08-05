import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bug, AlertCircleIcon, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PasswordInput } from "@/components/ui/passwordInput";
import { Separator } from "@/components/ui/separator";
import MotionWrapper from "@/animations/MotionWrapper";

const Register = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <div className="flex justify-center items-center h-screen p-4">
      <MotionWrapper className="w-full max-w-sm">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <a href="#" className="flex items-center gap-2 font-medium">
              <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                <Bug className="size-4" />
              </div>
              BugFlow
            </a>
            <Separator className="mt-4 mb-5" />
            <CardTitle>Create a new account</CardTitle>
            <CardDescription>
              Enter details below to create a new account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-4 mt-2">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="password">Password</Label>
                  <PasswordInput
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <PasswordInput
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                {/* <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertTitle>Error Creating Account</AlertTitle>
              </Alert> */}
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              {/* <Loader2 className="animate-spin" /> */}
              Register
            </Button>
            <Link
              to="/login"
              className="mt-2 text-neutral-500 inline-block text-xs hover:text-neutral-300 transition"
            >
              Already have an account? Login
            </Link>
          </CardFooter>
        </Card>
      </MotionWrapper>
    </div>
  );
};

export default Register;
