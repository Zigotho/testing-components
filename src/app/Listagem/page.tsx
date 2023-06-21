import { Button } from '@/components/Button/'
import { List } from '@/components/List/'
import Link from 'next/link'

export default function Listagem() {
  return (
    <div className="flex h-screen flex-col items-center justify-center align-middle">
      <List renderList={['ola', 'teste']} />
      <Link href="/">
        <Button text="Ir para Home" />
      </Link>
    </div>
  )
}
