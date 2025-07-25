import { Header } from "./header"
import { Sidebar } from "./sidebar"
import { DashboardContent } from "./dashboard-content"

export function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <DashboardContent />
        </main>
      </div>
    </div>
  )
}
