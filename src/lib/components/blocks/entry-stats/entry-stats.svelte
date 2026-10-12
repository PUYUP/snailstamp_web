<script lang="ts">
	import * as Card from '#lib/components/ui/card/index.ts';
	import {
		SquareShareLineOutlineIcon,
		Reorder2OutlineIcon,
		FolderCheckOutlineIcon
	} from '@solar-icons/svelte';
	import { MonthlyGraph } from '../monthly-graph';
	import Button from '#lib/components/ui/button/button.svelte';
</script>

<div class="block">
	<Card.Root class="border-0 shadow">
		<Card.Header>
			<Card.Title class="flex items-center gap-3 text-xl">
				<SquareShareLineOutlineIcon size="38" class="text-primary" />
				<span
					class="gaegu-regular text-lg underline decoration-primary decoration-wavy underline-offset-6 lg:text-2xl"
				>
					Entries
				</span>

				<Button
					size="sm"
					class="gluten-font ml-auto border-2 border-dashed text-primary"
					variant="outline"
				>
					View all
				</Button>
			</Card.Title>
		</Card.Header>

		<Card.Content class="px-6 pt-4 lg:px-8">
			<div class="grid grid-cols-2 justify-between divide-x-2 divide-dashed divide-neutral-200">
				<div class="flex flex-col items-start justify-center overflow-hidden">
					<div class="flex flex-col justify-between">
						<div class="mb-1 flex items-center">
							<div class="line-clamp-1 text-sm tracking-widest text-neutral-400">Brewing</div>
							<div class="relative pl-2">
								<Reorder2OutlineIcon size="30" class="text-neutral-400" />
							</div>
						</div>
						<div class="gluten-font text-4xl">1</div>
					</div>
				</div>

				<div class="flex flex-col items-end justify-center overflow-hidden">
					<div class="flex flex-col justify-between">
						<div class="mb-1 flex items-center">
							<div class="line-clamp-1 text-sm tracking-widest text-neutral-400">Served</div>
							<div class="relative pl-2">
								<FolderCheckOutlineIcon size="30" class="text-neutral-400" />
							</div>
						</div>
						<div class="gluten-font text-4xl">34</div>
					</div>
				</div>
			</div>

			<div class="pt-12">
				<MonthlyGraph />
			</div>
		</Card.Content>
	</Card.Root>
</div>
