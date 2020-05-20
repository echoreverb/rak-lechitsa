<template>
  <div :class="`options options_theme_${theme}`">
    <ul class="options__links">
      <li v-for="option in options" :key="option.id" class="options__item">
        <a
          @click="changeOption(option.id, $event)"
          href="#"
          :class="
            option.id == localCurrent
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
        v-html="currentOption.text.replace('\n', '<br /><br />')"
      ></p>
      <nxt-button
        v-if="currentOption.button"
        :text="currentOption.button"
        @click="clickHandler"
        size="md"
        class="options__button"
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  props: ['type', 'theme'],
  data() {
    return {
      localCurrent: 0,
    };
  },
  computed: {
    options() {
      return this.$store.getters['options/getOptions'][this.type];
    },
    currentOption() {
      return this.options.find((opt) => opt.id === this.localCurrent);
    },
  },
  components: {
    'nxt-button': Button,
  },
  methods: {
    changeOption(id, event) {
      event.preventDefault();
      this.localCurrent = id;
    },
    clickHandler() {
      if (this.currentOption.clickParam) {
        this.$store.commit(this.currentOption.clickParam);
      }
    },
  },
};
</script>

<style scoped>
.options {
  display: grid;
  grid-template-columns: 1.18fr 4fr;
  grid-column-gap: 40px;
}

.options__column {
  display: flex;
  height: 100%;
  padding-bottom: 100px;
  flex-direction: column;
  justify-content: space-between;
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
}
.options_theme_light .options__link {
  color: #a2a2a2;
}
.options_theme_light .options__link_active,
.options_theme_light .options__link:hover {
  color: #000;
}
.options_theme_light .options__text {
  color: #666;
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
