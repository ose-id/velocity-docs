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
      Privacy Policy
    </h1>
    <div class="prose prose-neutral dark:prose-invert max-w-none space-y-4">
      <p>Last updated: {{ new Date().toLocaleDateString() }}</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to Clone Tools ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
      </p>

      <h2>2. Data We Collect</h2>
      <p>
        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
      </p>
      <ul class="list-disc pl-6">
        <li><strong>Identity Data:</strong> inclusive of username or similar identifier.</li>
        <li><strong>Contact Data:</strong> inclusive of email address.</li>
        <li><strong>Technical Data:</strong> inclusive of internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
      </ul>

      <h2>3. How We Use Your Data</h2>
      <p>
        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
      </p>
      <ul class="list-disc pl-6">
        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
        <li>Where we need to comply with a legal or regulatory obligation.</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
      </p>

      <h2>5. Contact Us</h2>
      <p>
        If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:support@ose.web.id" class="text-primary hover:underline">support@ose.web.id</a>
      </p>
    </div>
  </div>
</template>
