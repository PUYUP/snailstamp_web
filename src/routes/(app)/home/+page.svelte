<script lang="ts">
	import { EntryStats } from '#lib/components/blocks/entry-stats/index.ts';
	import { CollectionStats } from '#lib/components/blocks/collection-stats/index.ts';
</script>

<div class="block p-6 lg:p-10">
	<div
		class="4xl:grid-cols-4 xl:grap-10 grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 2xl:grid-cols-3"
	>
		<div class="block">
			<EntryStats />
		</div>

		<div class="block">
			<CollectionStats />
		</div>
	</div>
</div>
