export const state = () => ({
  statistics: [
    {
      id: 1,
      summary: '1 из 3',
      source: 'Левада-Центр 2018',
      description:
        'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
      oldValue: 0,
      currentValue: 48918000,
      maxValue: 150000000,
      created_at: '2020-05-21T09:14:16.633Z',
      updated_at: '2020-05-21T09:14:16.633Z',
    },
    {
      id: 2,
      summary: '3 700 000',
      source: 'Росстат 2018',
      description: '2,6% Россиян имеют онкозаболевания.',
      oldValue: 0,
      currentValue: 3700000,
      maxValue: 150000000,
      created_at: '2020-05-21T09:14:54.220Z',
      updated_at: '2020-05-21T09:14:54.220Z',
    },
    {
      id: 3,
      summary: '↑28%',
      source: 'МНИОИ Герцена 2018',
      description:
        'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
      oldValue: null,
      currentValue: null,
      maxValue: 100,
      created_at: '2020-05-21T09:15:58.466Z',
      updated_at: '2020-05-21T09:15:58.466Z',
    },
    {
      id: 4,
      summary: '↓25%',
      source: 'МНИОИ Герцена 2018',
      description:
        'На 25% снизилась смертность в течение первого года после постановки диагноза.',
      oldValue: null,
      currentValue: null,
      maxValue: 100,
      created_at: '2020-05-21T09:16:28.521Z',
      updated_at: '2020-05-21T09:16:28.521Z',
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
