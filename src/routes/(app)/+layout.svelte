<script lang="ts">
	import '../layout.css';
	import * as Sidebar from '#lib/components/ui/sidebar/index.ts';
	import DashboardSidebar from '#lib/components/dashboard-sidebar.svelte';

	let { children } = $props();
</script>

<Sidebar.Provider>
	<DashboardSidebar />
	<main class="min-h-screen w-full">
		<Sidebar.Trigger />
		<section class="block">
			{@render children?.()}
		</section>
	</main>
</Sidebar.Provider>
