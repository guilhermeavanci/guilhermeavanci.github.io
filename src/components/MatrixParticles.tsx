import React, { useEffect, useState } from 'react'
import Particles, { IParticlesProps, initParticlesEngine } from '@tsparticles/react'
import { loadAll } from '@tsparticles/all'

const MemoizedMatrixParticles = React.memo(
  MatrixParticles,
  (prev, next) =>
    prev.id === next.id &&
    prev.url === next.url &&
    prev.style === next.style &&
    prev.className === next.className &&
    prev.particlesLoaded === next.particlesLoaded
)

export default MemoizedMatrixParticles

function MatrixParticles(props: Omit<IParticlesProps, 'options'>) {
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
          particles: {
            color: {
              value: '#00FF00'
            },
            move: {
              direction: 'bottom',
              enable: true,
              outModes: {
                default: 'destroy'
              },
              random: true,
              speed: 20,
              straight: true,
              trail: {
                fill: { color: '#000' },
                length: 15,
                enable: true
              }
            },
            number: {
              limit: { value: 40 }
            }
          },
          background: {
            color: '#000'
          },
          fullScreen: {
            enable: false,
            zIndex: -1
          },
          emitters: [
            {
              direction: 'bottom',
              size: {
                width: 100,
                height: 0
              },
              position: {
                x: 50,
                y: 0
              }
            }
          ]
        }}
      />
    )
  )
}
