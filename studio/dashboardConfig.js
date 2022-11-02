export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6361e6ddae9e9932d5b3e32e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xyx3shpc',
                  apiId: 'ee41964b-6cda-4dc1-84a2-2a358e852ed2'
                },
                {
                  buildHookId: '6361e6de6782f3290de93820',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-o7zxzi24',
                  apiId: 'f0f41da4-b702-4b4b-b502-89418966df4d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Qchown31/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-o7zxzi24.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
