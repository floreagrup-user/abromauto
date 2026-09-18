import { useEffect } from 'react'

interface HeadOptions {
  title: string
  description?: string
  canonicalPath?: string
  image?: string
  noindex?: boolean
  jsonLd?: object | object[]
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useDocumentHead({
  title,
  description,
  canonicalPath,
  image,
  noindex,
  jsonLd,
}: HeadOptions) {
  useEffect(() => {
    const siteName = 'AbRom Auto'
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`
    document.title = fullTitle

    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
    }
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', siteName)
    setMeta('name', 'twitter:card', 'summary_large_image')

    if (image) {
      setMeta('property', 'og:image', image)
      setMeta('name', 'twitter:image', image)
    }

    const origin = window.location.origin
    const canonicalHref = canonicalPath ? `${origin}${canonicalPath}` : window.location.href
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonicalHref)
    setMeta('property', 'og:url', canonicalHref)

    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')
    if (noindex) {
      if (!robots) {
        robots = document.createElement('meta')
        robots.setAttribute('name', 'robots')
        document.head.appendChild(robots)
      }
      robots.setAttribute('content', 'noindex, nofollow')
    } else if (robots) {
      robots.remove()
    }

    const scriptId = 'jsonld-structured-data'
    document.getElementById(scriptId)?.remove()
    if (jsonLd) {
      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }, [title, description, canonicalPath, image, noindex, jsonLd])
}
