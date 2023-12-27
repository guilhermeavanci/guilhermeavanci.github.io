import React, { CSSProperties } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import _resume from 'resume.json'
import 'react-vertical-timeline-component/style.min.css'
import 'timeline.css'
import { useMediaQuery } from 'custom-hooks/useMediaQuery'
import hiperfy from 'assets/company/hiperfy.jpeg'
import dieselbank from 'assets/company/dieselbank.jpeg'
import ifood from 'assets/company/ifood.jpeg'
import maplink from 'assets/company/maplink.jpeg'
import clubedaentrega from 'assets/company/clubedaentrega.jpeg'
import empresabrasileiradepesquisaagropecuariaembrapa from 'assets/company/empresabrasileiradepesquisaagropecuariaembrapa.jpeg'

export interface MyCustomCSS extends CSSProperties {
  '--text-length': number
}

const resume: IResume = _resume

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr),
    month = date.toLocaleString('en-us', { month: 'short' }),
    year = date.getFullYear()
  return `${month} ${year}`
}

const getImage = (company: string) =>
  ({
    hiperfy,
    dieselbank,
    ifood,
    maplink,
    clubedaentrega,
    empresabrasileiradepesquisaagropecuariaembrapa
  }[company.replace(/[ -]/g, '').toLowerCase()])

const Timeline = () => {
  const isDoubleColumn = useMediaQuery('(min-width: 1170px)')
  return (
    <div className='prose min-w-full'>
      <VerticalTimeline>
        {resume.work?.map(w => (
          <>
            <VerticalTimelineElement
              className='vertical-timeline-element--work timeline-item'
              iconClassName='bg-base-100'
              dateClassName={isDoubleColumn ? 'text-base-content' : 'text-neutral-content'}
              date={`${formatDate(w.startDate)} - ${w.endDate ? formatDate(w.endDate) : 'today'}`}
              iconStyle={{ overflow: 'hidden' }}
              icon={
                <img
                  src={getImage(w.company)}
                  style={{
                    margin: 0
                  }}
                />
              }>
              <h3
                className='type'
                style={
                  {
                    '--text-length': w.position.length
                  } as MyCustomCSS
                }>
                {w.position}
              </h3>
              <h4 className='text-neutral-content'>{w.company}</h4>
              <p className='text-neutral-content'>{w.summary}</p>
            </VerticalTimelineElement>
          </>
        ))}
      </VerticalTimeline>
    </div>
  )
}
export default Timeline
