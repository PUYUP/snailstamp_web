<script>
	import { EntryList } from '#lib/components/blocks/entry-list/index.ts';
	import { Button } from '#lib/components/ui/button/index.ts';
	import { AddCircleOutlineIcon } from '@solar-icons/svelte';
</script>

<div id="entries-page" class="block p-6 lg:p-8">
	<div class="mb-6 flex items-center">
		<h3 class="gaegu-regular text-3xl">Entries</h3>
		<Button size="lg" class="gluten-font ml-auto border-2 border-dashed py-6">
			<AddCircleOutlineIcon size="26" /> New entry
		</Button>
	</div>

	<EntryList />
</div>
