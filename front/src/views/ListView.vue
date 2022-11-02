<script setup lang="ts">
import { ref } from 'vue';
import RouteName from "@/router/RouteName"

const list = ref([{
  label: "Raspberry PI",
  description: "4Go",
  doneDate: 0,
  visible: true,
  id: 654654321321,
  category: "Électronique"
},
{
  label: "Clef USB",
  description: "",
  doneDate: 1667323949746,
  visible: true,
  id: 654655521321,
  category: "Électronique"
},
{
  label: "Minecraft",
  description: "Java Édition",
  doneDate: 1667321949746,
  visible: false,
  id: 654546543221,
  category: "Jeux vidéos"
}])
</script>

<template>
  <section class="flex-1 flex flex-col bg-gradient-to-tr from-primary to-secondary">

    <div class="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center opacity-20" style="background-image: url(https://unsplash.com/photos/RLw-UC03Gwc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dG9kb3xlbnwwfHx8fDE2NjcyMjU2Nzk&force=true&w=2400)"></div>

    <div class="card bg-base-200 shadow-xl m-4 sm:m-10 gap-y-0 !mb-24">
      <div class="card-body !gap-0">
        <header class="flex items-center mt-4 mb-8">
          <div class="flex-1">
            <router-link
              :to="{ name: RouteName.Home }"
              class="btn btn-sm md:btn-md btn-ghost gap-2 normal-case lg:gap-3"
            >
              <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
              </svg>
              <div class="flex flex-col items-start">
                <span class="text-base-content/50 hidden text-xs font-normal md:block">Prev</span>
                <span>Home</span>
              </div>
            </router-link>
          </div>
          <h2 class="card-title justify-center">Cadeaux</h2>
          <span class="flex-1"></span>
        </header>
        <ul>
          <li
            class="lystak-item flex items-center relative w-full border-b border-base-300 pb-3 pt-3 first:border-t gap-2"
            v-for="item of list"
          >
            <div class="flex-1" :class="{ 'line-through opacity-60': item.doneDate > 0 }">
              <strong class="font-bold block">{{ item.label }}</strong>
              <div class="flex items-center">
                <p class="text-sm opacity-70 inline-block">{{ item.description }}</p>
                <span v-if="item.category" class="badge badge-primary ml-2">{{ item.category }}</span>
              </div>
            </div>
            <div class="lystak-item-action absolute top-0 left-0 w-full h-full flex items-center justify-end gap-2 bg-base-200 bg-opacity-80">
              <router-link v-if="item.visible" to="/" class="btn">Hide</router-link>
              <router-link v-else to="/" class="btn">Show</router-link>

              <router-link to="/" class="btn">Edit</router-link>

              <router-link v-if="item.doneDate === 0" :to="{ name: RouteName.Item, params: { itemID: item.id } }" class="btn btn-success">Done</router-link>
              <router-link v-else :to="{ name: RouteName.Item, params: { itemID: item.id } }" class="btn">Todo</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <ul class="fixed left-0 right-0 bottom-0 justify-center flex gap-5 m-5">
      <li><a class="btn btn-primary">Edit list</a></li>
      <li>
        <div class="indicator">
          <span class="indicator-item badge badge-accent">9</span> 
          <a class="btn btn-primary">Invitations</a>
        </div>
      </li>
      <li><a class="btn btn-primary">Add item</a></li>
    </ul>

  </section>
</template>

<style lang="scss" scoped>
.lystak-item-action {
  @apply opacity-0;
  @apply translate-y-1/2;
  @apply pointer-events-none;
  @apply transition-[transform,opacity]
}

:global(.no-touch .lystak-item:hover .lystak-item-action) {
  @apply opacity-100;
  @apply translate-y-0;
  @apply pointer-events-auto;
}
</style>
