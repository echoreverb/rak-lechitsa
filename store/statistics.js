export const state = () => ({
  statistics: [
    {
      id: '1',
      text:
        'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
      barType: '1',
      digits: '1 из 3',
      source: 'Левада-Центр 2018',
      value: 1,
      maxValue: 3,
    },
    {
      id: '2',
      text: '2,6% Россиян имеют онкозаболевания.',
      barType: '1',
      digits: '3 700 000',
      source: 'Росстат 2018',
      value: 2.6,
      maxValue: 100,
    },
    {
      id: '3',
      text:
        'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
      barType: '2',
      digits: '↑28%',
      source: 'МНИОИ Герцена 2018',
      previousValue: 78.1,
      currentValue: 100,
      maxValue: 100,
    },
    {
      id: '4',
      text:
        'На 25% снизилась смертность в течение первого года после постановки диагноза.',
      barType: '2',
      digits: '↓25%',
      source: 'МНИОИ Герцена 2018',
      previousValue: 100,
      currentValue: 75,
      maxValue: 100,
    },
  ],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const getters = {
  getStatistics(state) {
    return state.statistics;
  },
};
