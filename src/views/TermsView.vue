<script setup>
import { ArrowLeft } from 'lucide-vue-next';
import Button from '@/components/ui/Button.vue';
</script>

<template>
  <div class="container mx-auto px-4 md:px-6 py-20 max-w-4xl">
    <RouterLink to="/">
      <Button variant="ghost" class="mb-8 pl-0 hover:bg-transparent hover:text-primary gap-2">
        <ArrowLeft class="h-4 w-4" />
        Back to Home
      </Button>
    </RouterLink>

    <h1 class="text-3xl font-bold mb-8">
      Terms of Service
    </h1>
    <div class="prose prose-neutral dark:prose-invert max-w-none space-y-4">
      <p>Last updated: {{ new Date().toLocaleDateString() }}</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using this website and the Velocity application, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
      </p>

      <h2>2. Use License</h2>
      <p>
        Permission is granted to temporarily download one copy of the materials (information or software) on Velocity' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
      </p>
      <ul class="list-disc pl-6">
        <li>modify or copy the materials;</li>
        <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
        <li>attempt to decompile or reverse engineer any software contained on Velocity' website;</li>
        <li>remove any copyright or other proprietary notations from the materials; or</li>
        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
      </ul>

      <h2>3. Disclaimer</h2>
      <p>
        The materials on Velocity' website are provided on an 'as is' basis. Velocity makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      </p>

      <h2>4. Limitations</h2>
      <p>
        In no event shall Velocity or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Velocity' website, even if Velocity or a Velocity authorized representative has been notified orally or in writing of the possibility of such damage.
      </p>

      <h2>5. Governing Law</h2>
      <p>
        These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
      </p>
    </div>
  </div>
</template>
