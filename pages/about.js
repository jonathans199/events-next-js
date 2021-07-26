import Image from 'next/image'

export default function About() {
  return (
    <>
      <h1>About us</h1>
      <div style={{ position: 'relative', width: 'auto', height: '500px' }}>
        <Image src='/images/networking.jpeg' layout='fill' objectFit='cover' />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam error similique repudiandae necessitatibus eligendi aspernatur esse
        ipsa? Commodi culpa explicabo pariatur doloribus, minus neque? Modi, ducimus. Molestiae, autem repellendus?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam error similique repudiandae necessitatibus eligendi aspernatur esse
        ipsa? Commodi culpa explicabo pariatur doloribus, minus neque? Modi, ducimus. Molestiae, autem repellendus?
      </p>
    </>
  )
}
