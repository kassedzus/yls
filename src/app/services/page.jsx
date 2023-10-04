import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import imageBoxes from '@/images/boxes.jpg'
import imageShip from '@/images/ship_front.jpg'
import imagePlane from '@/images/plane.jpg'
import imageCustoms from '@/images/cleared_customs2.jpg'

function Section({ title, image, id, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20" id={id}>
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function LCL() {
  return (
    <Section title="LCL" image={{ src: imageBoxes }} id="lcl">
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our Less than Container Load (LCL) shipping service is your key to hassle-free, cost-effective global trade.
          With LCL, you pay for the space your cargo occupies, not the entire container. No wasted resources, no unnecessary
          expenses. Expand your reach across the globe! Our extensive network of LCL services connects you to markets worldwide,
          making international trade a breeze.
        </p>
      </div>
    </Section>
  )
}

function FCL() {
  return (
    <Section title="FCL" image={{ src: imageShip, shape: 1 }} id="fcl">
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          When it comes to shipping, you deserve the full package. Experience unmatched reliability, security,
          and efficiency with our Full Container Load (FCL) shipping service. Your cargo deserves the royal treatment.
          With FCL, you get an entire container to yourself, ensuring your goods are handled with the utmost care and attention.
          Our extensive FCL network connects you to major ports worldwide. Reach new markets and expand your business
          horizons effortlessly.
        </p>
      </div>
    </Section>
  )
}

function Avio() {
  return (
    <Section title="Avio Freight" image={{ src: imagePlane, shape: 2 }} id="avio">
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          When time is of the essence and cargo must reach its destination swiftly and securely, turn to Avio Freight.
          Our global network of flights ensures timely deliveries to every corner of the world. Trust in our meticulous
          cargo handling processes. Your shipments are our priority, and we ensure they are treated with the utmost care
          from start to finish.
        </p>
      </div>
    </Section>
  )
}

function Customs() {
  return (
      <Section title="Customs Procedures" image={{ src: imageCustoms }} id="customs">
        <div className="space-y-6 text-base text-neutral-600">
          <p>
            Navigating the complexities of international trade can be a daunting task. Let us be your guiding light
            through the maze of customs procedures. Your cargo deserves swift and secure clearance. We specialize in
            minimizing clearance times, reducing customs-related hassles, and getting your goods to market faster.
            Stay compliant with ever-evolving customs regulations. Our expert team ensures your imports and exports meet
            all legal requirements.
          </p>
        </div>
      </Section>
  )
}

export const metadata = {
  title: 'Our Services',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <LCL />
        <FCL />
        <Avio />
        <Customs />
      </div>

      <ContactSection />
    </>
  )
}
