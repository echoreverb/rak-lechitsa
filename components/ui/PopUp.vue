<template>
  <div>
    <overlay @overlayClick="togglePopUp" />
    <div class="popup">
      <div class="popup__close" @click="togglePopUp"></div>
      <slot>Содержимое окна</slot>
    </div>
  </div>
</template>

<script>
import Overlay from '@/components/ui/Overlay';
export default {
  props: ['theme'],
  components: {
    overlay: Overlay,
  },
  methods: {
    togglePopUp() {
      this.$store.commit('popup/togglePopUp');
    },
    onEscapeKeyUp(event) {
      if (event.which === 27) {
        this.togglePopUp();
      }
    },
  },
  created() {
    document.onkeydown = (evt) => {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        this.togglePopUp();
      }
    };
  },
  destroyed() {
    document.onkeydown = null;
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  border: 2px solid black;
  box-sizing: border-box;
  padding: 40px;
  background-color: #fff;
  z-index: 10;
}

.popup__close {
  position: absolute;
  top: 45px;
  right: 45px;
  width: 30px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background: center;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%0A%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='7.92879' y1='7.92888' x2='22.0709' y2='22.071' stroke='black' stroke-width='2'/%3E%3Cline x1='7.92864' y1='22.071' x2='22.0708' y2='7.92883' stroke='black' stroke-width='2'/%3E%3C/svg%3E%0A");
}
</style>
