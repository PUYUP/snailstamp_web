<script lang="ts">
	import Badge from '#lib/components/ui/badge/badge.svelte';
	import * as Item from '#lib/components/ui/item/index.ts';
	import {
		Reorder2BoldDuotoneIcon,
		CircleBottomUpLineDuotoneIcon,
		FolderCheckLineDuotoneIcon
	} from '@solar-icons/svelte';
</script>

<div class="block">
	<div class="flex w-full max-w-2xl flex-col gap-6">
		<Item.Root variant="outline" class="bg-sidebar shadow">
			{#snippet child({ props })}
				<a href="##" {...props}>
					<Item.Media variant="icon" class="w-14 flex-col items-center justify-center">
						<FolderCheckLineDuotoneIcon size="40" class="text-primary" />
						<div class="flex flex-col items-center justify-center">
							<div
								class="text-chart-3 underline decoration-primary decoration-wavy underline-offset-4"
							>
								<span class="gluten-font text-base">112.551</span>
							</div>

							<div class="mt-1 block text-xs text-neutral-500">Sets</div>
						</div>
					</Item.Media>
					<Item.Content class="pl-1.5">
						<div class="mb-2 flex items-center gap-4">
							<Badge variant="destructive">Closed</Badge>
							<div class="text-xs text-chart-2">25 April 2026</div>
						</div>
						<Item.Title class="schoolbell-regular text-xl leading-6">
							Silver Saver 4D Miniature Andvance Bottles in the Atlantiser
						</Item.Title>
						<Item.Description class="gaegu-regular text-lg leading-5">
							The only one in the world will be end withoud this hope.
						</Item.Description>
					</Item.Content>
					<Item.Actions>
						<CircleBottomUpLineDuotoneIcon size="32" class="opacity-50" />
					</Item.Actions>
				</a>
			{/snippet}
		</Item.Root>

		<Item.Root variant="outline" class="bg-sidebar shadow">
			{#snippet child({ props })}
				<a href="##" {...props}>
					<Item.Media variant="icon" class="w-14 flex-col items-center justify-center">
						<Reorder2BoldDuotoneIcon size="40" class="text-primary" />
						<div class="flex flex-col items-center justify-center">
							<div
								class="text-chart-3 underline decoration-primary decoration-wavy underline-offset-4"
							>
								<span class="gluten-font text-base">6.234</span>
							</div>

							<div class="mt-1 block text-xs text-neutral-500">Sets</div>
						</div>
					</Item.Media>
					<Item.Content class="pl-1.5">
						<div class="mb-2 flex items-center gap-4">
							<Badge color="primary">Open</Badge>
							<div class="text-xs text-chart-2">25 April 2026</div>
						</div>
						<Item.Title class="schoolbell-regular text-xl leading-6">
							Mail Club October 2026
						</Item.Title>
						<Item.Description class="gaegu-regular text-lg leading-5">
							A story behind "anggrek" with "lily" garden...
						</Item.Description>
					</Item.Content>
					<Item.Actions>
						<CircleBottomUpLineDuotoneIcon size="32" class="opacity-50" />
					</Item.Actions>
				</a>
			{/snippet}
		</Item.Root>

		<Item.Root variant="outline" class="bg-sidebar shadow">
			{#snippet child({ props })}
				<a href="##" {...props}>
					<Item.Media variant="icon" class="w-14 flex-col items-center justify-center">
						<FolderCheckLineDuotoneIcon size="40" class="text-primary" />
						<div class="flex flex-col items-center justify-center">
							<div
								class="text-chart-3 underline decoration-primary decoration-wavy underline-offset-4"
							>
								<span class="gluten-font text-base">1.761</span>
							</div>

							<div class="mt-1 block text-xs text-neutral-500">Sets</div>
						</div>
					</Item.Media>
					<Item.Content class="pl-1.5">
						<div class="mb-2 flex items-center gap-4">
							<Badge variant="destructive">Closed</Badge>
							<div class="text-xs text-chart-2">02 December 2026</div>
						</div>

						<Item.Title class="schoolbell-regular text-xl leading-6">
							Mail Club August 2026
						</Item.Title>
						<Item.Description class="gaegu-regular text-lg leading-5">
							Heartbreak, but make it fun
						</Item.Description>
					</Item.Content>
					<Item.Actions>
						<CircleBottomUpLineDuotoneIcon size="32" class="opacity-50" />
					</Item.Actions>
				</a>
			{/snippet}
		</Item.Root>

		<Item.Root variant="outline" class="bg-sidebar shadow">
			{#snippet child({ props })}
				<a href="##" {...props}>
					<Item.Media variant="icon" class="w-14 flex-col items-center justify-center">
						<FolderCheckLineDuotoneIcon size="40" class="text-primary" />
						<div class="flex flex-col items-center justify-center">
							<div
								class="text-chart-3 underline decoration-primary decoration-wavy underline-offset-4"
							>
								<span class="gluten-font text-base">239</span>
							</div>

							<div class="mt-1 block text-xs text-neutral-500">Sets</div>
						</div>
					</Item.Media>
					<Item.Content class="pl-1.5">
						<div class="mb-2 flex items-center gap-4">
							<Badge variant="destructive">Closed</Badge>
							<div class="text-xs text-chart-2">13 Mar 2026</div>
						</div>
						<Item.Title class="schoolbell-regular text-xl leading-6">Murcee Sticker</Item.Title>
						<Item.Description class="gaegu-regular text-lg leading-5">
							Sizenya beda2 dari 35cm - 38cm
						</Item.Description>
					</Item.Content>
					<Item.Actions>
						<CircleBottomUpLineDuotoneIcon size="32" class="opacity-50" />
					</Item.Actions>
				</a>
			{/snippet}
		</Item.Root>
	</div>
</div>
