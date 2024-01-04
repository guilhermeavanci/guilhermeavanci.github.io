import React, { useEffect, useState } from 'react'
import Particles, { IParticlesProps, initParticlesEngine } from '@tsparticles/react'
import { loadAll } from '@tsparticles/all'

const MemoizedGraphParticles = React.memo(
  GraphParticles,
  (prev, next) =>
    prev.id === next.id &&
    prev.url === next.url &&
    prev.style === next.style &&
    prev.className === next.className &&
    prev.particlesLoaded === next.particlesLoaded
)

export default MemoizedGraphParticles

function GraphParticles(props: Omit<IParticlesProps, 'options'>) {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadAll(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    init && (
      <Particles
        {...props}
        id='tsparticles'
        options={{
          background: {
            color: {
              value: '#fff'
            }
          },
          fullScreen: {
            enable: false,
            zIndex: -1
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push'
              },
              onHover: {
                enable: true,
                mode: 'repulse'
              },
              resize: {
                enable: true
              }
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: '#000'
            },
            links: {
              color: '#000',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce'
              },
              random: false,
              speed: 6,
              straight: false
            },
            number: {
              density: {
                enable: true,
                height: 800,
                width: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: 'circle'
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
          detectRetina: true
        }}
      />
    )
  )
}
