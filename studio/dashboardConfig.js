export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '6086daa2f9f32c12032a08bc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vwmuom7v',
                  apiId: '0d837ef9-8fb6-4d40-910c-eb51985b946d'
                },
                {
                  buildHookId: '6086daa21174f10d935790fa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-a6q3uh37',
                  apiId: 'c757f341-24fd-413d-8ecb-582e3985de93'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PHDFernandes15/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-a6q3uh37.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
