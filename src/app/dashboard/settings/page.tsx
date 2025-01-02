import { Header } from "@/components/header"
import { Separator } from "@/components/ui/separator"
import { ProfileForm } from "@/components/settings/profile-form"
import { NotificationsForm } from "@/components/settings/notifications-form"
import { AppearanceForm } from "@/components/settings/appearance-form"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:w-1/5">
            <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
              <a
                href="#profile"
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
              >
                Profile
              </a>
              <a
                href="#notifications"
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
              >
                Notifications
              </a>
              <a
                href="#appearance"
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
              >
                Appearance
              </a>
            </nav>
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <div className="space-y-6">
              <div id="profile">
                <ProfileForm />
              </div>
              <Separator />
              <div id="notifications">
                <NotificationsForm />
              </div>
              <Separator />
              <div id="appearance">
                <AppearanceForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

