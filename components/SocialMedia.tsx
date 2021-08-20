import Image from 'next/image'

export default function SocialMedia() {
  return (
    <div className="absolute inset-x-0 bottom-5">
      <ul className="flex flex-row items-center justify-around">
        <li className="h-6 w-6">
          <a
            href="https://www.github.com/mzsantoz"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/images/github.png" width="100%" height="100%" />
          </a>
        </li>
        <li className="h-6 w-6">
          <a
            href="https://www.linkedin.com/in/mzsantoz"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/images/linkedin.png" width="100%" height="100%" />
          </a>
        </li>
        <li className="h-6 w-6">
          <a
            href="https://www.twitter.com/mzsantoz"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/images/twitter.png" width="100%" height="100%" />
          </a>
        </li>
      </ul>
    </div>
  )
}
