'use client'

import { useTranslations } from 'next-intl'
import {
  AiArticleWizardAnimation,
  AiBusinessAnimation,
  AiCodeGeneratorAnimation,
  AiContentEditorAnimation, AiCustomizedTemplatesAnimation,
  AiDocAnalyzerAnimation,
  AiImageAnalyzerAnimation,
  AiImageGeneratorAnimation, AiLandingPageMakerAnimation,
  AiMentorAnimation,
  AiPresentationAnimation,
  AiSpeechToTextAnimation,
  AiVisionPlannerAnimation,
  AiVoiceOverAnimation,
  AiWebsiteAnalyzerAnimation,
  GPTAnimation
} from '@/components/core/bento-animations'
import { BentoCard } from '@/components/core/bento-card'
import { Container } from '@/components/core/container'
import { Heading, Subheading } from '@/components/core/text'

function BentoSection() {
  const t = useTranslations('bento')

  return (
    <Container>
      <Subheading>{t('features')}</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        {t('title')}
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow={t('cards.business.eyebrow')}
          title={t('cards.business.title')}
          description={t('cards.business.description')}
          graphic={<AiBusinessAnimation />}
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow={t('cards.mentor.eyebrow')}
          title={t('cards.mentor.title')}
          description={t('cards.mentor.description')}
          graphic={<AiMentorAnimation />}
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow={t('cards.vision.eyebrow')}
          title={t('cards.vision.title')}
          description={t('cards.vision.description')}
          graphic={<AiVisionPlannerAnimation />}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow={t('cards.gpt.eyebrow')}
          title={t('cards.gpt.title')}
          description={t('cards.gpt.description')}
          graphic={<GPTAnimation />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow={t('cards.code.eyebrow')}
          title={t('cards.code.title')}
          description={t('cards.code.description')}
          graphic={<AiCodeGeneratorAnimation />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  const t = useTranslations('bento')

  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>{t('more_features')}</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          {t('more_title')}
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-4">
          <BentoCard
            dark
            eyebrow={t('cards.image_generator.eyebrow')}
            title={t('cards.image_generator.title')}
            description={t('cards.image_generator.description')}
            graphic={<AiImageGeneratorAnimation />}
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-2 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow={t('cards.voice_over.eyebrow')}
            title={t('cards.voice_over.title')}
            description={t('cards.voice_over.description')}
            graphic={<AiVoiceOverAnimation />}
            className="lg:col-span-2"
          />
          <BentoCard
            dark
            eyebrow={t('cards.article_wizard.eyebrow')}
            title={t('cards.article_wizard.title')}
            description={t('cards.article_wizard.description')}
            graphic={<AiArticleWizardAnimation />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow={t('cards.website_analyzer.eyebrow')}
            title={t('cards.website_analyzer.title')}
            description={t('cards.website_analyzer.description')}
            graphic={<AiWebsiteAnalyzerAnimation />}
            className="lg:col-span-2"
          />
          <BentoCard
            dark
            eyebrow={t('cards.image_analyzer.eyebrow')}
            title={t('cards.image_analyzer.title')}
            description={t('cards.image_analyzer.description')}
            graphic={<AiImageAnalyzerAnimation />}
            className="lg:col-span-2"
          />
          <BentoCard
            dark
            eyebrow={t('cards.speech_to_text.eyebrow')}
            title={t('cards.speech_to_text.title')}
            description={t('cards.speech_to_text.description')}
            graphic={<AiSpeechToTextAnimation />}
            className="lg:col-span-2"
          />
          <BentoCard
            dark
            eyebrow={t('cards.content_editor.eyebrow')}
            title={t('cards.content_editor.title')}
            description={t('cards.content_editor.description')}
            graphic={<AiContentEditorAnimation />}
            className="lg:col-span-3"
          />
          <BentoCard
            dark
            eyebrow={t('cards.doc_analyzer.eyebrow')}
            title={t('cards.doc_analyzer.title')}
            description={t('cards.doc_analyzer.description')}
            graphic={<AiDocAnalyzerAnimation />}
            fade={['top']}
            className="lg:col-span-3"
          />
          <BentoCard
            dark
            eyebrow={t('cards.presentation.eyebrow')}
            title={t('cards.presentation.title')}
            description={t('cards.presentation.description')}
            graphic={<AiPresentationAnimation />}
            className="lg:col-span-2"
          />
          <BentoCard
            dark
            eyebrow={t('cards.landing_page.eyebrow')}
            title={t('cards.landing_page.title')}
            description={t('cards.landing_page.description')}
            graphic={
            <AiLandingPageMakerAnimation />
            }
            className="lg:col-span-2"
          />
          <BentoCard
            dark
            eyebrow={t('cards.templates.eyebrow')}
            title={t('cards.templates.title')}
            description={t('cards.templates.description')}
            graphic={
            <AiCustomizedTemplatesAnimation/>
            }
            className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export { BentoSection, DarkBentoSection }
