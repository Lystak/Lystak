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
  visible: true,
  id: 654546543221,
  category: "Jeux vidéos"
}])
</script>

<template>
  <section class="flex-1 flex flex-col bg-gradient-to-tr from-primary to-secondary">

    <div class="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center opacity-20" style="background-image: url(https://unsplash.com/photos/RLw-UC03Gwc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dG9kb3xlbnwwfHx8fDE2NjcyMjU2Nzk&force=true&w=2400)"></div>

    <div class="card bg-base-200 shadow-xl m-4 sm:m-10 gap-y-0 !mb-24">
      <div class="card-body !gap-0">
        <h2 class="card-title mt-4 mb-8 justify-center">Cadeaux</h2>
        <div>
          <router-link :to="{ name: RouteName.Item, params: { itemID: item.id } }" v-for="item of list" class="flex items-center w-full border-b border-base-300 pb-3 pt-3 first:border-t gap-2">
            <div>
              <span class="absolute" v-if="item.doneDate > 0">✔️</span>🔲
            </div>
            <div class="flex-1">
              <strong class="font-bold block">{{ item.label }}</strong>
              <div class="flex items-center">
                <p class="text-sm opacity-50 inline-block">{{ item.description }}</p>
                <span v-if="item.category" class="badge badge-primary ml-2">{{ item.category }}</span>
              </div>
            </div>
          </router-link>
        </div>
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

<style>
</style>
