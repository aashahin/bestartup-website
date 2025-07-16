import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <img
        alt="Google"
        src="https://res.cloudinary.com/eldoraui/image/upload/v1733986674/Google_hcdc9g.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12 grayscale"
      />
      <img
        alt="Microsoft"
        src="https://res.cloudinary.com/eldoraui/image/upload/v1733986674/Microsoft_y2tjeg.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12 grayscale"
      />
      <img
        alt="Github"
        src="https://res.cloudinary.com/eldoraui/image/upload/v1733986674/GitHub_lubmi9.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12 grayscale"
      />
      <img
        alt="Uber"
        src="https://res.cloudinary.com/eldoraui/image/upload/v1733986675/Uber_imzjlc.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12 grayscale"
      />
      <img
        alt="Notion"
        src="https://res.cloudinary.com/eldoraui/image/upload/v1733986674/Notion_lno53n.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12 grayscale"
      />
    </div>
  )
}
