"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Eye, EyeOff, User, Mail, Phone, ArrowLeft, AlertCircle, CheckCircle, GraduationCap } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const jigawaLGAs = [
  "Auyo",
  "Babura",
  "Biriniwa",
  "Birnin Kudu",
  "Buji",
  "Dutse",
  "Gagarawa",
  "Garki",
  "Gumel",
  "Guri",
  "Gwaram",
  "Gwiwa",
  "Hadejia",
  "Jahun",
  "Kafin Hausa",
  "Kaugama",
  "Kazaure",
  "Kiri Kasama",
  "Kiyawa",
  "Maigatari",
  "Malam Madori",
  "Miga",
  "Ringim",
  "Roni",
  "Sule Tankarkar",
  "Taura",
  "Yankwashi",
]

export function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    lga: "",
    accountType: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError("")
    setSuccess("")
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess("")

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long")
      setIsLoading(false)
      return
    }

    if (!formData.agreeToTerms) {
      setError("Please agree to the terms and conditions")
      setIsLoading(false)
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Check if email already exists (simulate)
    const existingUsers = JSON.parse(localStorage.getItem("danmodi_users") || "[]")
    if (existingUsers.find((user: any) => user.email === formData.email)) {
      setError("An account with this email already exists")
      setIsLoading(false)
      return
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      lga: formData.lga,
      accountType: formData.accountType,
      role: formData.accountType === "student" ? "student" : "applicant",
      status: "active", // Allow immediate access for demo
      createdAt: new Date().toISOString(),
    }

    // Save to localStorage (simulate database)
    existingUsers.push(newUser)
    localStorage.setItem("danmodi_users", JSON.stringify(existingUsers))

    // Auto-login the new user
    localStorage.setItem(
      "danmodi_user",
      JSON.stringify({
        email: newUser.email,
        role: newUser.role,
        name: `${newUser.firstName} ${newUser.lastName}`,
        department: newUser.accountType === "student" ? "Current Beneficiary" : "New Applicant",
        loginTime: new Date().toISOString(),
      }),
    )

    setSuccess("Account created successfully! Redirecting to application...")

    // Redirect based on account type
    setTimeout(() => {
      if (formData.accountType === "student") {
        router.push("/portal/student")
      } else {
        router.push("/apply")
      }
    }, 2000)

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">DC</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-600">Join Danmodi Students Care Portal</p>
        </div>

        {/* Info Card */}
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center">
              <GraduationCap className="h-4 w-4 text-green-600 mr-2" />
              Why Create an Account?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-xs text-green-700 space-y-1">
              <p>✓ Apply for scholarships and track your application</p>
              <p>✓ Save your progress and continue later</p>
              <p>✓ Receive important updates and notifications</p>
              <p>✓ Access your personalized dashboard</p>
            </div>
          </CardContent>
        </Card>

        {/* Signup Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              Sign Up
            </CardTitle>
            <CardDescription>Create your account to access the portal and apply for scholarships</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-700">{success}</AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Enter first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
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
                <Label htmlFor="phone">Phone Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+234 xxx xxx xxxx"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lga">Local Government Area *</Label>
                <Select value={formData.lga} onValueChange={(value) => handleInputChange("lga", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your LGA" />
                  </SelectTrigger>
                  <SelectContent>
                    {jigawaLGAs.map((lga) => (
                      <SelectItem key={lga} value={lga}>
                        {lga}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accountType">Account Type *</Label>
                <Select value={formData.accountType} onValueChange={(value) => handleInputChange("accountType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select account type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="applicant">
                      <div className="flex items-center justify-between w-full">
                        <span>New Applicant</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          Apply for Scholarship
                        </Badge>
                      </div>
                    </SelectItem>
                    <SelectItem value="student">
                      <div className="flex items-center justify-between w-full">
                        <span>Current Beneficiary</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          Access Dashboard
                        </Badge>
                      </div>
                    </SelectItem>
                    <SelectItem value="parent">Parent/Guardian</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    placeholder="Create a password (min. 6 characters)"
                    className="pr-10"
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

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    placeholder="Confirm your password"
                    className="pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked)}
                />
                <Label htmlFor="agreeToTerms" className="text-sm">
                  I agree to the{" "}
                  <Link href="#" className="text-green-600 hover:underline">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-green-600 hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Account & Continue"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-green-600 hover:underline font-medium">
                  Sign in here
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
