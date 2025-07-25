"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Lock, UserPlus, LogIn } from "lucide-react"
import Link from "next/link"

interface AuthGuardProps {
  children: React.ReactNode
  requiredRole?: string[]
  allowUnauthenticated?: boolean
}

export function AuthGuard({ children, requiredRole, allowUnauthenticated = false }: AuthGuardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState<string | null>(null)
  const [showAuthRequired, setShowAuthRequired] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const userStr = localStorage.getItem("danmodi_user")

      if (!userStr) {
        if (allowUnauthenticated) {
          setIsAuthenticated(false)
          setIsLoading(false)
          return
        }
        setShowAuthRequired(true)
        setIsLoading(false)
        return
      }

      try {
        const user = JSON.parse(userStr)

        // Check if user session is still valid (24 hours)
        const loginTime = new Date(user.loginTime)
        const now = new Date()
        const hoursDiff = (now.getTime() - loginTime.getTime()) / (1000 * 60 * 60)

        if (hoursDiff > 24) {
          localStorage.removeItem("danmodi_user")
          if (allowUnauthenticated) {
            setIsAuthenticated(false)
            setIsLoading(false)
            return
          }
          setShowAuthRequired(true)
          setIsLoading(false)
          return
        }

        // Check role if required
        if (requiredRole && !requiredRole.includes(user.role)) {
          router.push("/unauthorized")
          return
        }

        setIsAuthenticated(true)
        setUserRole(user.role)
      } catch (error) {
        localStorage.removeItem("danmodi_user")
        if (allowUnauthenticated) {
          setIsAuthenticated(false)
          setIsLoading(false)
          return
        }
        setShowAuthRequired(true)
        setIsLoading(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router, requiredRole, allowUnauthenticated])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-96">
          <CardContent className="flex items-center justify-center p-8">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin text-green-600 mx-auto mb-4" />
              <p className="text-gray-600">Verifying access...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showAuthRequired) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">DC</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Authentication Required</h1>
            <p className="text-gray-600">Danmodi Students Care Portal</p>
          </div>

          {/* Auth Required Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-2 h-5 w-5 text-orange-500" />
                Login Required
              </CardTitle>
              <CardDescription>You need to be logged in to access this page</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="border-orange-200 bg-orange-50">
                <Lock className="h-4 w-4 text-orange-600" />
                <AlertDescription className="text-orange-700">
                  To apply for a scholarship or access portal features, you must first create an account or log in with
                  your existing credentials.
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  <strong>New to Danmodi Students Care?</strong>
                  <p>Create an account to start your scholarship application.</p>
                </div>

                <Link href="/signup">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Create New Account
                  </Button>
                </Link>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <strong>Already have an account?</strong>
                  <p>Sign in to continue your application or access your dashboard.</p>
                </div>

                <Link href="/login">
                  <Button variant="outline" className="w-full bg-transparent">
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In to Existing Account
                  </Button>
                </Link>
              </div>

              <div className="pt-4 border-t">
                <div className="text-xs text-gray-500 space-y-1">
                  <p>
                    <strong>Benefits of creating an account:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Save and continue your application later</li>
                    <li>Track your application status</li>
                    <li>Receive important updates and notifications</li>
                    <li>Access your scholarship dashboard</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="text-center">
            <Link href="/">
              <Button variant="ghost" className="text-gray-600 hover:text-green-600">
                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated && !allowUnauthenticated) {
    return null
  }

  return <>{children}</>
}
