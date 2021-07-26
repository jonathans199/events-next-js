import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav className='navigation'>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href={'/events'}>
          <a>Events</a>
        </Link>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
      </nav>
    </header>
  )
}
