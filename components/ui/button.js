import Link from 'next/link'

export default function Button(props) {
  return (
    <Link href={props.link}>
      <a className='btn'>{props.children}</a>
    </Link>
  )
}
