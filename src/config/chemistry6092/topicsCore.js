/**
 * Pure Chemistry 6092 (2026) — topic titles and paraphrased learning objectives.
 * Source: SEAB syllabus 6092_y26_sy (subject content, pp. 9–24).
 * Three syllabus sections: Matter · Chemical Reactions · Chemistry in a Sustainable World
 */
export const CHEMISTRY_TOPICS_CORE = [
  {
    id: 'topic-1',
    number: 1,
    syllabusSection: 'Matter',
    name: 'Experimental Chemistry',
    icon: '🔬',
    accent: '#FFE8CC',
    intro:
      'Laboratory skills, separation techniques, and purity tests that underpin practical work and structured exam questions.',
    objectives: [
      'Select suitable apparatus and measure quantities safely in the lab.',
      'Choose and apply separation methods such as filtration, crystallisation, distillation, and chromatography.',
      'Interpret chromatograms and calculate Rf values for comparison of substances.',
      'Use melting and boiling points to judge purity of a sample.',
      'Describe simple experimental procedures for preparation and purification.',
    ],
  },
  {
    id: 'topic-2',
    number: 2,
    syllabusSection: 'Matter',
    name: 'Particulate Nature of Matter',
    icon: '⚛️',
    accent: '#E8F4FF',
    intro:
      'The kinetic particle model links observable changes in state and diffusion to how particles behave.',
    objectives: [
      'Explain properties of solids, liquids, and gases using the kinetic particle theory.',
      'Interpret heating and cooling curves and changes of state.',
      'Describe diffusion and factors affecting its rate.',
      'Distinguish elements, compounds, and mixtures at the particle level.',
      'Relate atomic structure to proton number, nucleon number, and isotopes.',
    ],
  },
  {
    id: 'topic-3',
    number: 3,
    syllabusSection: 'Matter',
    name: 'Chemical Bonding and Structure',
    icon: '🔗',
    accent: '#FFE0F0',
    intro:
      'How atoms combine—ionic, covalent, and metallic bonding—and how structure explains physical properties.',
    objectives: [
      'Draw dot-and-cross diagrams for ionic and covalent substances.',
      'Predict bonding type from properties and composition.',
      'Compare simple molecular substances with giant covalent structures (e.g. diamond, graphite).',
      'Explain electrical conductivity and melting points using structure and bonding.',
      'Describe alloys as mixtures of metals with modified properties.',
    ],
  },
  {
    id: 'topic-4',
    number: 4,
    syllabusSection: 'Chemical Reactions',
    name: 'Chemical Calculations',
    icon: '🧮',
    accent: '#FFF5CC',
    intro:
      'Formulae, equations, and the mole concept for quantitative Chemistry across the syllabus.',
    objectives: [
      'Write balanced chemical equations with state symbols.',
      'Use relative atomic and molecular mass and the mole concept (Avogadro constant).',
      'Calculate reacting masses, gas volumes, and concentrations.',
      'Determine empirical and molecular formulae from data.',
      'Solve limiting reagent, percentage yield, and percentage purity problems.',
    ],
  },
  {
    id: 'topic-5',
    number: 5,
    syllabusSection: 'Chemical Reactions',
    name: 'Acid-Base Chemistry',
    icon: '⚗️',
    accent: '#E5FFE8',
    intro:
      'Acids, alkalis, pH, neutralisation, and salt preparation—including industrial context such as the Haber process.',
    objectives: [
      'Describe properties of acids and alkalis and use the pH scale with indicators.',
      'Explain neutralisation in terms of H⁺ and OH⁻ ions.',
      'Outline methods of preparing soluble and insoluble salts.',
      'Link oxides to acidic, basic, and amphoteric behaviour where required.',
      'Apply ideas from the Haber process without Le Chatelier calculations at O Level.',
    ],
  },
  {
    id: 'topic-6',
    number: 6,
    syllabusSection: 'Chemical Reactions',
    name: 'Qualitative Analysis',
    icon: '🧫',
    accent: '#F0E8FF',
    intro:
      'Systematic tests to identify cations, anions, and gases—essential for practical papers and structured questions.',
    objectives: [
      'Perform and interpret tests for common cations in aqueous solution.',
      'Perform and interpret tests for common anions.',
      'Identify gases produced in reactions using standard tests.',
      'Plan a logical sequence of tests and record observations clearly.',
      'Link test results to ionic equations where appropriate.',
    ],
  },
  {
    id: 'topic-7',
    number: 7,
    syllabusSection: 'Chemical Reactions',
    name: 'Redox Chemistry',
    icon: '🔋',
    accent: '#FFE8E8',
    intro:
      'Oxidation and reduction, electrolysis, electrochemical cells, and selective discharge at electrodes.',
    objectives: [
      'Define oxidation and reduction using oxygen, hydrogen, electron transfer, and oxidation states.',
      'Predict products of electrolysis for molten and aqueous electrolytes.',
      'Apply rules for selective discharge of ions at electrodes.',
      'Construct ionic half-equations and combine them for full cell reactions.',
      'Describe simple cells and the hydrogen–oxygen fuel cell at syllabus depth.',
    ],
  },
  {
    id: 'topic-8',
    number: 8,
    syllabusSection: 'Chemical Reactions',
    name: 'Patterns in the Periodic Table',
    icon: '📊',
    accent: '#E8FFFF',
    intro:
      'Trends across periods and groups, reactivity of metals, and corrosion protection.',
    objectives: [
      'Relate proton number to position in the Periodic Table.',
      'Describe trends in Groups 1, 17, and 18 for required properties.',
      'Outline characteristic properties of transition elements at O-Level depth.',
      'Use the reactivity series to predict displacement reactions.',
      'Explain rusting and methods such as galvanising and sacrificial protection.',
    ],
  },
  {
    id: 'topic-9',
    number: 9,
    syllabusSection: 'Chemical Reactions',
    name: 'Chemical Energetics',
    icon: '🔥',
    accent: '#FFF0E0',
    intro:
      'Energy changes in reactions, bond breaking and making, and energy profile diagrams.',
    objectives: [
      'Distinguish exothermic and endothermic reactions using ΔH sign conventions.',
      'Sketch and interpret energy profile diagrams including activation energy.',
      'Explain bond breaking as endothermic and bond making as exothermic.',
      'Calculate enthalpy changes from bond energy data where given.',
      'Link energy changes to everyday and industrial examples.',
    ],
  },
  {
    id: 'topic-10',
    number: 10,
    syllabusSection: 'Chemical Reactions',
    name: 'Rate of Reactions',
    icon: '⏱️',
    accent: '#E8E8FF',
    intro:
      'Factors affecting speed of reaction and collision theory, including catalysts and enzymes.',
    objectives: [
      'Describe how concentration, pressure, surface area, temperature, and catalysts affect rate.',
      'Explain observations using collision theory and activation energy.',
      'Interpret graphs of mass or volume change against time.',
      'Outline the role of enzymes as biological catalysts.',
      'Design fair experiments to compare rates under controlled conditions.',
    ],
  },
  {
    id: 'topic-11',
    number: 11,
    syllabusSection: 'Chemistry in a Sustainable World',
    name: 'Organic Chemistry',
    icon: '🛢️',
    accent: '#F5FFE8',
    intro:
      'Hydrocarbons, functional groups, and key reactions including fuels, alkenes, alcohols, and polymers.',
    objectives: [
      'Describe fractional distillation of crude oil and uses of fractions.',
      'Draw and name homologous series: alkanes, alkenes, alcohols, carboxylic acids.',
      'Predict products of combustion, addition, and esterification at O-Level depth.',
      'Distinguish saturated and unsaturated hydrocarbons using bromine water.',
      'Describe simple polymerisation and natural vs synthetic polymers where required.',
    ],
  },
  {
    id: 'topic-12',
    number: 12,
    syllabusSection: 'Chemistry in a Sustainable World',
    name: 'Maintaining Air Quality',
    icon: '🌍',
    accent: '#E0F5FF',
    intro:
      'Composition of air, pollutants, climate-related chemistry, and strategies to reduce environmental impact.',
    objectives: [
      'State the composition of clean dry air and explain separation of oxygen/nitrogen industrially.',
      'Identify sources and effects of pollutants such as CO, SO₂, NOₓ, and particulates.',
      'Describe catalytic converters and flue-gas desulfurisation in outline.',
      'Explain the ozone layer, CFCs, and greenhouse gases in syllabus context.',
      'Outline the carbon cycle and human influences on atmospheric composition.',
    ],
  },
]
