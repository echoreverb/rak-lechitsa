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
        v-html="
          options
            .find(opt => opt.id == localCurrent)
            .text.replace('\n', '<br /><br />')
        "
      ></p>
      <nxt-button
        v-if="options.find(opt => opt.id == localCurrent).button"
        :text="options.find(opt => opt.id == localCurrent).button"
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
  data() {
    return {
      localCurrent: this.current,
    };
  },
  components: {
    'nxt-button': Button,
  },
  methods: {
    changeOption(id, event) {
      event.preventDefault();
      console.log(this);
      this.localCurrent = id;
    },
  },
};
</script>

<style scoped>
.options {
  display: grid;
  grid-template-columns: 1.16fr 4.1fr;
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
  min-height: 88px;
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

.options__button {
  margin-top: 78px;
}

@media screen and (max-width: 1280px) {
  .options__column {
    padding-bottom: 90px;
  }
  .options__text {
    word-spacing: 0.01em;
  }
}
</style>
