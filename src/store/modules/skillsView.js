export default {
  state: {
    education: [
      {
        place: 'Moscow State Transport University',
        profile: 'signaller engineer',
        year: 2013,
        description: 'text'
      },
      {
        place: 'Practicum by Yandex',
        profile: 'Web Development',
        year: 2020,
        description: 'text'
      },
    ],
    workPlaces: [
      {
        place: 'NIIAS',
        profile: 'Web Developer',
        yearStart: 'september 2010',
        yearEnd: 'december 2020',
        description: 'Development of web applications on Vue, Angular frameworks on railway transport. ' +
            'Creation of a backend service using relational databases.'
      },
      {
        place: 'NIIAS',
        profile: 'Chief Specialist of the Transport Security Department',
        yearStart: 'december 2018',
        yearEnd: 'august 2020',
        description: 'Development, implementation of automated control systems for railway transport.\n' +
            'Development of regulatory documents in the field of transport security.\n' +
            'Organization and conduct of tests, examinations of transport security systems - video\n' +
            'surveillance, access control systems, perimeter security.'
      },
      {
        place: ' Russian Railways',
        profile: 'Deputy Head of the Digital Communication Center for Operations',
        yearStart: 'september 2009',
        yearEnd: 'december 2018',
        description: '− Senior Mechanic of the Video Conferencing Department.\n' +
            '− Mechanic of station, dispatching communications and radio communications.\n' +
            '    Duties:\n' +
            '1. Ensuring uninterrupted operation of communication devices at railway stations of the Small Central Ring and railway stations of the city of Moscow.\n' +
            '2. Organization of installation and commissioning works, technological maintenance and repair of telecommunication and radio communication devices.\n' +
            '3. Organization of corporate video conferencing on the Moscow railway.\n' +
            '4. Development of solutions for the integration of various video conferencing systems.'
      },
    ],
    skills: [
      {
        type: 'html', include: ['tags', 'semantics', 'BEM'], percent: 57
      },
      {
        type: 'css', include: ['grid', 'flex', 'selectors', 'sass'], percent: 57
      },
      {
        type: 'JavaScript',
        include: ['array', 'object', 'string', 'destructuring', 'regex', 'sort', 'Git', 'JS ES 2020', 'pattern observer', 'pattern module', 'pattern facade', 'pattern mediator',],
        percent: 51
      },
      {
        type: 'React',
        include: ['idea', 'React&TypeScript', 'Mobx', 'Redux'],
        percent: 63
      },
      {
        type: 'Vue',
        include: ['idea', 'proxy', 'Vuex', 'v-if/v-show/v-else', 'routing', 'forms', 'events', 'Material Vue', 'Vuelidate', 'Hooks', 'protection of routes', 'plugins', 'directives', 'loader', ':key', 'preload page', 'error processing', 'mixin'],
        percent: 66
      },
      {
        type: 'Angular',
        include: ['idea'],
        percent: 30
      },
      {
        type: 'Axios',
        include: ['get','post','cookie','interceptor'],
        percent: 73
      },
      {
        type: 'Antd',
        include: ['components'],
        percent: 60
      },
      {
        type: 'GraphQL',
        include: ['basics', 'API','schema','requests schema','collection links','create a collection','changed collections','deletion', 'apollo', 'mongoDbAtlas'],
        percent: 41
      },
      {
        type: 'Bootstrap',
        include: ['basics'],
        percent: 20
      },
      {
        type: 'FireBase',
        include: ['basics','hosting','database','authentication','add','update'],
        percent: 44
      },
      {
        type: 'Java',
        include: ['idea', 'types variable','mathematical operations','Conditional Operators','cycles','arrays','list','SQL'],
        percent: 42
      },
      {
        type: 'Node js',
        include: ['basics'],
        percent: 50
      },
      {
        type: 'Express',
        include: ['basics', 'experience'],
        percent: 55
      },

    ]
  }
}


// export default {
//   state: {
//     locale: "ru-RU"
//   },
//   mutations: {
//     setLocale(state, key) {
//       return state.locale = key
//     }
//   },
//   actions:{
//     toggleLocale({commit}, key) {
//       commit('setLocale', key)
//     }
//   },
//   getters: {
//     locale(state) {
//       return state.locale
//     }
//   },
//
// }