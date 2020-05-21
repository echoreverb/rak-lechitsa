<template>
  <input
    class="input"
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :required="required"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    type: String,
    placeholder: String,
    name: String,
    required: String,
    value: String,
  },

  // ['type', 'placeholder', 'name', 'required', 'value'],
};
</script>
<style scoped>
.input {
  font-size: 18px;
  line-height: 24px;
  border: none;
  outline: none;
  border-bottom: 1px solid #e7e7e7;
  padding: 10px 0;
}
</style>
