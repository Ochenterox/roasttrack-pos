"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formText = {
  title: "Join RoastTrack",
  subtitle: "Create your coffee shop account",
  emailLabel: "Email",
  emailPlaceholder: "m@example.com",
  passwordLabel: "Password",
  confirmPasswordLabel: "Confirm Password",
  forgotPassword: "Forgot your password?",
  button: "Create account",
  footerPrompt: "Already have an account?",
  footerAction: "Login",
  termsText: "By clicking continue, you agree to our",
  termsLink: "Terms of Service",
  privacyLink: "Privacy Policy",
};

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">{formText.title}</h1>
                <p className="text-muted-foreground text-balance">
                  {formText.subtitle}
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">{formText.emailLabel}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={formText.emailPlaceholder}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">{formText.passwordLabel}</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="confirm-password">
                  {formText.confirmPasswordLabel}
                </Label>
                <Input id="confirm-password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                {formText.button}
              </Button>

              <div className="text-center text-sm">
                {formText.footerPrompt}{" "}
                <a href="#" className="underline underline-offset-4">
                  {formText.footerAction}
                </a>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        {formText.termsText} <a href="#">{formText.termsLink}</a> and{" "}
        <a href="#">{formText.privacyLink}</a>.
      </div>
    </div>
  );
}
