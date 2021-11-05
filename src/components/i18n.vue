<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale, availableLocales } = useI18n()
const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>
  <template>
  <a
    class="btn btn-sm btn-ghost cursor-pointer md:text-2xl"
    @click="toggleLocales"
  >{{ t('language') }}</a>
</template>
