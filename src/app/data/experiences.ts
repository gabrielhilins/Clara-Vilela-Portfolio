export const experiencesData = [
  {
    id: 1,
    title: "Graduação",
    description: "Durante a minha graduação no curso de Arquitetura e Urbanismo, fui apresentada às diversas áreas de atuação de um arquiteto e urbanista, e me identificando cada vez mais com o campo urbanístico. Com as disciplinas e atividades complementares, como a Monitoria de Plastica I, estou sendo capaz de exercitar as minhas habilidades de manufatura e com softwares, de oratória e trabalho em equipe. Encontro-me estagiando no escritório Regina Neri Arquitetura, onde estou aprimorando minhas competências nos softwares Revit e Sketchup, e também praticando as minhas capacidades comunicativas, de proatividade e de adaptabilidade.",
    startDate: new Date(2025, 10, 1), 
    imageUrl: "/GRADUAÇÃO.png",
  },
  {
    id: 2,
    title: "Ensino Médio",
    description: "Cursei o ensino médio no Colégio Militar do Recife entre os anos 2020-2022. Durante este período, tive a oportunidade de experienciar variadas áreas nas atividades extracurriculares, entre elas se destacam a participação de campeonatos de esporte coletivo e da equipe de cerimônias, os quais foram úteis para aprimorar as minhas habilidades comunicativas, principalmente de oratória, e de trabalho em equipe.",
    startDate: new Date(2024, 9, 1), 
    imageUrl: "/EM.png",
  },
].sort((a, b) => b.startDate.getTime() - a.startDate.getTime());