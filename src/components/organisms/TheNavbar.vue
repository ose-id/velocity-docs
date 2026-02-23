<template>
  <header class="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
      <RouterLink to="/" class="flex items-center gap-2 font-bold text-xl">
        <img src="/img/velocity-logo.svg" alt="Velocity Logo" class="h-8 w-auto" width="300" height="300">
      </RouterLink>

      <a href="https://www.ose.web.id/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <span class="text-sm font-medium text-neutral-400">By</span>
        <img src="/img/logo.webp" alt="Ose Logo" class="h-5 w-auto" width="100" height="100">
      </a>
    </div>
  </header>
</template>
