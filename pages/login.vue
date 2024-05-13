<script setup lang="ts">
//import { v4 as uuid } from 'uuid'

useSeoMeta({
	title: 'Login ',
})

const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')

// const isLoadingStore = useIsLoadingStore()
// const authStore = useAuthStore()
// const router = useRouter()

// const login = async () => {
// 	isLoadingStore.set(true)
// 	await account.createEmailSession(emailRef.value, passwordRef.value)
// 	const response = await account.get()
// 	if (response) {
// 		authStore.set({
// 			email: response.email,
// 			name: response.name,
// 			status: response.status,
// 		})
// 	}

// 	emailRef.value = ''
// 	passwordRef.value = ''
// 	nameRef.value = ''

// 	await router.push('/')
// 	isLoadingStore.set(false)
// }

// const register = async () => {
// 	await account.create(uuid(), emailRef.value, passwordRef.value, nameRef.value)
// 	await login()
// }
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="bg-backrezerv w-2/10 p-5">
      <h1
        class="rounded-md text-center font-bold text-2xl mb-5 hover:text-primary transition-colors"
      >
        Окно Авторизации
      </h1>

      <form>
        <UiInput
          placeholder="Name"
          type="name"
          class="font-bold mb-3  transition-colors hover:text-primary "
          v-model="nameRef"
        />
        <UiInput
          placeholder="Email"
          type="email"
          class="font-bold  mb-3"
          v-model="emailRef"
        />
        <UiInput
          placeholder="Password"
          type="password"
          class="font-bold  mb-3"
          v-model="passwordRef"
        />
       
        
        <div class="flex items-center justify-center gap-3">
        <UiButton class="hover:text-primary "  type='button'  @click="login">
            Вход
        </UiButton>
     
    </div>

      </form>
    </div>
  </div>
</template>

<style scoped>
</style>