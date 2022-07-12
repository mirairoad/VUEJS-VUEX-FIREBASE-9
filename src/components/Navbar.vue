<template>
  <nav>
    <h1>Vuex Auth</h1>
    <template v-if="isAuthReady">
    <!-- for all users -->
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <!-- for logged in users -->
    <div v-if="user">
      <span>{{user.email}}</span>
      <button @click="handleClick">Logout</button>
    </div>
    <!-- for logged out users -->
    <div v-if="!user">
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Signup</router-link>
    </div>
    </template>
  </nav>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

export default {
  setup(){
    const store = useStore()
    const router = useRouter()
    const user = computed(()=>store.state.user)
    const isAuthReady = computed(()=>store.state.isAuthReady)

    const handleClick = () => {
      store.dispatch('logout')
      router.push('/')
    }

    return { 
      handleClick, 
      user,
      isAuthReady
      }
  }

}
</script>