import { Button } from '@/components/Button/'
import { Title } from '@/components/Title'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center align-middle">
      <Title text="Home" />
      <Link href="/Listagem">
        <Button text="Ir para Listagem" />
      </Link>
    </div>
  )
}
