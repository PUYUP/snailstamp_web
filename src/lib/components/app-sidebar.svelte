<script lang="ts">
	import * as Sidebar from '#lib/components/ui/sidebar/index.ts';
	import Snailbrand from './ui/snailbrand/snailbrand.svelte';
</script>

<Sidebar.Root>
	<Sidebar.Header>
		<div class="p-3">
			<Snailbrand className="text-4xl gap-1" />
		</div>
	</Sidebar.Header>

	<Sidebar.Content>
		<Sidebar.Group />
		<Sidebar.Group />
	</Sidebar.Content>
	<Sidebar.Footer />
</Sidebar.Root>
