import { AuthGuard } from "@/components/auth/auth-guard"
import { StudentDashboard } from "@/components/student-dashboard"

export default function StudentPortalPage() {
  return (
    <AuthGuard requiredRole={["student"]}>
      <StudentDashboard />
    </AuthGuard>
  )
}
