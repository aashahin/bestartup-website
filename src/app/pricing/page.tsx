import { Button } from '@/components/core/button'
import { Container } from '@/components/core/container'
import { Footer } from '@/components/core/footer'
import { Gradient, GradientBackground } from '@/components/core/gradient'
import { Link } from '@/components/core/link'
import { Navbar } from '@/components/core/navbar'
import { Heading, Lead, Subheading } from '@/components/core/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Choose the perfect AI toolkit plan for your startup. From basic to unlimited usage, we have a plan that fits your needs.',
}

const tiers = [
  {
    name: 'Starter' as const,
    slug: 'starter',
    description: 'Perfect for testing our AI tools.',
    priceMonthly: 19,
    href: 'https://bestartup.ai/register?plan=starter',
    highlights: [
      { description: '3 uses per AI tool per month' },
      { description: 'Access to all 15+ AI tools' },
      { description: 'Basic templates and guides' },
      { description: 'Email support' },
      { description: 'Community access' },
    ],
    features: [
      { section: 'AI Tools Usage', name: 'AI Business Planner', value: '3 uses/month' },
      { section: 'AI Tools Usage', name: 'AI Code Generator', value: '10 uses/month' },
      { section: 'AI Tools Usage', name: 'AI Mentor & Guides', value: '10 uses/month' },
      { section: 'AI Tools Usage', name: 'AI Image Generator', value: '3 uses/month' },
      { section: 'AI Tools Usage', name: 'AI Voice Over', value: '3 uses/month' },
      { section: 'AI Tools Usage', name: 'AI Article Wizard', value: '5 uses/month' },
      { section: 'AI Tools Usage', name: 'AI Website Analyzer', value: '5 uses/month' },
      { section: 'AI Tools Usage', name: 'AI Presentation', value: '3 uses/month' },
      { section: 'AI Tools Usage', name: 'AI Landing Page Maker', value: '3 uses/month' },
      { section: 'AI Tools Usage', name: 'Other AI Tools', value: '3 uses/month each' },
      { section: 'Features', name: 'Templates', value: 'Basic' },
      { section: 'Features', name: 'Export Options', value: 'Standard' },
      { section: 'Features', name: 'Priority Support', value: false },
      { section: 'Support', name: 'Email Support', value: true },
      { section: 'Support', name: 'Community Access', value: true },
      { section: 'Support', name: 'Priority Support', value: false },
    ],
  },
  {
    name: 'Professional' as const,
    slug: 'professional',
    description: 'Best for growing startups and entrepreneurs.',
    priceMonthly: 24,
    href: 'https://bestartup.ai/register?plan=professional',
    highlights: [
      { description: '10 uses per AI tool per month' },
      { description: 'Access to all 15+ AI tools' },
      { description: 'Premium templates and guides' },
      { description: 'Priority email support' },
      { description: 'Advanced export options' },
    ],
    features: [
      { section: 'AI Tools Usage', name: 'AI Business Planner', value: '10 uses/month' },
      { section: 'AI Tools Usage', name: 'AI Code Generator', value: '20 uses/month' },
      { section: 'AI Tools Usage', name: 'AI Mentor & Guides', value: '20 uses/month' },
      { section: 'AI Tools Usage', name: 'AI Image Generator', value: '10 uses/month' },
      { section: 'AI Tools Usage', name: 'AI Voice Over', value: '10 uses/month' },
      { section: 'AI Tools Usage', name: 'AI Article Wizard', value: '20 uses/month' },
      { section: 'AI Tools Usage', name: 'AI Website Analyzer', value: '15 uses/month' },
      { section: 'AI Tools Usage', name: 'AI Presentation', value: '10 uses/month' },
      { section: 'AI Tools Usage', name: 'AI Landing Page Maker', value: '10 uses/month' },
      { section: 'AI Tools Usage', name: 'Other AI Tools', value: '10 uses/month each' },
      { section: 'Features', name: 'Templates', value: 'Premium' },
      { section: 'Features', name: 'Export Options', value: 'Advanced' },
      { section: 'Features', name: 'Priority Support', value: true },
      { section: 'Support', name: 'Email Support', value: true },
      { section: 'Support', name: 'Community Access', value: true },
      { section: 'Support', name: 'Priority Support', value: true },
    ],
  },
  {
    name: 'Enterprise' as const,
    slug: 'enterprise',
    description: 'Unlimited usage for serious entrepreneurs.',
    priceMonthly: 'Custom',
    href: '/contact',
    highlights: [
      { description: 'Unlimited uses for all AI tools' },
      { description: 'Access to all current and future AI tools' },
      { description: 'Custom templates and integrations' },
      { description: 'Dedicated account manager' },
      { description: 'White-label options available' },
    ],
    features: [
      { section: 'AI Tools Usage', name: 'AI Business Planner', value: 'Unlimited' },
      { section: 'AI Tools Usage', name: 'AI Code Generator', value: 'Unlimited' },
      { section: 'AI Tools Usage', name: 'AI Mentor & Guides', value: 'Unlimited' },
      { section: 'AI Tools Usage', name: 'AI Image Generator', value: 'Unlimited' },
      { section: 'AI Tools Usage', name: 'AI Voice Over', value: 'Unlimited' },
      { section: 'AI Tools Usage', name: 'AI Article Wizard', value: 'Unlimited' },
      { section: 'AI Tools Usage', name: 'AI Website Analyzer', value: 'Unlimited' },
      { section: 'AI Tools Usage', name: 'AI Presentation', value: 'Unlimited' },
      { section: 'AI Tools Usage', name: 'AI Landing Page Maker', value: 'Unlimited' },
      { section: 'AI Tools Usage', name: 'Other AI Tools', value: 'Unlimited' },
      { section: 'Features', name: 'Templates', value: 'Custom' },
      { section: 'Features', name: 'Export Options', value: 'All formats' },
      { section: 'Features', name: 'Priority Support', value: true },
      { section: 'Support', name: 'Email Support', value: true },
      { section: 'Support', name: 'Community Access', value: true },
      { section: 'Support', name: 'Priority Support', value: true },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Simple, transparent pricing.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Choose the perfect AI toolkit plan for your startup. From testing our tools to unlimited usage, we have a plan that fits your needs and budget.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              {typeof tier.priceMonthly === 'number' ? `$${tier.priceMonthly}` : tier.priceMonthly}
            </div>
            <div className="text-sm/5 text-gray-950/75">
              {typeof tier.priceMonthly === 'number' && (
                <>
                  <p>USD</p>
                  <p>per month</p>
                </>
              )}
              {typeof tier.priceMonthly === 'string' && (
                <p>Contact us</p>
              )}
            </div>
          </div>
          <div className="mt-8">
            <Button href={tier.href}>
              {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
            </Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              What's included:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingTable({
  selectedTier,
}: {
  selectedTier: (typeof tiers)[number]
}) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href={selectedTier.href}>
                Get started
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <Button variant="outline" href={tier.href}>
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get started'}
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          data-selected={selectedTier === tier ? true : undefined}
                          className="p-0 data-selected:table-cell max-sm:hidden"
                        >
                          <div className="px-0 py-4">
                            {typeof value === 'string' ? (
                              <div className="text-sm/6">{value}</div>
                            ) : value === true ? (
                              <CheckIcon className="size-4 fill-green-600" />
                            ) : value === false ? (
                              <MinusIcon className="size-4 fill-gray-400" />
                            ) : (
                              <div className="text-sm/6">{value}</div>
                            )}
                          </div>
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  )
}

