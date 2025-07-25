import { AuthGuard } from "@/components/auth/auth-guard"
import { Dashboard } from "@/components/dashboard"

export default function PortalPage() {
  return (
    <AuthGuard requiredRole={["admin", "coordinator"]}>
      <Dashboard />
    </AuthGuard>
  )
}
