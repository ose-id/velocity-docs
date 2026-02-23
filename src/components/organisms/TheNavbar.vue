<template>
  <header class="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto flex h-14 2k:h-20 4k:h-28 items-center justify-between px-4 md:px-6 4k:px-12">
      <RouterLink to="/" class="flex items-center gap-2 font-bold text-xl">
        <img src="/img/velocity-logo.svg" alt="Velocity Logo" class="h-8 2k:h-12 4k:h-16 w-auto" width="300" height="300">
      </RouterLink>

      <a href="https://www.ose.web.id/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 2k:gap-4 4k:gap-6 hover:opacity-80 transition-opacity">
        <span class="text-sm 2k:text-xl 4k:text-3xl font-medium text-neutral-400">By</span>
        <img src="/img/logo.webp" alt="Ose Logo" class="h-5 2k:h-8 4k:h-12 w-auto" width="100" height="100">
      </a>
    </div>
  </header>
</template>
