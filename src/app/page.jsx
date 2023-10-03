import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageContainers from '@/images/containers.jpg'
import { loadCaseStudies } from '@/lib/mdx'

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow=""
        title="We help you identify, explore and respond to new transportation opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageContainers}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem>
              With our <span className="font-bold">extensive network</span> of carriers, warehouses, and distribution
              centers strategically located worldwide, we have the capacity to
              handle shipments of any size, from local deliveries to international
              freight. Our global reach ensures that Your goods reach their destination quickly and securely.
            </ListItem>
            <ListItem>
              Navigating the complexities of customs regulations and international trade compliance
              can be a daunting task. We ensure <span className="font-bold">smooth customs clearance</span>,
              handle all necessary documentation, and keep You in full compliance with regulations, saving you time and
              mitigating the risk of delays or penalties.
            </ListItem>
            <ListItem>
              At the heart of our operations is a commitment to delivering <span className="font-bold">exceptional customer service</span>.
              Our team of dedicated logistics professionals is available around the clock to address your
              inquiries, provide updates, and offer personalized solutions tailored to your business needs.
              We strive to build long-term partnerships based on trust, reliability, and outstanding service.
            </ListItem>
            <ListItem>
              Partner with Your Logistics Solutions today and experience the power of <span className="font-bold">streamlined transportation</span> solutions.
              Let us handle the logistics, so you can focus on growing your business. Contact us now to
              learn more about how we can help you optimize your supply chain and propel your business forward.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              Your
            </h1>
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              Logistics
            </h1>
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              Solutions
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              Your Trusted Partner in Streamlined Transportation Solutions!
            </p>
        </FadeIn>
      </Container>

      <Services />

      <ContactSection />
    </>
  )
}
