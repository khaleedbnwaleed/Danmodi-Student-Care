"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  GraduationCap,
  DollarSign,
  FileText,
  Calendar,
  Award,
  Bell,
  LogOut,
  User,
  BookOpen,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function StudentDashboard() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const userStr = localStorage.getItem("danmodi_user")
    if (userStr) {
      setUser(JSON.parse(userStr))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("danmodi_user")
    router.push("/")
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-700">Student Portal</h1>
                <p className="text-sm text-gray-600">Welcome back, {user.name}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                ← Back to Website
              </Link>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="ghost" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white mb-8">
          <h2 className="text-2xl font-bold mb-2">Welcome to Your Dashboard</h2>
          <p className="text-green-100">
            Track your scholarship status, academic progress, and stay updated with program announcements.
          </p>
          <div className="mt-4 flex items-center space-x-4 text-sm">
            <span>📍 {user.department || "Beneficiary"}</span>
            <span>🎓 Active Scholarship</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Scholarship Status</CardTitle>
              <Award className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Active</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">Approved</span> for 2024/2025
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current CGPA</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">4.2/5.0</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+0.3</span> from last semester
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Funds Received</CardTitle>
              <DollarSign className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">₦450K</div>
              <p className="text-xs text-muted-foreground">This academic year</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Year of Study</CardTitle>
              <BookOpen className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">3rd Year</div>
              <p className="text-xs text-muted-foreground">Medicine & Surgery</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Academic Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-green-500" />
                Academic Progress
              </CardTitle>
              <CardDescription>Your current academic standing and requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Overall Progress</span>
                  <span>60%</span>
                </div>
                <Progress value={60} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">3 of 5 years completed</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-green-900">Current Semester</p>
                    <p className="text-sm text-green-700">2024/2025 First Semester</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">In Progress</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium text-blue-900">Required CGPA</p>
                    <p className="text-sm text-blue-700">Maintain 3.5/5.0 minimum</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Met ✓</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div>
                    <p className="font-medium text-orange-900">Community Service</p>
                    <p className="text-sm text-orange-700">20 hours required annually</p>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800">15/20 hrs</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5 text-blue-500" />
                Recent Activities & Notifications
              </CardTitle>
              <CardDescription>Latest updates and announcements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-900">Scholarship Renewal Approved</p>
                    <p className="text-xs text-blue-700">
                      Your scholarship has been renewed for 2024/2025 academic year
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-green-900">Monthly Stipend Disbursed</p>
                    <p className="text-xs text-green-700">₦75,000 has been credited to your account</p>
                    <p className="text-xs text-gray-500 mt-1">1 week ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-yellow-900">Academic Report Due</p>
                    <p className="text-xs text-yellow-700">Submit your semester academic report by March 15th</p>
                    <p className="text-xs text-gray-500 mt-1">3 days remaining</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-purple-900">Mentorship Program</p>
                    <p className="text-xs text-purple-700">New mentorship session scheduled for next week</p>
                    <p className="text-xs text-gray-500 mt-1">1 week ago</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-transparent" variant="outline">
                View All Notifications
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and important links</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                variant="outline"
              >
                <FileText className="h-6 w-6" />
                <span className="text-sm">Submit Report</span>
              </Button>
              <Button
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                variant="outline"
              >
                <DollarSign className="h-6 w-6" />
                <span className="text-sm">Payment History</span>
              </Button>
              <Button
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                variant="outline"
              >
                <User className="h-6 w-6" />
                <span className="text-sm">Update Profile</span>
              </Button>
              <Button
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                variant="outline"
              >
                <Calendar className="h-6 w-6" />
                <span className="text-sm">Schedule Meeting</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
