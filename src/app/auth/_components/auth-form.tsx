"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {signIn} from "next-auth/react"
import { toast } from "@/components/ui/use-toast";

export function AuthForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit( async(data) => {
   try{
    await signIn("email", { email: data.email, redirect: false });
    toast({
      title:"Check your email for a login link",
      description:"If it doesn't appear, check your spam folder",
    })
   }catch(error){
     console.log(error)
     toast({
      title:"Something went wrong",
      description:"An erro ocurred, please try again",
     })
   }

  });

  return (
    <div className=" h-screen flex items-center justify-center">
      <Card className="px-0 w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold ">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                {...form.register("email")}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Magic Link
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
