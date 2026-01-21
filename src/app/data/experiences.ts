export const experiencesData = [
  {
    id: 1,
    title: "Estagiária de Arquitetura",
    description: "Desenvolvimento de projetos arquitetônicos, desde a concepção até o detalhamento, utilizando AutoCAD e Revit.",
    timeRange: "Novembro 2025 - Presente",
    startDate: new Date(2025, 10, 1), 
    imageUrl: "/GRADUAÇÃO.png",
  },
  {
    id: 2,
    title: "Monitora de Plástica",
    description: "Apoio na elaboração de plantas, cortes e fachadas. Compatibilização de projetos complementares.",
    timeRange: "Outubro 2024 - Outubro 2025",
    startDate: new Date(2024, 9, 1), 
    imageUrl: "/EM.png",
  },
  {
    id: 3,
    title: "Graduação",
    description: "Auxílio a alunos na disciplina de Desenho Técnico, tirando dúvidas e corrigindo exercícios.",
    timeRange: "Agosto 2023 - Presente",
    startDate: new Date(2023, 7, 1), 
    imageUrl: "/GRADUAÇÃO.png",
  },
  {
    id: 4,
    title: "Ensino Médio",
    description: "Participação em projetos de construção e reforma de moradias para comunidades carentes.",
    timeRange: "Janeiro 2020 - Dezembro 2022",
    startDate: new Date(2020, 0, 1), 
    imageUrl: "/EM.png",
  },
].sort((a, b) => b.startDate.getTime() - a.startDate.getTime()); 