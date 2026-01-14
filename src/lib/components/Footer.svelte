<script lang="ts">
  import { Mail } from 'lucide-svelte';
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-900 text-gray-300 mt-auto">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <!-- Brand & Description -->
      <div class="flex flex-col sm:flex-row sm:items-center gap-4">
        <a href="/" class="text-xl font-bold text-white">MaSelfS</a>
        <span class="hidden sm:block text-gray-600">|</span>
        <p class="text-sm text-gray-400">
          A collaboration between Georgia State University & Vanderbilt University
        </p>
      </div>

      <!-- Contact -->
      <a href="mailto:bshapiro@gsu.edu" class="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
        <Mail class="w-4 h-4" />
        Contact
      </a>
    </div>

    <!-- Copyright & Funding -->
    <div class="mt-6 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
      <p>&copy; {currentYear} Mapping Self in Society (MaSelfS). All rights reserved.</p>
      <p class="mt-2">
        Supported by
        <a href="https://www.spencer.org/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Spencer Foundation</a>
        &
        <a href="https://nsf.gov/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">NSF</a>
      </p>
    </div>
  </div>
</footer>
