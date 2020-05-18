<template>
  <button
    :class="['button', `button_size_${size}`]"
    :type="type"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    size: {
      type: String,
      default: 'md',
    },
    type: String,
  },
};
</script>

<style scoped>
.button {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  cursor: pointer;
  border: none;
  transition: 0.3s ease;
}
.button_size_xs {
  background-color: transparent;
  color: #c0c0c0;
}
.button_size_sm:hover {
  text-decoration: underline;
}
.button_size_sm {
  padding: 9px 20px;
  background-color: #fbfbfb;
}
.button_size_sm:hover {
  background-color: #f8f8f8;
}
.button_active {
  background-color: #f4f4f4;
}
.button_size_md {
  padding: 17px 44px;
  width: 280px;
  background-color: #613a93;
  color: #fff;
}
.button_size_md:hover {
  opacity: 0.9;
}
.button_size_lg {
  width: 100%;
  padding: 31px 0;
  background-color: #fbfbfb;
  border: none;
}
.button_size_lg:hover {
  background-color: #f8f8f8;
}
</style>
