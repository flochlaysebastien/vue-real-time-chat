<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New message (press enter to add):</label>
      <input type="text" name="new-message" v-model="newMessage" />
      <p v-if="feedback" class="red-text">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: "NewMessage",
  props: {
    name: String
  },
  data() {
    return {
      newMessage: null,
      feedback: null
    };
  },
  methods: {
    addMessage() {
      if (!this.newMessage) {
        this.feedback = "You must enter a message in order to send one";
        return
      }

      db.collection('messages').add({
          name: this.name,
          content: this.newMessage,
          timestamp: Date.now()
      }).catch(err => {
          console.log(err)
      })

      this.newMessage = null
      this.feedback = null;
      console.log(this.newMessage, this.name, Date.now());
    }
  }
};
</script>

<style>
</style>