function FeatureItem({
  description,
  disabled = false,
}: {
  description: string
  disabled?: boolean
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 data-disabled:text-gray-400"
    >
      <span className="inline-flex h-6 items-center">
        {disabled ? (
          <MinusIcon className="size-4 fill-gray-400" />
        ) : (
          <CheckIcon className="size-4 fill-green-600" />
        )}
      </span>
      {description}
    </li>
  )
}

export default async function Pricing({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string }>
}) {
  const params = await searchParams
  let selectedTier =
    tiers.find((tier) => tier.slug === params.tier) ?? tiers[1]

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <PricingTable selectedTier={selectedTier} />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Frequently asked questions
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          Your questions answered.
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              What counts as a "use" for each AI tool?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              A "use" is counted each time you generate content with an AI tool. For example, generating a business plan, creating an image, or generating code counts as one use per action.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Can I upgrade or downgrade my plan at any time?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What happens if I exceed my monthly usage limit?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              If you exceed your limit, you'll be prompted to upgrade your plan or wait until the next billing cycle. We'll notify you when you're approaching your limit.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Is there a free trial available?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes, we offer a 3-day free trial for all plans. No credit card required to start your trial.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              How does Enterprise custom pricing work?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Enterprise pricing is tailored to your specific needs, usage requirements, and team size. Contact our sales team to discuss your requirements and get a custom quote.
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}
