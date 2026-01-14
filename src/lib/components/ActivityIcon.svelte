<script lang="ts">
	interface Props {
		activityId: number;
		class?: string;
		variant?: 'icon' | 'image';
	}

	let { activityId, class: className = 'w-8 h-8', variant = 'icon' }: Props = $props();

	const thumbnails: Record<number, string> = {
		1: '/images/activity-1-thumb.jpg',
		2: '/images/activity-2-thumb.jpg',
		3: '/images/activity-3-thumb.jpg'
	};
</script>

{#if variant === 'image'}
	<img
		src={thumbnails[activityId]}
		alt=""
		class="{className} object-cover"
	/>
{:else if activityId === 1}
	<!-- Collect: Mobile phone with route/location -->
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
		<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
		<path stroke-linecap="round" stroke-linejoin="round" d="M12 11l-2 2 2 2 4-4" />
		<circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none" />
	</svg>
{:else if activityId === 2}
	<!-- Visualize: Map with layers -->
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
		<path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
	</svg>
{:else if activityId === 3}
	<!-- Reflect: Light bulb -->
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
		<path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
	</svg>
{:else}
	<!-- Fallback: Generic circle -->
	<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
		<circle cx="12" cy="12" r="9" />
	</svg>
{/if}
