<template>
  <div class="sending-options">
    <ul class="sending-options__links">
      <li
        v-for="option in options"
        :key="option.id"
        class="sending-options__item"
      >
        <a
          @click="changeOption(option.id, $event)"
          href="#"
          class="sending-options__link"
          >{{ option.link }}</a
        >
      </li>
    </ul>
    <div class="sending-options__column">
      <p
        class="sending-options__text"
        v-html="
          options
            .find(opt => opt.id == current)
            .text.replace('\n', '<br /><br />')
        "
      ></p>
      <nxt-button
        v-if="options.find(opt => opt.id == current).buttom"
        :text="options.find(opt => opt.id == current).button"
        size="md"
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  props: ['current', 'options'],
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

<style scoped></style>
