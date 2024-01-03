import React, { CSSProperties, useCallback } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import _resume from 'resume/_resume.json'
import 'react-vertical-timeline-component/style.min.css'
import 'timeline/timeline.css'
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

type ParsedSummary = {
  role?: string
  projects?: string[]
  companyBusinessModel?: string
  skills?: string[]
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

const getCompany = (company: string) => company.replace('Company business model: ', '')

const getRole = (role: string) => role.replace('Role: ', '')

const getProjects = (projects: string) =>
  projects
    .replace('Projects: ', '')
    .split('. ')
    .map((t, i, a) => (i < a.length - 1 ? `${t}.` : t))

const getSkills = (skills: string) => skills.replace('Skills: ', '').replace(/\.$/, '').replace('and ', '').split(', ')

const getParsedSummary = (summary: string): ParsedSummary => {
  const parsedSummary: ParsedSummary = {}
  const separated = summary.split(' ~ ')
  separated.forEach(s => {
    if (s.startsWith('Role: ')) return (parsedSummary.role = getRole(s))
    if (s.startsWith('Projects: ')) return (parsedSummary.projects = getProjects(s))
    if (s.startsWith('Company business model: ')) return (parsedSummary.companyBusinessModel = getCompany(s))
    if (s.startsWith('Skills: ')) return (parsedSummary.skills = getSkills(s))
  })
  return parsedSummary
}

const Timeline = () => {
  const isDoubleColumn = useMediaQuery('(min-width: 1170px)')

  const getSkillBtnClass = useCallback(
    (skill: string) =>
      ({
        'Next.js': 'btn-skill-nextjs',
        'React.js': 'btn-skill-reactjs',
        Typescript: 'btn-skill-typescript',
        'React Context API': 'btn-skill-reactjs',
        HTML: 'btn-skill-html',
        CSS: 'btn-skill-css',
        Flexbox: 'btn-skill-css',
        'CSS Grid Layout': 'btn-skill-css',
        'REST API': 'btn-skill-rest',
        'Redux.js': 'btn-skill-redux',
        GraphQL: 'btn-skill-graphql',
        Flutter: 'btn-skill-flutter',
        Dart: 'btn-skill-dart',
        Javascript: 'btn-skill-javascript',
        SASS: 'btn-skill-sass',
        Java: 'btn-skill-java',
        'Objective-C': 'btn-skill-objective-c',
        EJS: 'btn-skill-ejs'
      }[skill] || 'btn-neutral-content'),
    [isDoubleColumn]
  )

  return (
    <div className='prose min-w-full'>
      <VerticalTimeline>
        {resume.work?.map(w => {
          const summary = getParsedSummary(w.summary)
          return (
            <VerticalTimelineElement
              key={w.company}
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

              <h4 className='text-neutral-content'>
                <div
                  className={
                    summary.companyBusinessModel
                      ? 'cursor-pointer tooltip tooltip-info tooltip-bottom before:max-w-52'
                      : undefined
                  }
                  data-tip={summary.companyBusinessModel}>{`at ${w.company}`}</div>
              </h4>

              {w.summary && (
                <>
                  {summary.role && (
                    <div className='collapse collapse-arrow bg-base-200 mt-4'>
                      <input type='checkbox' />
                      <div className='collapse-title flex items-center gap-2 text-xl font-medium'>
                        <span className='material-symbols-outlined'>work</span>
                        Role
                      </div>
                      <div className='collapse-content'>
                        <p className='text-base-content'>{summary.role}</p>
                      </div>
                    </div>
                  )}
                  {summary.projects && (
                    <div className='collapse collapse-arrow bg-base-200 mt-4'>
                      <input type='checkbox' />
                      <div className='collapse-title flex items-center gap-2 text-xl font-medium'>
                        <span className='material-symbols-outlined'>web</span>
                        Projects
                      </div>
                      <div className='collapse-content'>
                        <ul>
                          {summary.projects.map((p, i) => (
                            <li key={i} className='text-base-content'>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {summary.skills && (
                    <div className='w-full py-4 flex gap-2 flex-wrap'>
                      {summary.skills.map(s => (
                        <button key={s} className={`btn btn-xs ${getSkillBtnClass(s)}`}>
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}
export default Timeline
