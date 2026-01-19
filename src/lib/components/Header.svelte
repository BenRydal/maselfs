<script lang="ts">
  import { activities } from '$lib/data/activities';
  import ActivityIcon from '$lib/components/ActivityIcon.svelte';
  import { ChevronDown, Menu, X } from 'lucide-svelte';

  let mobileMenuOpen = $state(false);
  let activitiesDropdownOpen = $state(false);

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    if (!mobileMenuOpen) {
      activitiesDropdownOpen = false;
    }
  }

  function closeMenu() {
    mobileMenuOpen = false;
    activitiesDropdownOpen = false;
  }

  function toggleActivitiesDropdown() {
    activitiesDropdownOpen = !activitiesDropdownOpen;
  }

  function closeDropdown() {
    activitiesDropdownOpen = false;
  }
</script>

<svelte:window onclick={closeDropdown} />

<header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2 group" onclick={closeMenu}>
        <span class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          MaSelfS
        </span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center gap-1">
        <a
          href="/overview"
          class="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
        >
          Overview
        </a>

        <!-- Activities Dropdown -->
        <div class="relative">
          <button
            class="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            onclick={(e) => { e.stopPropagation(); toggleActivitiesDropdown(); }}
            aria-expanded={activitiesDropdownOpen}
            aria-haspopup="true"
          >
            Activities
            <ChevronDown class="w-4 h-4 transition-transform {activitiesDropdownOpen ? 'rotate-180' : ''}" />
          </button>

          {#if activitiesDropdownOpen}
            <div
              role="menu"
              tabindex="-1"
              class="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
              onclick={(e) => e.stopPropagation()}
              onkeydown={(e) => e.key === 'Escape' && closeDropdown()}
            >
              {#each activities as activity}
                <a
                  href="/activity/{activity.id}"
                  role="menuitem"
                  class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  onclick={closeDropdown}
                >
                  <div class="w-10 h-10 rounded-lg overflow-hidden shrink-0 shadow-sm">
                    <ActivityIcon activityId={activity.id} variant="image" class="w-full h-full" />
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p class="text-xs text-gray-500 line-clamp-1">{activity.subtitle}</p>
                  </div>
                </a>
              {/each}
            </div>
          {/if}
        </div>

        <a
          href="/resources"
          class="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
        >
          Resources
        </a>

        <a
          href="/about"
          class="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
        >
          About
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
        onclick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
      >
        {#if mobileMenuOpen}
          <X class="w-6 h-6" />
        {:else}
          <Menu class="w-6 h-6" />
        {/if}
      </button>
    </div>

    <!-- Mobile Navigation -->
    {#if mobileMenuOpen}
      <div class="lg:hidden border-t border-gray-100 py-4">
        <div class="flex flex-col gap-1">
          <a
            href="/overview"
            class="px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            onclick={closeMenu}
          >
            Overview
          </a>

          <!-- Mobile Activities Accordion -->
          <div>
            <button
              class="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onclick={(e) => { e.stopPropagation(); toggleActivitiesDropdown(); }}
              aria-expanded={activitiesDropdownOpen}
              aria-haspopup="true"
            >
              Activities
              <ChevronDown class="w-5 h-5 transition-transform {activitiesDropdownOpen ? 'rotate-180' : ''}" />
            </button>

            {#if activitiesDropdownOpen}
              <div class="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-4">
                {#each activities as activity}
                  <a
                    href="/activity/{activity.id}"
                    class="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    onclick={closeMenu}
                  >
                    <div class="w-8 h-8 rounded-lg overflow-hidden shrink-0 shadow-sm">
                      <ActivityIcon activityId={activity.id} variant="image" class="w-full h-full" />
                    </div>
                    {activity.title}
                  </a>
                {/each}
              </div>
            {/if}
          </div>

          <a
            href="/resources"
            class="px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            onclick={closeMenu}
          >
            Resources
          </a>

          <a
            href="/about"
            class="px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            onclick={closeMenu}
          >
            About
          </a>
        </div>
      </div>
    {/if}
  </nav>
</header>

<!-- Spacer for fixed header -->
<div class="h-16"></div>
