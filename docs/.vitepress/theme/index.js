import DefaultTheme from 'vitepress/theme'
import './style.css'

let rootEnglishLabel = 'English'

function syncRootLocaleLabel(siteData, href = '') {
  const locales = siteData.value?.locales
  if (!locales?.root || !locales?.zh) return

  if (locales.root.label && locales.root.label !== locales.zh.label) {
    rootEnglishLabel = locales.root.label
  }

  if (locales.en?.label) {
    rootEnglishLabel = locales.en.label
  }

  const base = siteData.value.base || '/'
  const normalized = href || (typeof window !== 'undefined' ? window.location.pathname : '')
  const relative = normalized.startsWith(base)
    ? normalized.slice(base.length - 1)
    : normalized

  locales.root.label = relative.startsWith('/zh/') ? locales.zh.label : rootEnglishLabel
}

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    syncRootLocaleLabel(ctx.siteData)

    const previous = ctx.router.onAfterRouteChange
    ctx.router.onAfterRouteChange = async (to) => {
      syncRootLocaleLabel(ctx.siteData, to)
      if (previous) {
        await previous(to)
      }
    }
  }
}
