import { useRouter } from 'next/router'
import Image from 'next/image'

import { getEventById } from '../../dummy-data'

export default function SingleDetail() {
  const router = useRouter()
  const eventId = router.query.eventId
  const event = getEventById(eventId)

  if (!event) {
    return <h2>No event Found</h2>
  }

  return (
    <>
      <h1>{event.title}</h1>
      <div style={{position:'relative', width: '600px', height: '300px', margin:'0 auto',}}>
        <Image src={'/' + event.image} layout='fill' objectFit='contain' />
      </div>
      <p>{event.description}</p>
      <span>
        <strong>Where: </strong>
        {event.location}
      </span>
      <br />
      <span>
        <strong>When: </strong> {event.date}
      </span>
    </>
  )
}
