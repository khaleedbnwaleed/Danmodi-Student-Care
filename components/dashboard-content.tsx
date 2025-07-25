import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Users, GraduationCap, MapPin, DollarSign, TrendingUp } from "lucide-react"

export function DashboardContent() {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome to Danmodi Students Care Portal</h2>
        <p className="text-green-100">
          Empowering underprivileged and rural students across all 27 LGAs of Jigawa State
        </p>
        <div className="mt-4 flex items-center space-x-4 text-sm">
          <span>📍 Dutse, Jigawa State</span>
          <span>🌐 danmodistudentscare.com.ng</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Beneficiaries</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">2,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+156</span> this academic year
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Scholarships</CardTitle>
            <GraduationCap className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">1,234</div>
            <p className="text-xs text-muted-foreground">Across undergraduate & postgraduate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">LGAs Covered</CardTitle>
            <MapPin className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">27/27</div>
            <p className="text-xs text-muted-foreground">100% coverage achieved</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Funds Disbursed</CardTitle>
            <DollarSign className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">₦2.8B</div>
            <p className="text-xs text-muted-foreground">This fiscal year</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Applications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <GraduationCap className="mr-2 h-5 w-5 text-green-500" />
              Recent Scholarship Applications
            </CardTitle>
            <CardDescription>Latest applications requiring review</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium text-blue-900">Aisha Mohammed - Medicine</p>
                <p className="text-sm text-blue-700">Dutse LGA • Ahmadu Bello University</p>
              </div>
              <Badge className="bg-blue-100 text-blue-800">Pending</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium text-green-900">Ibrahim Sani - Engineering</p>
                <p className="text-sm text-green-700">Hadejia LGA • Federal University of Technology</p>
              </div>
              <Badge className="bg-green-100 text-green-800">Approved</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div>
                <p className="font-medium text-orange-900">Fatima Usman - Agriculture</p>
                <p className="text-sm text-orange-700">Ringim LGA • University of Agriculture</p>
              </div>
              <Badge className="bg-orange-100 text-orange-800">Review</Badge>
            </div>
            <Button className="w-full bg-transparent" variant="outline">
              View All Applications
            </Button>
          </CardContent>
        </Card>

        {/* Priority Programs */}
        <Card>
          <CardHeader>
            <CardTitle>Priority Programs & Special Quotas</CardTitle>
            <CardDescription>Focus areas and vulnerable group support</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Medical Students</span>
                <Badge variant="secondary">High Priority</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Engineering Students</span>
                <Badge variant="secondary">High Priority</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Agriculture Students</span>
                <Badge variant="secondary">High Priority</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Students with Disabilities</span>
                <Badge className="bg-purple-100 text-purple-800">Special Quota</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Women in Health</span>
                <Badge className="bg-pink-100 text-pink-800">Special Quota</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Extremely Poor Background</span>
                <Badge className="bg-red-100 text-red-800">Special Quota</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* LGA Distribution & Performance Tracking */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Top Performing LGAs</CardTitle>
            <CardDescription>Beneficiary distribution and academic performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Dutse LGA</p>
                    <p className="text-sm text-muted-foreground">234 beneficiaries • 92% success rate</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Excellent</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Hadejia LGA</p>
                    <p className="text-sm text-muted-foreground">187 beneficiaries • 89% success rate</p>
                  </div>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Very Good</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Ringim LGA</p>
                    <p className="text-sm text-muted-foreground">156 beneficiaries • 87% success rate</p>
                  </div>
                </div>
                <Badge className="bg-purple-100 text-purple-800">Good</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <p className="font-medium">Gumel LGA</p>
                    <p className="text-sm text-muted-foreground">143 beneficiaries • 85% success rate</p>
                  </div>
                </div>
                <Badge className="bg-orange-100 text-orange-800">Good</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Program Goals 2024</CardTitle>
            <CardDescription>Annual targets and progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>New Scholarships</span>
                <span>678/800</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Admission Support</span>
                <span>1,234/1,500</span>
              </div>
              <Progress value={82} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>LGA Coverage</span>
                <span>27/27</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Fund Utilization</span>
                <span>₦2.8B/₦3.2B</span>
              </div>
              <Progress value={88} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Academic Success Rate</span>
                <span>89%</span>
              </div>
              <Progress value={89} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              variant="outline"
            >
              <GraduationCap className="h-6 w-6" />
              <span className="text-sm">New Application</span>
            </Button>
            <Button
              className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              variant="outline"
            >
              <Users className="h-6 w-6" />
              <span className="text-sm">Beneficiary Review</span>
            </Button>
            <Button
              className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              variant="outline"
            >
              <DollarSign className="h-6 w-6" />
              <span className="text-sm">Fund Disbursement</span>
            </Button>
            <Button
              className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              variant="outline"
            >
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm">Generate Report</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
