<template>
  <transition name="modal">
    <div class="overlay" @click="close">
      <div class="modal">
        <div class="modal-container" @click.stop>
          <modal-header title="Test Title"></modal-header>
          <modal-body>Test test test</modal-body>
          <modal-actions :close="close"></modal-actions>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ModalHeader from '@/components/Modal/ModalHeader'
import ModalActions from '@/components/Modal/ModalActions'
import ModalBody from '@/components/Modal/ModalBody'
export default {
  name: 'modal',
  components: {
    ModalHeader,
    ModalActions,
    ModalBody
  },
  methods: {
    close: function () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 60%;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  background-color: white;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.38);
  transition: opacity .3s ease;
  z-index: 999;
}

@media (max-width: 480px) {
  .modal-container {
    width: 100vw;
    height: 100vh;
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
