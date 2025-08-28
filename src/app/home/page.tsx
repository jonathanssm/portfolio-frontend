'use client';

import {Card, CardContent} from '@/components/ui/card';

export default function Home() {
    const experiencias = [
        {
            cargo: 'Desenvolvedor Pleno – First Decision',
            projeto: 'Ministério da Gestão e Inovação (MGI)',
            atividades: [
                'Desenvolvimento e manutenção de aplicações web',
                'Otimizações de bancos de dados e desempenho de sistemas',
            ],
            stack: 'Java, Spring, AngularJS, HTML5, Docker, PostgresSQL, GitLab',
        },
        {
            cargo: 'Desenvolvedor Pleno – Meta',
            projeto: 'Sistema de gestão criminalística',
            atividades: [
                'Desenvolvimento full-stack (RESTful APIs e UI Angular)',
                'Refinamento de histórias de usuários e code reviews',
                'Implantação e suporte técnico à equipe',
            ],
            stack: 'Java 12, Spring Boot, Angular 11, Azure, SQL Server, JUnit, SonarQube',
        },
        {
            cargo: 'Desenvolvedor Full-Stack – Monitora Soluções Tecnológicas',
            projeto: 'Plataforma de reservas de viagens',
            atividades: [
                'Desenvolvimento de microserviços e integrações com APIs de terceiros, como Azul, LATAM, GOL, Localiza, Movida, etc',
                ' Revisão e implantação de código, suporte à equipe'
            ],
            stack: 'Java 8/12, C#, Spring Boot, SQL Server, Kafka, Jenkins',
        },
        {
            cargo: 'Desenvolvedor Full-Stack - AMcom ',
            projeto: 'Sistema de gestão hospitalar (Tasy)',
            atividades: [
                'Desenvolvimento e manutenção de sistemas e banco de dados',
                'Suporte técnico interno e otimizações de performance'
            ],
            stack: 'Java 8, AngularJS, OracleDB, Hibernate, REST',
        },
        {
            cargo: 'Desenvolvedor Full-Stack - Secretaria Municipal da Fazenda',
            projeto: 'Digitalização de serviços públicos',
            atividades: [
                'Desenvolvimento e manutenção de aplicações críticas',
                'Responsável técnico em ausência do arquiteto principal',
                'Implementação de testes automatizados',
            ],
            stack: 'Java 8, Angular 8, Spring Boot, Oracle/MySQL, Docker, JUnit, TestNG',
        }
    ];

    const certificacoes = [
        'Face Recognition with Python and OpenCV - Udemy',
        'Web Development - Udemy',
        'AWS Essential Training for Developers - LinkedIn',
        'Building Java Microservices with gRPC - LinkedIn',
        'Advanced Java Programming - LinkedIn',
        'Inglês Intermediário - Universidade Tiradentes por Cambridge',
    ];

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-8">
            <section className="text-center space-y-4">
                <h1 className="text-2xl sm:text-3xl font-bold">👋 Olá, eu sou Jonathan Moraes</h1>
                <p className="text-base sm:text-lg text-muted-foreground">
                    💻 Desenvolvedor de Software | 🌐 Fullstack (Angular & Java) | 📊 Focado em soluções escaláveis e
                    manutenção de sistemas críticos.
                </p>
            </section>

            <section className="text-center">
                <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
                    <img
                        src="https://github-readme-stats.vercel.app/api?username=jonathanssm&show_icons=true&theme=radical&hide_title=true"
                        alt="GitHub Stats"
                        className="rounded-lg w-full sm:w-[450px] h-auto"
                    />
                    <img
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=jonathanssm&layout=compact&theme=radical&hide_title=true"
                        alt="Top Languages"
                        className="rounded-lg w-full sm:w-[350px] h-auto"
                    />
                </div>
            </section>

            <section>
                <Card>
                    <CardContent className="p-4 sm:p-6 space-y-2 text-center">
                        <p>
                            Sou apaixonado por tecnologia e inovação, com experiência em desenvolvimento web,
                            integrações de sistemas e soluções corporativas. Busco constantemente melhorar minhas
                            habilidades e entregar produtos que agreguem valor real para empresas e usuários.
                        </p>
                    </CardContent>
                </Card>
            </section>

            <section className="text-center space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">🚀 Tecnologias & Ferramentas</h2>
                <div className="flex flex-wrap justify-center gap-6 text-3xl sm:text-4xl">
                    <i className="devicon-angularjs-plain colored"></i>
                    <i className="devicon-typescript-plain colored"></i>
                    <i className="devicon-java-plain colored"></i>
                    <i className="devicon-spring-plain colored"></i>
                    <i className="devicon-hibernate-plain colored"></i>
                    <i className="devicon-postgresql-plain colored"></i>
                    <i className="devicon-oracle-plain colored"></i>
                    <i className="devicon-git-plain colored"></i>
                    <i className="devicon-docker-plain colored"></i>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">🎓 Formação</h2>
                <Card>
                    <CardContent className="p-4 sm:p-6">
                        <p className="font-medium">Bacharelado em Ciência da Computação</p>
                        <p className="text-muted-foreground">UNIT - Universidade Tiradentes</p>
                    </CardContent>
                </Card>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">📌 Experiência Profissional</h2>
                {experiencias.map((exp, idx) => (
                    <Card key={idx} className="mb-4">
                        <CardContent className="p-4 sm:p-6 space-y-2">
                            <h3 className="text-lg sm:text-xl font-semibold">{exp.cargo}</h3>
                            <p className="text-sm sm:text-base text-muted-foreground">{exp.projeto}</p>
                            <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
                                {exp.atividades.map((a, i) => (
                                    <li key={i}>{a}</li>
                                ))}
                            </ul>
                            <p className="text-sm sm:text-base text-muted-foreground">Stack: {exp.stack}</p>
                        </CardContent>
                    </Card>
                ))}
            </section>

            <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">📜 Certificações</h2>
                <Card>
                    <CardContent className="p-4 sm:p-6 space-y-2">
                        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                            {certificacoes.map((cert, i) => (
                                <li key={i}>{cert}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}
