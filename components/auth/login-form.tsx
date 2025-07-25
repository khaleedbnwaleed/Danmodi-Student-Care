"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Eye, EyeOff, Lock, Mail, ArrowLeft, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Demo accounts for testing
const demoAccounts = [
  {
    email: "admin@danmodi.gov.ng",
    password: "admin123",
    role: "admin",
    name: "Senior Special Assistant",
    department: "Student Affairs Office",
  },
  {
    email: "coordinator@danmodi.gov.ng",
    password: "coord123",
    role: "coordinator",
    name: "Program Coordinator",
    department: "Scholarship Management",
  },
  {
    email: "student@example.com",
    password: "student123",
    role: "student",
    name: "Aisha Mohammed",
    department: "Beneficiary",
  },
]

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError("")
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check demo accounts
    const account = demoAccounts.find((acc) => acc.email === formData.email && acc.password === formData.password)

    if (account) {
      // Store user session
      localStorage.setItem(
        "danmodi_user",
        JSON.stringify({
          email: account.email,
          role: account.role,
          name: account.name,
          department: account.department,
          loginTime: new Date().toISOString(),
        }),
      )

      // Redirect based on role
      if (account.role === "admin" || account.role === "coordinator") {
        router.push("/portal")
      } else {
        router.push("/portal/student")
      }
    } else {
      setError("Invalid email or password. Please check the demo credentials below.")
    }

    setIsLoading(false)
  }

  const handleDemoLogin = (account: (typeof demoAccounts)[0]) => {
    setFormData({
      email: account.email,
      password: account.password,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">DC</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Portal Access</h1>
          <p className="text-gray-600">Danmodi Students Care - Jigawa State</p>
        </div>

        {/* Demo Credentials */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center">
              <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
              Demo Login Credentials
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {demoAccounts.map((account, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-white rounded border">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        account.role === "admin" ? "default" : account.role === "coordinator" ? "secondary" : "outline"
                      }
                      className="text-xs"
                    >
                      {account.role}
                    </Badge>
                    <span className="text-sm font-medium">{account.name}</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {account.email} / {account.password}
                  </div>
                </div>
                <Button size="sm" variant="ghost" onClick={() => handleDemoLogin(account)} className="text-xs">
                  Use
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Login Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="mr-2 h-5 w-5" />
              Sign In
            </CardTitle>
            <CardDescription>Enter your credentials to access the portal</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" className="rounded" />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
                <Link href="#" className="text-sm text-green-600 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/signup" className="text-green-600 hover:underline font-medium">
                  Sign up here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center">
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:text-green-600">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
