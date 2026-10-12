<script lang="ts">
	import { page } from '$app/state';
	import type { Component } from 'svelte';
	import * as Sidebar from '#lib/components/ui/sidebar/index.ts';
	import * as Avatar from '#lib/components/ui/avatar/index.ts';
	import * as Item from '#lib/components/ui/item/index.ts';
	import Snailbrand from './ui/snailbrand/snailbrand.svelte';
	import {
		HomeOutlineIcon,
		SquareShareLineOutlineIcon,
		LibraryOutlineIcon,
		SettingsOutlineIcon,
		UsersGroupRoundedOutlineIcon,
		BuildingsOutlineIcon
	} from '@solar-icons/svelte';

	type MenuItem = {
		title: string;
		href: string;
		icon: Component<any>;
		badge?: boolean;
	};

	const menuItems: MenuItem[] = [
		{ title: 'Home', href: '/home', icon: HomeOutlineIcon },
		{ title: 'Entries', href: '/entries', icon: SquareShareLineOutlineIcon, badge: true },
		{ title: 'Collections', href: '/collections', icon: LibraryOutlineIcon },
		{ title: 'Teams', href: '/teams', icon: UsersGroupRoundedOutlineIcon },
		{ title: 'Settings', href: '/settings', icon: SettingsOutlineIcon }
	];

	// "/" hanya aktif jika persis sama; route lain aktif juga untuk sub-route (/entries/123)
	function isActive(href: string): boolean {
		const pathname = page.url.pathname;
		if (href === '/') return pathname === '/';
		return pathname === href || pathname.startsWith(`${href}/`);
	}
</script>

<Sidebar.Root>
	<Sidebar.Header>
		<div class="p-4">
			<Snailbrand className="text-4xl gap-1" />
			<div
				class="gaegu-regular mt-0 text-sm tracking-wider opacity-80"
				style="color: var(--destructive);"
			>
				the void dashboard
			</div>

			<Item.Root class="mt-5 flex cursor-pointer items-center px-0 py-0">
				<Item.Media variant="icon">
					<BuildingsOutlineIcon size="22" />
				</Item.Media>
				<Item.Content>
					<Item.Title>
						<span class="underline decoration-wavy"> Meong Art Co. </span>
					</Item.Title>
				</Item.Content>
			</Item.Root>
		</div>
	</Sidebar.Header>

	<Sidebar.Content class="px-1">
		<Sidebar.Group>
			<Sidebar.GroupContent>
				<Sidebar.Menu class="gaegu-regular">
					{#each menuItems as item (item.href)}
						{@const active = isActive(item.href)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton class="flex items-center gap-4 text-base">
								{#snippet child({ props })}
									<a href={item.href} {...props} aria-current={active ? 'page' : undefined}>
										<item.icon color="var(--foreground)" opacity={active ? 1 : 0.75} size="22" />
										<span class="inline-block pt-0.5">{item.title}</span>
										{#if active}
											<span
												class="inline-block h-2 w-2 rounded-full bg-primary opacity-70 shadow-md"
											></span>
										{/if}
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>

	<Sidebar.Footer>
		<div class="p-4">
			<div class="flex items-center">
				<Avatar.Root class="h-10 w-10">
					<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" class="grayscale" />
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>

				<div class="flex-1 flex-col pl-3 text-sm">
					<p class="font-semibold">dvnaherawati</p>
					<p class="text-xs text-neutral-500">voiduser@voidstamp.com</p>
				</div>
			</div>
		</div>
	</Sidebar.Footer>
</Sidebar.Root>
