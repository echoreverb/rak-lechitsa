<template>
  <div :class="`options options_theme_${theme}`">
    <ul class="options__links">
      <li v-for="option in options" :key="option.id" class="options__item">
        <a
          @click="changeOption(option.id, $event)"
          href="#"
          :class="
            option.id == current
              ? 'options__link options__link_active'
              : 'options__link'
          "
          >{{ option.link }}</a
        >
      </li>
    </ul>
    <div class="options__column">
      <p
        class="options__text"
        v-html="
          options
            .find(opt => opt.id == current)
            .text.replace('\n', '<br /><br />')
        "
      ></p>
      <nxt-button
        v-if="options.find(opt => opt.id == current).button"
        :text="options.find(opt => opt.id == current).button"
        size="md"
        class="options__button"
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  props: ['current', 'options', 'theme'],
  components: {
    'nxt-button': Button,
  },
  methods: {
    changeOption(id, event) {
      event.preventDefault();
      console.log(this);
      this.current = id;
    },
  },
};
</script>

<style scoped>
.options {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 40px;
}

.options__links {
  text-align: right;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  list-style: none;
  padding: 0;
}

.options__item {
  padding: 0;
  margin-bottom: 10px;
}
.options__link {
  text-decoration: none;
  font-size: 18px;
  line-height: 22px;
  transition: 0.5s ease;
}
.options__link_active {
  font-weight: 500;
}
.options__text {
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 78px;
}
.options_theme_light .options__link {
  color: #a2a2a2;
}
.options_theme_light .options__link_active,
.options_theme_light .options__link:hover {
  color: #000;
}
.options_theme_light .options__text {
  color: #666666;
}
.options_theme_dark .options__link {
  color: #c9c9c9;
}
.options_theme_dark .options__link_active,
.options_theme_dark .options__link:hover {
  color: #fff;
}
.options_theme_dark .options__text {
  color: #dedede;
}
</style>
