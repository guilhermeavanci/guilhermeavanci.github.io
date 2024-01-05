interface IResume {
    basics: IBasics;
    work: IWorkItem[];
    education: IEducationItem[];
    skills: ISkillsItem[];
    languages: ILanguagesItem[];
    projects: IProjectsItem[];
}
interface IBasics {
    name: string;
    label: string;
    picture: string;
    email: string;
    website: string;
    summary: string;
    location: ILocation;
    profiles: IProfilesItem[];
    phone: string;
}
interface ILocation {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
}
interface IProfilesItem {
    network: string;
    username: string;
    url: string;
}
interface IWorkItem {
    company: string;
    position: string;
    website: string;
    startDate: string;
    summary: string;
    highlights: any[];
    endDate: string;
}
interface IEducationItem {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    gpa: string;
    courses: any[];
    endDate: string;
}
interface ISkillsItem {
    name: string;
    level: string;
    keywords: any[];
}
interface ILanguagesItem {
    language: string;
    fluency: string;
}
interface IProjectsItem {
    name: string;
    startDate: string;
    summary: string;
    url: string;
}

