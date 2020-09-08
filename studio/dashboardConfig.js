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
                  buildHookId: '5f57e678bed3c122a600379c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wdg11dyy',
                  apiId: '7c36adf5-ef6d-4cd7-a813-3c5084e1cdb6'
                },
                {
                  buildHookId: '5f57e679e6317e234ce9f53c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-uh585kv9',
                  apiId: 'ec9fffb0-522c-42ad-ab47-74f344424bcd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anibalpadilla/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-uh585kv9.netlify.app', category: 'apps'}
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
