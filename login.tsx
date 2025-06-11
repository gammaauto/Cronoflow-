import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'

export default function Login() {
  const supabase = createPagesBrowserClient()

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="light" providers={[]} />
    </div>
  )
}