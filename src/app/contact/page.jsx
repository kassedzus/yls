import { useId } from 'react'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          E-mail us
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
            <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput
            label="Cargo description"
            name="cargo"
            autoComplete="cargo"
          />
          <TextInput label="Origin - Destination" name="routing" />
        </div>
        <Button type="submit" className="mt-10">
          Send mail
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 leading-8 gap-6">
          <div className="">
              <div className="font-semibold">
                  Our legal address
              </div>
              <div>
                  YLS Ltd.
              </div>
              <div>
                  VAT #LV40203520862
              </div>
              <div>
                  Ventspils, Talsu street 62 - 42
              </div>
              <div>
                  LV-3602, Latvia
              </div>
          </div>
          <div className="order-first md:order-last">
              <div className="font-display text-base  text-neutral-950 mb-6">
                  <div className="font-semibold">E-mail</div>
                  <div>YLS@YLS.LV</div>
              </div>
              <div className="font-display text-base text-neutral-950">
                  <div className="font-semibold">Phone</div>
                  <div>+371 28851065</div>
              </div>
          </div>
      </div>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>We can’t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-28">
        <div className="">
          {/*<ContactForm />*/}
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
