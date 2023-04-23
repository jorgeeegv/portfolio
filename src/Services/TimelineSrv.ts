import { Timeline } from "../Models/Timeline";

export default class TimelineSrv {

    private static timeLine_ES: Timeline[] = [
        {
            from: 2014,
            to: 2017,
            title: 'Bachillerato Tecnología/Técnico Industrial',
            subtitle: 'IES Pere Boïl Manises',
            content: 'Estudie bachillero tecnológico con asignaturas como Tecnología, Física, Matemáticas, Dibujo técnico y diferentes lenguas como Inglés, Valenciá...'
        },
        {
            from: 2017,
            to: 2019,
            title: 'Administración de sistemas informáticos en red',
            subtitle: 'CIPFP Mislata',
            content: 'Realice estudios de ciclo Formativo de Grado Superior de ASIR, donde estudie Gestión de Bases de Datos, Seguridad y Alta disponibilidad, Hardware, Planificación y Administración de Redes...'
        },
        {
            from: 2019,
            to: 2021,
            title: 'Desarrollo de aplicaciones web',
            subtitle: 'CIPFP Mislata',
            content: 'Realice estudios de ciclo Formativo de Grado Superior de Daw con asignaturas como Programación ( Java, JavaScript, CSS, HTML, PHP...), Diseño de interfaces, Desarrollo en cliente y servidor, Implantación de Sistemas Operativos'
        },
        {
            from: 2021,
            to: 'Actual',
            title: 'Front-End Developer',
            subtitle: 'BelikeSoftware / SNGULAR',
            content: 'Actualmente estoy trabajando de desarrollador Front-End usando tecnologías como Angular, SASS, Bootstrap, Cypress, Playwright, etc. Además tambien estoy dando soporte a aplicaciones antiguas con tecnologias como AngularJS y Angular Material'
        }
    ]
    private static timeLine_EN: Timeline[] = [
        {
            from: 2014,
            to: 2017,
            title: 'Baccalaureate Technology/Industrial Technician',
            subtitle: 'IES Pere Boïl Manises',
            content: 'Study technological baccalaureate with subjects such as Technology, Physics, Mathematics, Technical Drawing and different languages ​​such as English, Valencia...'
        },
        {
            from: 2017,
            to: 2019,
            title: 'Administration of networked computer systems',
            subtitle: 'CIPFP Mislata',
            content: 'Carry out ASIR Higher Education Training Cycle studies, where you study Database Management, Security and High Availability, Hardware, Planning and Network Administration...'
        },
        {
            from: 2019,
            to: 2021,
            title: 'Web applications development',
            subtitle: 'CIPFP Mislata',
            content: 'Take Daw Higher Education Cycle studies with subjects such as Programming (Java, JavaScript, CSS, HTML, PHP...), Interface Design, Client and Server Development, Implementation of Operating Systems'
        },
        {
            from: 2021,
            to: 'Actual',
            title: 'Front-End Developer',
            subtitle: 'BelikeSoftware / SNGULAR',
            content: 'I am currently working as a Front-End developer using technologies such as Angular, SASS, Bootstrap, Cypress, Playwright, etc. In addition, I am also supporting old applications with technologies such as AngularJS and Angular Material'
        }
    ]

    public static getTimeLinesES(){
        return this.timeLine_ES; 
    }
    public static getTimeLinesEN(){
        return this.timeLine_EN; 
    }
}