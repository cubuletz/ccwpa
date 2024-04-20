<template>
  <div>
    <NuxtLayout name="main">
      <!-- MAIN -->
      <template #headline>
        <div class="space-y-10">
          <!-- HEADLINE H1 -->
          <h1 class="text-4xl font-bold">{{ pageTitle }}</h1>
        </div>
      </template>

      <!-- MAIN -->
      <template #main>
        <div class="space-y-10">
          <!-- SECTION 1 -->
          <section class="space-y-5">
            <div class="space-y-2 text-base text-neutral-600">
              <p>
                Welcome to CCWPA, a tool designed to enhance the accessibility
                of digital content across the web. The application addresses
                critical challenges in web design by ensuring that all users,
                regardless of their visual capabilities, can access and enjoy
                online content with ease.
              </p>
              <p>
                At CCWPA, the creator understand that accessibility is not just
                a feature but a fundamental aspect of web usability. This is why
                this tool is built to adhere to the latest Web Content
                Accessibility Guidelines (WCAG) standards. Providing a Colour
                Contrast Checker that evaluates the visibility and legibility of
                text against its background, ensuring that digital content is
                not only visually appealing but also accessible to everyone,
                including those with impaired vision.
              </p>
              <p>
                What sets CCWPA apart is the interactive 'User Testing Feature.
                This tool allows real-world users to engage directly with
                different colour contrasts and provide feedback on their
                effectiveness in real-time scenarios. This approach not only
                enhances the functionality of the tool but also incorporates a
                broad spectrum of human experiences and opinions, offering a
                more comprehensive view of colour visibility.
              </p>
              <p>
                The studies, such as the one conducted by Zhuang et al. (2021),
                have shown significant insights into how visual acuity and
                contrast sensitivity deteriorate with age. These findings
                underscore the necessity for tools like CCWPA that can adapt to
                the diverse needs of an aging global population.
              </p>
              <p>
                CCWPA is committed to maintaining high ethical standards in all
                the operations. CCWPA collects only essential information to
                minimize privacy risks and adhere to stringent data protection
                regulations.
              </p>
              <p>
                CCWPA is not just a tool; it's a movement towards a more
                inclusive digital environment. The application invite users,
                developers, and designers to join in refining this tool,
                enhancing its capabilities, and spreading the word about the
                importance of accessibility in digital content.
              </p>
              <p>
                Together, we can transform the web into a space that truly
                reflects the diversity of its users, making every interaction
                clear, understandable, and enjoyable for everyone.
              </p>
            </div>
          </section>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  name: 'PageAbout',
}
</script>

<script setup>
// Page title
const pageTitle = 'About'

// PAGE HEAD
useHead({
  title: pageTitle,
  /*  bodyAttrs: {
    class: '',
  }, */
})

// PAGE META
definePageMeta({
  // Middleware
  // middleware: [],
})
</script>

<style lang="postcss" scoped></style>
