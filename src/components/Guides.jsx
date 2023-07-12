import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/cuickstart',
    name: 'Quickstart',
    description: 'Learn how to use the Superagent Swift SDK by creating your first agent.',
    cta: 'Coming Soon'
  },
  {
    href: '/concepts',
    name: 'Concepts',
    description: 'Understand the basics of LLMs, Prompts, Agents, Documents and Tools.',
    cta: 'Coming Soon'
  },
  //{
  //  href: '/pagination',
  //  name: 'Pagination',
  //  description: 'Understand how to work with paginated responses.',
  //  cta: 'Coming Soon'
  //},
  {
    href: '/',
    name: 'Chat with Documents Example',
    description:
      'Learn how to use the Superagent SDK by building a App that lets users chat with their documents',
    cta: 'Coming Soon'
  },
  {
    href: '/',
    name: 'Wolfram Search App Example',
    description:
      'Learn how to use the Superagent SDK by building a App where users can chat with Wolfram.',
    cta: 'Coming Soon'
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guides
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
               {guide.cta}
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
