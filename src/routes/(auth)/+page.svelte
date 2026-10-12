<script lang="ts">
	import { zod4 as zod } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms';
	import { Button } from '#lib/components/ui/button/index.ts';
	import * as NavigationMenu from '#lib/components/ui/navigation-menu/index.ts';
	import * as Field from '#lib/components/ui/field/index.ts';
	import { Input } from '#lib/components/ui/input/index.ts';
	import {
		LetterOutlineIcon,
		PasswordOutlineIcon,
		BombEmojiOutlineIcon
	} from '@solar-icons/svelte';
	import { LoginFormSchema } from '#lib/schemas/login-form.ts';

	let { data } = $props();

	// svelte-ignore state_referenced_locally
	const { form, errors, enhance } = superForm(data.form, {
		validators: zod(LoginFormSchema)
	});

	const footerLinks: {
		name: string;
		href: string;
	}[] = [
		{ name: 'About', href: '/about' },
		{ name: 'Privacy', href: '/privacy' },
		{ name: 'Terms', href: '/terms' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'License', href: '/license' }
	];
</script>

<svelte:head>
	<title>snailstamp - the void dashboard</title>
	<meta name="description" content="Passport your arts and track every journey" />
</svelte:head>

<div class="flex min-h-screen w-full flex-col items-center justify-center">
	<div class="mx-auto block w-full max-w-md px-8 py-8 xl:w-3/12">
		<div class="w-full pt-4 md:pt-6 lg:pt-8 xl:pt-20">
			<div class="mb-6 flex justify-end px-4">
				<div
					style="background-color: var(--destructive)"
					class="inline-block -rotate-5 animate-bounce cursor-pointer rounded-full px-3 py-1 text-sm text-white shadow-md transition-transform hover:scale-105 hover:bg-destructive/80"
				>
					the void dashboard
				</div>
			</div>

			<h1
				class="mb-2 flex text-7xl !font-light"
				style="-webkit-text-stroke: 12px white; paint-order: stroke fill;"
			>
				<span class="gaegu-regular" style="color: var(--secondary-foreground);">snail</span>
				<span class="gaegu-regular" style="color: var(--ring);">stamp</span>
			</h1>

			<p class="text-sm tracking-wider">
				Passport your <span
					class="gluten-font inline-block border-b-4 font-bold uppercase"
					style="border-color: var(--secondary);">crafts</span
				>
				and track their
				<span
					class="gluten-font inline-block border-b-4 font-bold uppercase"
					style="border-color: var(--secondary);">lifespan</span
				>
			</p>

			<div class="mt-6 rounded-xl p-6 shadow-md" style="background-color: var(--popover);">
				<form method="POST" use:enhance>
					<Field.Set>
						<Field.Group>
							<Field.Field>
								<div class="flex items-center">
									<Field.Label for="email" class="gaegu-regular text-base">
										<LetterOutlineIcon color="var(--foreground)" opacity="0.65" />
										Email Address <span class="text-2xl leading-3 text-rose-300">*</span>
									</Field.Label>

									<div class="flex flex-1 justify-end">
										{#if $errors.email}
											<p class="!m-0 text-xs text-destructive">{$errors.email}</p>
										{/if}
									</div>
								</div>
								<Input
									id="email"
									name="email"
									type="email"
									autocomplete="email"
									placeholder="myemail@example.com"
									bind:value={$form.email}
									aria-invalid={$errors.email ? 'true' : undefined}
								/>
							</Field.Field>
							<Field.Field>
								<div class="flex items-center">
									<Field.Label for="password" class="gaegu-regular text-base">
										<PasswordOutlineIcon color="var(--foreground)" opacity="0.65" />
										Password <span class="text-2xl leading-3 text-rose-300">*</span>
									</Field.Label>

									<div class="flex flex-1 justify-end">
										{#if $errors.password}
											<p class="!m-0 text-xs text-destructive">{$errors.password}</p>
										{/if}
									</div>
								</div>
								<Input
									id="password"
									name="password"
									type="password"
									autocomplete="current-password"
									placeholder="Your password"
									bind:value={$form.password}
									aria-invalid={$errors.password ? 'true' : undefined}
								/>
							</Field.Field>
						</Field.Group>

						<div class="flex justify-between">
							<div class="flex items-center">
								<p class="text-sm leading-4">Haven't account?</p>
								<Button variant="link" size="sm" type="button">Sign up</Button>
							</div>

							<Button variant="default" size="lg" class="cursor-pointer shadow" type="submit">
								<BombEmojiOutlineIcon size="28" />
								<span class="gluten-font">Let's go!</span>
							</Button>
						</div>
					</Field.Set>
				</form>
			</div>
		</div>
	</div>

	<div class="mt-auto">
		<div class="flex flex-col pb-6">
			<NavigationMenu.Root>
				<NavigationMenu.List>
					{#each footerLinks as link}
						<NavigationMenu.Item>
							<NavigationMenu.Link href={link.href}>{link.name}</NavigationMenu.Link>
						</NavigationMenu.Item>
					{/each}
				</NavigationMenu.List>
			</NavigationMenu.Root>

			<div class="block flex items-center justify-center gap-4 text-sm text-neutral-400">
				<p>&copy; snailstamp co. ltd</p>
			</div>
		</div>
	</div>
</div>
