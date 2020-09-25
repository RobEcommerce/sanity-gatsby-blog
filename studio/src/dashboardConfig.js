export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f6e35fed1e1c512ed44bdab',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kibxqzak',
                  apiId: 'ba87d4e4-4775-4034-a3dd-1903404dc00b'
                },
                {
                  buildHookId: '5f6e35ff4a1d0f177d8ae26d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-c71in5kg',
                  apiId: '1d1bb5e7-2d18-4241-8929-1a613b087bd0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RobEcommerce/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-c71in5kg.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
