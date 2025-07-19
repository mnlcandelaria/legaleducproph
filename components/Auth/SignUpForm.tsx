import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link";

export function SignUpForm({
                               className,
                               ...props
                           }: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    {/* Left Side - Image */}
                    <div className="bg-muted relative hidden md:block">
                        <Image
                            width={600}
                            height={900}
                            src="/images/books-bg.jpg"
                            alt="Signup"
                            className="absolute h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/30 z-10" />
                    </div>

                    {/* Right Side - Form */}
                    <form className="p-6 md:p-8 z-20">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Create an account</h1>
                                <p className="text-muted-foreground text-balance">
                                    Join LegalEducProPH to get started
                                </p>
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" type="text" placeholder="John Doe" required />
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="m@example.com" required />
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" required />
                            </div>

                            <Button type="submit" className="w-full">
                                Sign Up
                            </Button>

                            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <Button variant="outline" type="button" className="w-full">Google</Button>
                                <Button variant="outline" type="button" className="w-full">Meta</Button>
                                <Button variant="outline" type="button" className="w-full">Apple</Button>
                            </div>

                            <div className="text-center text-sm">
                                Already have an account?{" "}
                                <a href="/login" className="underline underline-offset-4">
                                    Login
                                </a>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>

            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                By signing up, you agree to our <Link href="/legal/terms">Terms of Service</Link>. and{" "}
                <Link href="/legal/privacy">Privacy Policy</Link>..
            </div>
        </div>
    )
}
