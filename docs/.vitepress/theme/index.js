import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import MediumZoom from 'medium-zoom'
import './style/var.css'

// 使用medium-zoom添加图片放大效果
// https://github.com/vuejs/vitepress/issues/854#issuecomment-1232938474
// https://github.com/Zhengqbbb/cz-git/blob/5637a6006b/docs/.vitepress/components/composables/useMediumZoom.ts


export default {
  ...DefaultTheme,
  setup() {
    const route = useRoute()
    const initZoom = () => {
      new MediumZoom('.main img', {scrollOffset: 0, background: 'var(--vp-c-bg-overlay)'})
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}