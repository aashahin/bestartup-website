import { Container } from '@/components/core/container'
import { Footer } from '@/components/core/footer'
import { GradientBackground } from '@/components/core/gradient'
import { Navbar } from '@/components/core/navbar'
import { Heading, Lead } from '@/components/core/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Be Startup - Your AI Co-founder platform. Legal terms and conditions for using our services.',
}

function PolicySection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <div className="mt-4 space-y-4 text-sm/6 text-gray-600">{children}</div>
    </section>
  )
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Terms of Service</Heading>
      <Lead className="mt-6 max-w-3xl">
        These Terms of Service govern your use of Be Startup's AI-powered
        platform. By using our services, you agree to these terms and
        conditions.
      </Lead>
      <div className="mt-6 text-sm text-gray-500">
        Last updated: July 16, 2025
      </div>
    </Container>
  )
}

function TermsContent() {
  return (
    <Container className="mt-16 max-w-4xl">
      <PolicySection title="1. Acceptance of Terms">
        <p>
          By accessing or using Be Startup's platform and services, you agree to
          be bound by these Terms of Service and our Privacy Policy. If you do
          not agree to these terms, you may not use our services.
        </p>
        <p>
          These terms apply to all users of our platform, including visitors,
          registered users, and paying subscribers.
        </p>
      </PolicySection>

      <PolicySection title="2. Description of Service">
        <p>
          Be Startup is an AI-powered platform that provides comprehensive tools
          for startup creation and growth, including:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>AI business planning and strategy development</li>
          <li>Code generation and technical infrastructure development</li>
          <li>
            Content creation tools (articles, presentations, landing pages)
          </li>
          <li>Image generation and media creation</li>
          <li>Voice-over and speech-to-text services</li>
          <li>Document analysis and business mentorship</li>
          <li>Website analysis and optimization tools</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. User Accounts and Registration">
        <p>
          To access certain features of our platform, you must create an
          account. You agree to:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Provide accurate, current, and complete information during
            registration
          </li>
          <li>Maintain the security of your account credentials</li>
          <li>Update your information to keep it accurate and current</li>
          <li>Notify us immediately of any unauthorized use of your account</li>
          <li>
            Be responsible for all activities that occur under your account
          </li>
        </ul>
        <p className="mt-4">
          You must be at least 18 years old to create an account and use our
          services.
        </p>
      </PolicySection>

      <PolicySection title="4. Acceptable Use Policy">
        <p>When using our platform, you agree not to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Use the service for any illegal or unauthorized purpose</li>
          <li>
            Generate content that is harmful, offensive, or violates others'
            rights
          </li>
          <li>Attempt to reverse engineer or compromise our AI models</li>
          <li>Share your account credentials with others</li>
          <li>Use the platform to compete directly with Be Startup</li>
          <li>Upload malicious code or attempt to breach our security</li>
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe on intellectual property rights of others</li>
        </ul>
      </PolicySection>

      <PolicySection title="5. AI-Generated Content and Intellectual Property">
        <p>
          Our platform uses artificial intelligence to generate various types of
          content. Important terms regarding AI-generated content:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>You own the content you create using our AI tools</li>
          <li>
            AI-generated content may not be unique and could be similar to
            content generated for other users
          </li>
          <li>
            You are responsible for ensuring your use of AI-generated content
            complies with applicable laws
          </li>
          <li>
            We do not guarantee the accuracy, completeness, or reliability of
            AI-generated content
          </li>
          <li>
            You should review and validate all AI-generated business plans and
            strategies
          </li>
          <li>
            Code generated by our AI tools should be tested and reviewed before
            production use
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="6. Subscription Plans and Billing">
        <p>
          Be Startup offers various subscription plans with different features
          and usage limits:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Subscription fees are billed in advance on a monthly or annual basis
          </li>
          <li>All fees are non-refundable except as required by law</li>
          <li>
            We may change our pricing with 30 days' notice to existing
            subscribers
          </li>
          <li>
            Usage limits apply to AI tool usage based on your subscription plan
          </li>
          <li>
            Accounts may be suspended for non-payment after appropriate notice
          </li>
          <li>
            You can cancel your subscription at any time through your account
            settings
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="7. Data and Privacy">
        <p>
          Your privacy is important to us. Our collection and use of your data
          is governed by our Privacy Policy. Key points:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>We collect data necessary to provide our AI-powered services</li>
          <li>Your business data and generated content remain confidential</li>
          <li>We may use anonymized data to improve our AI models</li>
          <li>You can request deletion of your data at any time</li>
          <li>We implement industry-standard security measures</li>
        </ul>
      </PolicySection>

      <PolicySection title="8. Service Availability and Support">
        <p>
          We strive to provide reliable service, but cannot guarantee
          uninterrupted availability:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            We aim for 99.9% uptime but do not guarantee continuous availability
          </li>
          <li>
            Scheduled maintenance will be announced in advance when possible
          </li>
          <li>Support is available through email and our help center</li>
          <li>Response times vary based on your subscription plan</li>
          <li>
            We may temporarily suspend service for maintenance or security
            reasons
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="9. Disclaimers and Limitation of Liability">
        <p>
          <strong>DISCLAIMER:</strong> Our services are provided "as is" without
          warranties of any kind. We specifically disclaim:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Warranties of merchantability or fitness for a particular purpose
          </li>
          <li>Guarantees about the accuracy of AI-generated content</li>
          <li>
            Assurances that AI-generated business plans will lead to success
          </li>
          <li>Warranties that generated code will be error-free</li>
        </ul>
        <p className="mt-4">
          <strong>LIMITATION OF LIABILITY:</strong> Be Startup's liability is
          limited to the amount you paid for the service in the 12 months
          preceding any claim. We are not liable for indirect, incidental, or
          consequential damages.
        </p>
      </PolicySection>

      <PolicySection title="10. Business Advice Disclaimer">
        <p>Important disclaimers regarding our AI-powered business tools:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            AI-generated business plans are for informational purposes only
          </li>
          <li>
            We do not provide professional legal, financial, or business advice
          </li>
          <li>
            You should consult with qualified professionals before making
            business decisions
          </li>
          <li>
            Market analyses are based on available data and may not reflect
            current conditions
          </li>
          <li>Business success depends on many factors beyond our AI tools</li>
          <li>
            We are not responsible for business outcomes or investment decisions
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="11. Termination">
        <p>Either party may terminate the service relationship:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>You may cancel your account at any time</li>
          <li>
            We may suspend or terminate accounts for violations of these terms
          </li>
          <li>We may discontinue the service with 30 days' notice</li>
          <li>Upon termination, your access to the platform will cease</li>
          <li>You may export your data before termination</li>
          <li>Certain provisions of these terms survive termination</li>
        </ul>
      </PolicySection>

      <PolicySection title="12. Indemnification">
        <p>
          You agree to indemnify and hold Be Startup harmless from any claims,
          damages, or expenses arising from:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Your use of the platform in violation of these terms</li>
          <li>Content you create or upload to the platform</li>
          <li>Your violation of any third-party rights</li>
          <li>Any illegal or unauthorized use of your account</li>
        </ul>
      </PolicySection>

      <PolicySection title="13. Governing Law and Disputes">
        <p>
          These terms are governed by the laws of [Your Jurisdiction]. Any
          disputes will be resolved through:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Good faith negotiations between the parties</li>
          <li>Binding arbitration if negotiations fail</li>
          <li>The courts of [Your Jurisdiction] for certain types of claims</li>
        </ul>
        <p className="mt-4">
          You waive the right to participate in class action lawsuits against Be
          Startup.
        </p>
      </PolicySection>

      <PolicySection title="14. Changes to Terms">
        <p>
          We may modify these terms from time to time. We will notify you of
          material changes by:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Posting updated terms on our website</li>
          <li>Sending email notifications to registered users</li>
          <li>Displaying notices on our platform</li>
        </ul>
        <p className="mt-4">
          Continued use of our services after changes constitutes acceptance of
          the new terms.
        </p>
      </PolicySection>

      <PolicySection title="15. Contact Information">
        <p>
          If you have questions about these Terms of Service, please contact us:
        </p>
        <div className="mt-4 space-y-2">
          <p>Email: legal@bestartup.com</p>
          <p>Subject: Terms of Service Inquiry</p>
          <p>Response time: We aim to respond within 5 business days</p>
        </div>
        <p className="mt-4">
          For technical support or account issues, please use:
          support@bestartup.com
        </p>
      </PolicySection>
    </Container>
  )
}

export default function Terms() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="mt-16">
        <Header />
        <TermsContent />
      </Container>
      <div className="mt-32">
        <Footer />
      </div>
    </main>
  )
}
