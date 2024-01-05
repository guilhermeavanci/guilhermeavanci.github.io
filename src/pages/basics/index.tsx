import React, { useEffect, useState } from 'react'
import _resume from 'resume/_resume.json'
import 'react-vertical-timeline-component/style.min.css'
import 'pages/timeline/style.css'
import { getSkillBtnClass } from 'utils/skill-class'
import MatrixParticles from 'components/MatrixParticles'
import { isDarkMode } from 'utils/theme'
import GraphParticles from 'components/GraphParticles'

type Props = { theme: Theme; resume: IResume }

const getTLDR = (skills: string) => skills.replace('TL;DR; ', '').replace(/\.$/, '').split(', ')

const getSummaryParsed = (summary: string) => {
  const s = summary.split(' ~ ')
  return {
    tldr: getTLDR(s[0]),
    description: s[1]
  }
}

const MemoizedBasics = React.memo(Basics, (prev, next) => prev.theme === next.theme && prev.resume === next.resume)

export default MemoizedBasics

export function Basics({ theme, resume }: Props) {
  const { tldr, description } = getSummaryParsed(resume.basics.summary)
  const [particlesOpacity, setParticlesOpacity] = useState(0)

  useEffect(() => {
    // Add scroll
    const handleScroll = () => {
      const max = 500
      const o = (100 * window.scrollY) / max / 100
      const opacity = o > 100 ? 100 : o
      setParticlesOpacity(opacity)
    }
    window.addEventListener('scroll', handleScroll)

    // Particle by theme
    const theme = document.querySelector('html')?.getAttribute('data-theme') as Theme
    isDarkMode(theme)

    return () => {
      // Remove scroll
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='relative prose min-w-full'>
      <div
        className='absolute inset-0'
        style={{
          opacity: particlesOpacity
        }}>
        {isDarkMode(theme) ? <MatrixParticles className='h-full' /> : <GraphParticles className='h-full' />}
      </div>
      <div className='hero min-h-screen bg-base-300'>
        <div className='hero-content max-w-prose p-8'>
          <div
            className='card glass p-8 flex-col items-center lg:flex-row lg:items-start'
            style={{
              '--glass-blur': '10px',
              '--glass-reflex-opacity': 0.03
            }}>
            <img
              className='mask mask-squircle h-40 w-40 shadow-2xl m-0 mb-8 lg:m-0 lg:mr-8'
              src={resume.basics.picture}
            />
            <div className='text-center lg:text-start'>
              <h1>{resume.basics.name}</h1>
              <p>{description}</p>
              {tldr && (
                <div className='w-full py-4 flex gap-2 flex-wrap'>
                  {tldr.map(s => (
                    <button key={s} className={`btn btn-xs ${getSkillBtnClass(s)}`}>
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
