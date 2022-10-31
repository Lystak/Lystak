<script setup lang="ts">
import { ref } from 'vue';
import RouteName from "@/router/RouteName"

const lists = ref([{
  title: "Courses primeur",
  todo: 5,
  listID: 1
},
{
  title: "Cadeaux",
  todo: 13,
  listID: 2
},
{
  title: "Soirée Julien",
  todo: 3,
  listID: 3
}])
</script>

<template>
  <section class="flex-1 flex flex-col bg-gradient-to-tr from-primary to-secondary">

    <div class="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center opacity-20" style="background-image: url(https://unsplash.com/photos/RLw-UC03Gwc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dG9kb3xlbnwwfHx8fDE2NjcyMjU2Nzk&force=true&w=2400)"></div>

    <div class="card bg-base-200 shadow-xl m-4 sm:m-10 gap-y-0 !mb-24">
      <div class="card-body !gap-0">
        <h2 class="card-title mt-4 mb-8 justify-center">Mes listes</h2>
        <div>
          <router-link :to="{ name: RouteName.List, params: { listID: list.listID } }" v-for="list of lists" class="flex w-full justify-between items-center border-b border-base-300 pb-3 pt-3 first:border-t">
            <string class="font-bold">{{ list.title }}</string>
            <span class="badge badge-primary ml-2">{{ list.todo }}</span>
            <!-- <div class="text-sm opacity-50">{{ item.todo }}</div> -->
          </router-link>
        </div>
      </div>
    </div>

    <ul class="fixed left-0 right-0 bottom-0 justify-center flex gap-5 m-5">
      <li>
        <div class="indicator">
          <span class="indicator-item badge badge-accent">9</span> 
          <a class="btn btn-primary">Invitations</a>
        </div>
      </li>
      <li><a class="btn btn-primary">Profile</a></li>
      <li><a class="btn btn-primary">Add list</a></li>
    </ul>

    <!-- <div class="card w-96 bg-base-200 shadow-xl m-1 sm:m-10">
      <form class="card-body" @submit="submit">
        <h2 class="card-title">Lystak</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <input v-model="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email" class="input w-full max-w-xs" />
        <input v-model="password" type="password" placeholder="Password" required class="input w-full max-w-xs" />
        <div class="card-actions justify-end">
          <input type="submit" value="Login" class="btn btn-primary" />
        </div>
      </form>
    </div> -->

  </section>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
