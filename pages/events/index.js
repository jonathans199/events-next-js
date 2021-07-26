import { getFeaturedEvents } from '../../dummy-data'
import EventItem from '../../components/events/EventItem'

export default function AllEvents() {
  const featuredEvents = getFeaturedEvents()

  return (
    <>
      <h1>Events</h1>
      <ul>
        {featuredEvents.map(event => (
          <EventItem key={event.id} title={event.title} image={event.image} date={event.date} location={event.location} id={event.id} />
        ))}
      </ul>
    </>
  )
}
