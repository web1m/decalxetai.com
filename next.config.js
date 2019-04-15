const withCSS = require('@zeit/next-css')
const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)

module.exports = withCSS({
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader'
    })
    return cfg
  },
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    if (dev) {
      return defaultPathMap
    }
    // This will copy robots.txt from your project root into the out directory
    await copyFile(
      join(dir, 'static', 'robots.txt'),
      join(outDir, 'robots.txt')
    )

    const pathMap = {
      '/': { page: '/index' },
      '/gioi-thieu': { page: '/gioi-thieu' },
      '/blog': { page: '/blog' },
      '/bao-gia': { page: '/bao-gia' },
      '/lien-he': { page: '/lien-he' },
      '/404': { page: '/404' }
    }

    const SUMMARY_BLOG_JSON = require('./content/blog/summary.json')
    let posts = []
    SUMMARY_BLOG_JSON.fileMap &&
      Object.keys(SUMMARY_BLOG_JSON.fileMap).forEach(file => {
        const fileObj = SUMMARY_BLOG_JSON.fileMap[file]
        posts.push(fileObj)
      })

    posts.map(post => {
      pathMap[`/blog/${post.slug}`] = {
        page: '/post',
        query: { q: post.sourceBase.split('.')[0] }
      }
    })

    return pathMap
  }
})
