<template>
  <NuxtLayout title="Contact">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">Contact</h2>
    </template>

    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
      <JetstreamFormSection @submitted="submit">
        <template #title>Contact</template>
        <template #description>N'hésitez pas, contactez nous !</template>

        <template #form>
          <!-- Name -->
          <div class="col-span-6 sm:col-span-4">
            <JetstreamLabel for="name" value="Nom" />
            <JetstreamInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" autocomplete="name" />
            <JetstreamInputError :message="errors.name" class="mt-2" />
          </div>

          <!-- Email -->
          <div class="col-span-6 sm:col-span-4">
            <JetstreamLabel for="email" value="Email" />
            <JetstreamInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required />
            <JetstreamInputError :message="errors.email" class="mt-2" />
          </div>

          <!-- Subject -->
          <div class="col-span-6 sm:col-span-4">
            <JetstreamLabel for="subject" value="Objet" />
            <JetstreamInput id="subject" type="text" class="mt-1 block w-full" v-model="form.subject" />
            <JetstreamInputError :message="errors.subject" class="mt-2" />
          </div>

          <!-- Message -->
          <div class="col-span-6 sm:col-span-4">
            <JetstreamLabel for="content" value="Message" />
            <TextArea id="content" class="mt-1 block w-full" v-model="form.content" required />
            <JetstreamInputError :message="errors.content" class="mt-2" />
          </div>
        </template>
        <template #actions>
          <JetstreamActionMessage :on="recentlySuccessful" class="mr-3">
            Envoyé.
          </JetstreamActionMessage>
          <JetstreamButton :class="{ 'opacity-25': sending }" :disabled="sending">
            Envoyer
          </JetstreamButton>
        </template>
      </JetstreamFormSection>
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
export default {
  layout: false,
};
</script>

<script setup lang="ts">
import {fetch} from "~/composables/api";

const form = ref({
  name: '',
  email: '',
  subject: '',
  content: '',
});
const errors = ref({});
const sending = ref(false);
const recentlySuccessful = ref(false);

const submit = async () => {
  if (sending.value) {
    return;
  }
  sending.value = true;
  errors.value = {}
  await fetch('/contact', {
    method: 'POST',
    body: { ...form.value },
  }).then(() => {
    recentlySuccessful.value = true;
    Object.keys(form.value).forEach((key) => { form.value[key] = ''})
  }).catch(reason => {
    errors.value = reason.data.errors
  })
  sending.value = false;
}
</script>
