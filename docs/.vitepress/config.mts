import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search Document'
          },
          modal: {
            noResultsText: 'Find Nothing',
            resetButtonTitle: 'Clear Results',
            footer: {
              selectText: 'Select',
              navigateText: 'Switch',
              closeText: 'Close'
            }
          }
        }
      }
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Categories', link: '/categories' },
      { text: 'Tags', link: '/tags' }
    ],

    sidebar: [
      {
        text: 'Navigation',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Categories', link: '/categories' },
          { text: 'Tags', link: '/tags' }
        ]
      },      
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
