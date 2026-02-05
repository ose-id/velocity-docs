<script setup>
const footerSections = [
  {
    title: 'Community',
    links: [
      { label: 'GitHub', href: 'https://github.com/adydetra/clone-tools' },
      { label: 'Twitter', href: '#' },
      { label: 'Discord', href: '#' },
    ],
  },
];

const legalLinks = [
  { label: 'Privacy Service', href: '#' },
  { label: 'Terms of Service', href: '#' },
];
</script>

<template>
  <footer class="bg-background border-t border-border/40 pt-20 pb-10 overflow-hidden">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div>
          <h3 class="text-2xl font-medium tracking-tight">
            Experience speed.
          </h3>
        </div>
        <div class="grid grid-cols-2 gap-8 text-sm text-muted-foreground">
          <div v-for="section in footerSections" :key="section.title" class="space-y-3">
            <h4 class="font-medium text-foreground">
              {{ section.title }}
            </h4>
            <ul class="space-y-2">
              <li v-for="link in section.links" :key="link.label">
                <a :href="link.href" class="hover:text-foreground transition-colors cursor-pointer">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="relative w-full border-b border-border/40 mb-10">
        <h1 class="text-[12vw] leading-[0.8] font-bold tracking-tighter text-center md:text-left select-none pointer-events-none opacity-90 mx-[-2vw]">
          CLONE TOOLS
        </h1>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
        <div class="flex items-center gap-2 font-bold text-foreground">
          <img src="/img/logo.png" alt="Clone Tools Logo" class="h-6 w-auto">
        </div>
        <div class="flex gap-6">
          <a
            v-for="link in legalLinks"
            :key="link.label"
            :href="link.href"
            class="hover:text-foreground transition-colors cursor-pointer"
          >
            {{ link.label }}
          </a>
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>
