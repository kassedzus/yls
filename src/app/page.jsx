import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageContainers from '@/images/containers.jpg'
import imageTransport from '@/images/logistics_solutions.jpg'
import { loadCaseStudies } from '@/lib/mdx'

function Clients() {
  return (
    <div className="rounded-4xl bg-neutral-950 py-20 sm:py-32 mt-20">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center text-xl font-display font-semibold tracking-wider text-white sm:text-left">
            We understand that the success of any business
            relies on the efficient movement of goods and the seamless
            coordination of supply chains. That's why we are proud to offer our
            comprehensive logistics services, designed to meet all your transportation
            needs and propel your business forward.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

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
              Partner with Your Logistic Solutions today and experience the power of <span className="font-bold">streamlined transportation</span> solutions.
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
            Logistic
          </h1>
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Solution
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
