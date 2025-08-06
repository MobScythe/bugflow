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
import { Bug, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { PasswordInput } from "@/shared/components/ui/passwordInput";
import { Separator } from "@/shared/components/ui/separator";
import { toast } from "sonner";
import MotionWrapper from "@/shared/animations/MotionWrapper";
import { register } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();
  const { setAuthenticated } = useAuth();

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-center",
        className: "text-red-700",
      });
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const { token } = await register({ name, email, password });
      setAuthenticated(token);
      toast.success("Registration successful", {
        position: "top-center",
        className: "text-green-700",
      });
      navigate("/login", { replace: true });
    } catch (error: any) {
      toast.error(error.message, {
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
            <CardTitle>Create a new account</CardTitle>
            <CardDescription>
              Enter details below to create a new account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister}>
              <div className="flex flex-col gap-4 mt-2">
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
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
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <PasswordInput
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-5 text-center">
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading && <Loader2 className="animate-spin" />}
                  Register
                </Button>
                <Link
                  to="/login"
                  className="text-neutral-500 inline-block text-xs hover:text-neutral-300 transition"
                >
                  Already have an account? Login
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </MotionWrapper>
    </div>
  );
};

export default Register;
