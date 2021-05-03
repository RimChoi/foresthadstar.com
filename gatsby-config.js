require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteHeadline: `RIM`,
    siteTitle: `RIM`,
     // Default title of the page
    siteTitleAlt: `林 :: 수오재(守吾齋)`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://foresthadstar.com`,
    // Used for SEO
    siteDescription: `개인적인 이야기. 일상에서 만나는 디버깅과 트러블슈팅. 공부하는 기록을 남깁니다`,
    author: `RimChoi`,
    siteLanguage: `KR`,
    siteImage: `/banner.jpg`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content/pages`,
        path: `content/pages`,
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        formatString: `YYYY.MM.DD`,
        navigation: [
        
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://www.github.com/rimChoi`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/maseong_rim`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://foresthadstar.com',
        sitemap: 'https://foresthadstar.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Archive for scribbling`,
        short_name: `rim-blog`,
        description: `blog, portfolio, notepad`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#E0523C`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
