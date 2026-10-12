<script lang="ts">
	let { className = '' }: { className: string } = $props();
</script>

<div
	class="flex !font-light {className}"
	style="-webkit-text-stroke: 12px white; paint-order: stroke fill;"
>
	<span style="color: var(--secondary-foreground);">snail</span>
	<span class="bubblegum-sans-regular" style="color: var(--ring);">stamp</span>
</div>
