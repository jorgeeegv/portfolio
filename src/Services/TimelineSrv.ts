import { Timeline } from "../Models/Timeline";

export default class TimelineSrv {

    private static timeLine: Timeline[] = [
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

    public static getTimeLines(){
        return this.timeLine; 
    }
}