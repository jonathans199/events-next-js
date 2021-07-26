import { useRouter } from 'next/router'

export default function NotFoundPage() {
  const router = useRouter()

  return <h1>Sorry content not found here</h1>
}
