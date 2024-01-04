export const getSkillBtnClass = (skill: string) =>
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
  }[skill] || 'btn-neutral-content')
