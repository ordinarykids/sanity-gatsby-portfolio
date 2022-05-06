export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62755f826a2b301337187b9f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ye7k27ox',
                  apiId: '5391667d-babf-4de1-83ec-9b64b2209d83'
                },
                {
                  buildHookId: '62755f823b34a01a7a99c9e0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dvfkm1hs',
                  apiId: '33e6fd2f-2f74-4bd8-bbfc-8d579b71c6d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ordinarykids/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dvfkm1hs.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
