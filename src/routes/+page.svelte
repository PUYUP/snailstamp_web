<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.ts';
	import * as Field from '#lib/components/ui/field/index.ts';
	import { Input } from '#lib/components/ui/input/index.ts';
	import {
		LetterOutlineIcon,
		PasswordOutlineIcon,
		BombEmojiOutlineIcon
	} from '@solar-icons/svelte';
</script>

<svelte:head>
	<title>snailstamp - birth dashboard</title>
	<meta name="description" content="Seal your art and track every journey" />
</svelte:head>

<div class="flex h-full w-full items-center justify-center">
	<div class="mx-auto block w-full max-w-md px-8 py-8 xl:w-3/12">
		<div class="w-full">
			<div class="mb-6 flex justify-end px-4">
				<div
					style="background-color: var(--destructive)"
					class="inline-block -rotate-5 animate-bounce cursor-pointer rounded-full px-3 py-1 text-sm text-white shadow-md transition-transform hover:scale-105 hover:bg-destructive/80"
				>
					birth dashboard
				</div>
			</div>
			<h1
				class="mb-2 flex text-7xl !font-light"
				style="-webkit-text-stroke: 12px white; paint-order: stroke fill;"
			>
				<span style="color: var(--secondary-foreground);">snail</span>
				<span class="bubblegum-sans-regular" style="color: var(--ring);">stamp</span>
			</h1>
			<p class="text-sm tracking-wider">
				Passport your <span
					class="gluten-font inline-block border-b-4 font-bold uppercase"
					style="border-color: var(--secondary);">arts</span
				>
				and track its
				<span
					class="gluten-font inline-block border-b-4 font-bold uppercase"
					style="border-color: var(--secondary);">journey...</span
				>
			</p>

			<div class="mt-6 rounded-xl p-6 shadow-md" style="background-color: var(--popover);">
				<Field.Set>
					<Field.Group>
						<Field.Field>
							<Field.Label for="email">
								<LetterOutlineIcon color="var(--foreground)" opacity="0.65" />
								Email Address <span class="text-2xl leading-3 text-rose-300">*</span>
							</Field.Label>
							<Input id="email" type="email" autocomplete="off" placeholder="myemail@example.com" />
						</Field.Field>
						<Field.Field>
							<Field.Label for="password">
								<PasswordOutlineIcon color="var(--foreground)" opacity="0.65" />
								Password <span class="text-2xl leading-3 text-rose-300">*</span>
							</Field.Label>
							<Input id="password" type="password" autocomplete="off" placeholder="Your password" />
						</Field.Field>
					</Field.Group>

					<div class="flex justify-between">
						<div class="flex items-center">
							<p class="text-sm">Haven't account?</p>
							<Button variant="link" size="sm" type="button">Sign up</Button>
						</div>

						<Button variant="default" size="lg" class="cursor-pointer shadow" type="submit">
							<BombEmojiOutlineIcon size="28" />
							<span class="gluten-font">Let's go!</span>
						</Button>
					</div>
				</Field.Set>
			</div>
		</div>
	</div>
</div>
