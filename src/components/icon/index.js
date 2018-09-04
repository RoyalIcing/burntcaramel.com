import { h } from 'preact';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons/faPaperclip'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow'
import { faCodepen } from '@fortawesome/free-brands-svg-icons/faCodepen'
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faBehanceSquare } from '@fortawesome/free-brands-svg-icons/faBehanceSquare'
import { faDribbble } from '@fortawesome/free-brands-svg-icons/faDribbble'
import { faSlideshare } from '@fortawesome/free-brands-svg-icons/faSlideshare'
import style from './style.css'

const icons = {
  paperclip: faPaperclip,
  github: faGithub,
  twitter: faTwitter,
  medium: faMedium,
  'stack-overflow': faStackOverflow,
  codepen: faCodepen,
  pinterest: faPinterest,
  instagram: faInstagram,
  behance: faBehanceSquare,
  dribbble: faDribbble,
  slideshare: faSlideshare,
}

function Icon({
  name,
  size = 24
}) {
  const match = icons[name]
  if (!match) {
    return null;
  }

  const { icon: [width, height, , , svgPathData] } = match
  return (
    <svg viewBox={`0 0 ${width} ${height}`} aria-hidden="true" width={size} height={size} class={style.icon}>
      <path d={svgPathData} />
    </svg>
  )
}

export default Icon
