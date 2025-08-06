import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { PasswordInput } from "@/shared/components/ui/passwordInput";
import { Bug, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Separator } from "@/shared/components/ui/separator";
import MotionWrapper from "@/shared/animations/MotionWrapper";
import { toast } from "sonner";
import { login } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setAuthenticated } = useAuth();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;
      const { token } = await login({ email, password });
      setAuthenticated(token); // Update the context

      toast.success("Login successful", {
        position: "top-center",
        className: "text-green-700",
      });
      navigate("/dashboard", { replace: true });
    } catch (error: any) {
      toast.error(error.response.data.message || error.message, {
        position: "top-center",
        className: "text-red-700",
      });
    } finally {
      setLoading(false);
    }
  };

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
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your details below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-4 mt-2">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
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
                    required
                  />
                  <a
                    href="#"
                    className="ml-auto text-neutral-500 inline-block text-xs hover:text-neutral-300 transition"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-5 text-center">
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading && <Loader2 className="animate-spin" />}
                  Login
                </Button>
                <Link
                  to="/register"
                  className="text-neutral-500 inline-block text-xs hover:text-neutral-300 transition"
                >
                  Don't have an account? Create an account
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </MotionWrapper>
    </div>
  );
};

export default Login;
