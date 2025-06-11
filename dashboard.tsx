import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const session = useSession()
  const supabase = useSupabaseClient()
  const router = useRouter()

  useEffect(() => {
    if (!session) router.push('/login')
  }, [session])

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Meu Cronograma</h2>
      <p>Bem-vindo, {session?.user?.email}</p>
    </div>
  )
}