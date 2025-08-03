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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/passwordInput";
import { Bug } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState<string>("");

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-950">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <div className="mb-4 pb-5 border-b border-neutral-800">
            <a href="#" className="flex items-center gap-2 font-medium">
              <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                <Bug className="size-4" />
              </div>
              BugFlow
            </a>
          </div>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your details below to login to your account
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
                <a
                  href="#"
                  className="ml-auto text-neutral-500 inline-block text-xs hover:text-neutral-300 transition"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Link
            to="/register"
            className="mt-2 text-neutral-500 inline-block text-xs hover:text-neutral-300 transition"
          >
            Don't have an account? Create an account
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
