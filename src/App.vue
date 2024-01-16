<script setup>
import { computed, ref, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const link = ref('/about')
const switched = ref(false)

watch(
  () => switched.value,
  (hasSwitched) => {
    console.log('hasSwitched', hasSwitched)
    if (!hasSwitched) {
      link.value = '/about'
    } else {
      link.value = '/'
    }
  },
  { immediate: true }
)

const home = ref({ label: 'Home', code: 'home', icon: 'DisplayHome24' })

const features = computed(() => [
  {
    label: 'About',
    code: 'about',
    icon: 'DisplayDisplayProductX4Outline24',
    route: link.value
  }
])
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <MButton
        label="Update Sidebar Route"
        @click="switched = !switched"
        :theme="switched ? 'bordered' : null"
      />
    </div>
  </header>
  <MSidebar :home="home" :features="features" open />

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
