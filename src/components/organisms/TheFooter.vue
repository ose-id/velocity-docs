<script setup>
import { h } from 'vue';

const BlueSkyIcon = {
  render: () =>
    h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', class: 'w-4 h-4', fill: 'currentColor' }, [
      h('g', { fill: 'none' }, [
        h('path', {
          d: 'm12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z',
        }),
        h('path', {
          fill: 'currentColor',
          d: 'M5.892 2.93c-1.78-1.06-3.813.446-3.63 2.359l.398 4.185c.176 1.855 1.84 4.026 4.195 3.823C4.5 14 3.132 15.865 4.88 18.145c.286.373.597.745.914 1.062s.69.628 1.062.914c1.88 1.441 4.375-.65 5.055-2.69l.09-.268l.09.269c.68 2.04 3.174 4.13 5.055 2.689c.372-.286.745-.597 1.062-.914s.628-.69.914-1.062c1.747-2.28.379-4.145-1.976-4.848c2.355.203 4.018-1.968 4.195-3.823l.399-4.185c.182-1.913-1.852-3.418-3.631-2.36C15.2 4.66 13.485 7.393 12 9.902C10.515 7.392 8.8 4.66 5.892 2.93',
        }),
      ]),
    ]),
};

const GithubIcon = {
  render: () =>
    h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', class: 'w-4 h-4', fill: 'currentColor' }, [
      h('path', {
        fill: 'currentColor',
        d: 'M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2',
      }),
    ]),
};

const DiscordIcon = {
  render: () =>
    h('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', class: 'w-4 h-4', fill: 'currentColor' }, [
      h('path', {
        fill: 'currentColor',
        d: 'M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12',
      }),
    ]),
};

const footerSections = [
  {
    title: 'Community',
    links: [
      { label: 'BlueSky', href: 'https://bsky.app/profile/ose.web.id', icon: BlueSkyIcon },
      { label: 'GitHub', href: 'https://github.com/ose-id', icon: GithubIcon },
      { label: 'Discord', href: 'https://discord.gg/5vRuSQHm9Y', icon: DiscordIcon },
    ],
  },
];

const legalLinks = [
  { label: 'Privacy Service', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
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
                <a :href="link.href" target="_blank" rel="noopener noreferrer" class="hover:text-foreground transition-colors cursor-pointer flex items-center gap-2">
                  <component :is="link.icon" v-if="link.icon" />
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="relative w-full border-b border-border/40 mb-10">
        <h1 class="text-[12vw] leading-[0.8] font-bold tracking-widest text-center md:text-left select-none pointer-events-none opacity-90">
          VELOCITY
        </h1>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
        <a href="https://www.ose.web.id" target="_blank" class="flex items-center gap-2 font-bold text-foreground">
          <img src="/img/logo.webp" alt="Velocity Logo" class="h-6 w-auto">
        </a>
        <div class="flex gap-6">
          <RouterLink v-for="link in legalLinks" :key="link.label" :to="link.href" class="hover:text-foreground transition-colors cursor-pointer">
            {{ link.label }}
          </RouterLink>
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>
