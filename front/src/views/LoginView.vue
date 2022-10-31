<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import RouteName from "@/router/RouteName"

const router = useRouter()
const email = ref("")
const password = ref("")

const submit = (event: Event) => {
  event.preventDefault();
  router.push({ name: RouteName.Home })
}
</script>

<template>
  <section class="flex-1 flex justify-end items-center bg-gradient-to-tr from-primary to-secondary">

    <div class="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center opacity-20" style="background-image: url(https://unsplash.com/photos/RLw-UC03Gwc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dG9kb3xlbnwwfHx8fDE2NjcyMjU2Nzk&force=true&w=2400)"></div>

    <div class="card w-96 bg-base-200 shadow-xl m-1 sm:m-10">
      <form class="card-body" @submit="submit">
        <h2 class="card-title">Lystak</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <input v-model="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email" class="input w-full max-w-xs" />
        <input v-model="password" type="password" placeholder="Password" required class="input w-full max-w-xs" />
        <div class="card-actions justify-end">
          <input type="submit" value="Login" class="btn btn-primary" />
        </div>
      </form>
    </div>

  </section>
</template>
