import {
  Home,
  Users,
  GraduationCap,
  MapPin,
  DollarSign,
  FileText,
  BarChart3,
  Settings,
  UserCheck,
  Building,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const navigation = [
  { name: "Dashboard", icon: Home, current: true },
  { name: "Scholarship Applications", icon: GraduationCap, current: false },
  { name: "Beneficiaries", icon: Users, current: false },
  { name: "LGA Distribution", icon: MapPin, current: false },
  { name: "Admission Support", icon: UserCheck, current: false },
  { name: "Financial Management", icon: DollarSign, current: false },
  { name: "Academic Monitoring", icon: BarChart3, current: false },
  { name: "Special Quotas", icon: Building, current: false },
  { name: "Reports", icon: FileText, current: false },
  { name: "Settings", icon: Settings, current: false },
]

export function Sidebar() {
  return (
    <div className="bg-white w-64 shadow-lg border-r border-gray-200">
      <div className="p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full mx-auto mb-3 flex items-center justify-center">
            <span className="text-white font-bold text-xl">DSC</span>
          </div>
          <p className="text-sm text-gray-600">Management Portal</p>
        </div>
      </div>

      <nav className="mt-6 px-3">
        <div className="space-y-1">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant={item.current ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start text-sm",
                item.current && "bg-green-50 text-green-700 hover:bg-green-100",
              )}
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.name}
            </Button>
          ))}
        </div>
      </nav>
      <div className="mt-8 px-3">
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start text-sm text-gray-600">
            <Globe className="mr-3 h-4 w-4" />
            Public Website
          </Button>
        </Link>
      </div>
    </div>
  )
}
