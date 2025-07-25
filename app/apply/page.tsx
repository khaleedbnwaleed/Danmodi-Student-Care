import { AuthGuard } from "@/components/auth/auth-guard"
import { ScholarshipApplication } from "@/components/scholarship-application"

export default function ApplyPage() {
  return (
    <AuthGuard requiredRole={["student", "applicant"]}>
      <ScholarshipApplication />
    </AuthGuard>
  )
}
