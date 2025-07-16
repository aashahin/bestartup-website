import { AnimatedNumber } from '@/components/core/animated-number'
import { Button } from '@/components/core/button'
import { Container } from '@/components/core/container'
import { Footer } from '@/components/core/footer'
import { GradientBackground } from '@/components/core/gradient'
import { Navbar } from '@/components/core/navbar'
import { Heading, Lead, Subheading } from '@/components/core/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The ultimate AI toolkit to build and grow your startup. Transform your startup journey with AI-powered tools.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Your AI Co-founder.</Heading>
      <Lead className="mt-6 max-w-3xl">
        The ultimate AI toolkit to build and grow your startup. Transform your startup journey with AI-powered tools that handle the complexity, so you can focus on what matters most.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Our Vision</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            At Be Startup, we believe that every entrepreneur deserves access to the tools and guidance that can transform their ideas into successful businesses. Our mission is to democratize startup building by providing AI-powered solutions that were once only available to well-funded companies.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            We're building the only platform you'll ever need to go from idea to launch. With comprehensive business planning, technical architecture, content generation, and ongoing mentorship, Be Startup is your AI co-founder that never sleeps and always has your back.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Early Stage Metrics</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Founded</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                2024
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">AI Tools</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={10} end={15} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Focus Areas</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={3} end={5} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Beta Users</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={50} end={100} />+
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Person({
  name,
  description,
  img,
}: {
  name: string
  description: string
  img: string
}) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>Meet the founders</Subheading>
      <Heading as="h3" className="mt-2">
        Building the future of startup creation.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Be Startup is built by entrepreneurs who understand the challenges of building a company from scratch.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            Our journey began when we experienced firsthand the complexity and overwhelming nature of starting a business. From crafting business plans to building technical infrastructure, we realized that entrepreneurs needed better tools to navigate the startup landscape.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Today, Be Startup is in its early stages, but we're already transforming how entrepreneurs approach building their companies. Our AI-powered platform provides the guidance, tools, and resources that we wish we had when starting our own ventures.
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="/pricing">
              Join our journey
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
      <Subheading as="h3" className="mt-24">
        Core team
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Michael Foster"
          description="Co-Founder / CTO"
          img="/team/michael-foster.jpg"
        />
        <Person
          name="Emily Selman"
          description="Co-Founder / CEO"
          img="/team/emily-selman.jpg"
        />
        <Person
          name="Dries Vincent"
          description="Lead Developer"
          img="/team/dries-vincent.jpg"
        />
      </ul>
    </Container>
  )
}

function Platform() {
  return (
    <Container className="mt-32">
      <Subheading>Platform Overview</Subheading>
      <Heading as="h3" className="mt-2">
        Everything you need to get ahead.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Our comprehensive AI platform covers every aspect of startup building, from ideation to execution.
      </Lead>
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-xl bg-gray-50 p-8">
          <div className="text-sm font-semibold text-blue-600">Business</div>
          <h3 className="mt-2 text-lg font-medium">AI Business Planner</h3>
          <p className="mt-2 text-sm/6 text-gray-600">
            Generate a complete, investor-ready business plan in minutes with our AI-powered business planning tool.
          </p>
        </div>
        <div className="rounded-xl bg-gray-50 p-8">
          <div className="text-sm font-semibold text-green-600">Development</div>
          <h3 className="mt-2 text-lg font-medium">AI Code Generator</h3>
          <p className="mt-2 text-sm/6 text-gray-600">
            Develops application infrastructure and backend for startups, handling the technical complexity.
          </p>
        </div>
        <div className="rounded-xl bg-gray-50 p-8">
          <div className="text-sm font-semibold text-purple-600">Guidance</div>
          <h3 className="mt-2 text-lg font-medium">AI Mentor & Guides</h3>
          <p className="mt-2 text-sm/6 text-gray-600">
            Step-by-step guidance and mentorship through AI-driven tutorials and personalized support.
          </p>
        </div>
      </div>
    </Container>
  )
}

function Careers() {
  return (
    <Container className="my-32">
      <Subheading>Join Us</Subheading>
      <Heading as="h3" className="mt-2">
        Help us build the future of startups.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We're looking for passionate individuals who want to revolutionize how startups are built. Join our remote team and help entrepreneurs worldwide.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">We're hiring</Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            As an early-stage startup, we're building our team with talented individuals who share our vision. We offer competitive compensation, equity, and the opportunity to shape the future of entrepreneurship.
          </p>
          <div className="mt-8">
            <Button href="mailto:careers@bestartup.com">
              Send us your resume
            </Button>
          </div>
        </div>
        <div className="space-y-6 lg:pt-2">
          <div className="rounded-lg border border-gray-200 p-6">
            <h4 className="font-medium">Remote First</h4>
            <p className="mt-2 text-sm/6 text-gray-600">
              Work from anywhere in the world with our fully distributed team.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <h4 className="font-medium">Equity & Growth</h4>
            <p className="mt-2 text-sm/6 text-gray-600">
              Get equity in a fast-growing company and grow with us.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <h4 className="font-medium">Impact</h4>
            <p className="mt-2 text-sm/6 text-gray-600">
              Help entrepreneurs worldwide build successful businesses.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Team />
      <Platform />
      <Careers />
      <Footer />
    </main>
  )
}
