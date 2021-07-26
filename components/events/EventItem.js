import Link from 'next/link'
import Image from 'next/image'
import Button from '../ui/button'

import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'

export default function EventItem({ title, image, date, location, id }) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formattedAddress = location.replace(', ', '\n')
  const exploreLink = `/events/${id}`

  return (
    <li className='item'>
      <Image src={'/' + image} alt={title} width={500} height={500} />
      <div>
        <div>
          <h2>{title}</h2>
          <div className='date'>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className='address'>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
          <div className='actions'>
            <Button link={exploreLink}>
              <span>Explore Event</span>
              <span className='icon'>
                <ArrowRightIcon />
              </span>
            </Button>
            {/* <Link href={exploreLink}>Explore Event</Link> */}
          </div>
        </div>
      </div>
    </li>
  )
}
