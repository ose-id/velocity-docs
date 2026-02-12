<script setup>
import Card from '@/components/ui/Card.vue';
import CardContent from '@/components/ui/CardContent.vue';
import CardHeader from '@/components/ui/CardHeader.vue';
import CardTitle from '@/components/ui/CardTitle.vue';

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
    <div class="text-center mb-16 space-y-4">
      <h2 class="text-3xl font-bold tracking-tight uppercase">
        Loved by Developers
      </h2>
      <p class="text-muted-foreground">
        Don't just take our word for it.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card v-for="item in testimonials" :key="item.name" class="bg-background">
        <CardHeader>
          <div class="flex items-center gap-4">
            <img :src="item.avatar" :alt="item.name" class="h-10 w-10 rounded-full">
            <div>
              <CardTitle class="text-base">
                {{ item.name }}
              </CardTitle>
              <p class="text-xs text-muted-foreground">
                {{ item.role }}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          "{{ item.content }}"
        </CardContent>
      </Card>
    </div>
  </section>
</template>
