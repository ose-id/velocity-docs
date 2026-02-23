<script setup>
import CardContent from '@/components/ui/CardContent.vue';
import CardHeader from '@/components/ui/CardHeader.vue';
import CardTitle from '@/components/ui/CardTitle.vue';
import SpotlightCard from '@/components/ui/SpotlightCard.vue';

const testimonials = [
  {
    name: 'Muhammad Fathir Ikhsan',
    role: 'Full Stack Developer',
    avatar: 'https://api.dicebear.com/9.x/fun-emoji/svg?seed=fathir',
    content: 'Velocity has saved me so much time. Setting up a new environment is now just one click away. Highly recommended!',
  },
  {
    name: 'Banny Juanda',
    role: 'Full Stack Developer',
    avatar: 'https://api.dicebear.com/9.x/fun-emoji/svg?seed=banny',
    content: 'The clean interface is a breath of fresh air. It integrates perfectly with VS Code, Cursor, and other IDEs. I can\'t imagine going back to CLI cloning.',
  },
  {
    name: 'Agung Ogya Widodo',
    role: 'Full Stack Developer',
    avatar: 'https://api.dicebear.com/9.x/fun-emoji/svg?seed=agung',
    content: 'I used to have to open the GitHub website to clone a repository. Now I don\'t need to do that anymore. Plus, being able to customize the project name is really helpful.',
  },
];
</script>

<template>
  <section id="testimonials" class="container mx-auto px-4 md:px-6 py-20">
    <div class="text-center mb-16 space-y-4 2k:space-y-8 4k:space-y-12">
      <h2 class="text-3xl lg:text-4xl 2k:text-6xl 4k:text-8xl font-bold tracking-tight uppercase">
        Loved by Developers
      </h2>
      <p class="text-muted-foreground text-base lg:text-lg 2k:text-2xl 4k:text-4xl">
        Don't just take our word for it.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 4k:gap-12">
      <SpotlightCard v-for="item in testimonials" :key="item.name" class="rounded-xl border bg-neutral-950 2k:p-6 4k:p-10">
        <CardHeader>
          <div class="flex items-center gap-4 2k:gap-6 4k:gap-10">
            <img :src="item.avatar" :alt="item.name" class="h-10 w-10 2k:h-16 2k:w-16 4k:h-24 4k:w-24 rounded-full">
            <div>
              <CardTitle class="text-base 2k:text-2xl 4k:text-4xl">
                {{ item.name }}
              </CardTitle>
              <p class="text-xs 2k:text-lg 4k:text-xl text-muted-foreground">
                {{ item.role }}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent class="2k:text-xl 4k:text-3xl 2k:leading-relaxed">
          "{{ item.content }}"
        </CardContent>
      </SpotlightCard>
    </div>
  </section>
</template>
