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
                  buildHookId: '5d09d6901bca39e91753b206',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-ek5ym329',
                  apiId: '282b76f2-54de-402e-a01b-4b6f4fe3857a'
                },
                {
                  buildHookId: '5d09d690a531a2d4cbbe36cf',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-ryz4ca95',
                  apiId: '8942b2e3-d437-4efb-8cf2-12b1c60da911'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-gatsby-portfolio-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-2-web-ryz4ca95.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
