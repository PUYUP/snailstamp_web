<script lang="ts">
	import { scaleBand } from 'd3-scale';
	import { BarChart } from 'layerchart';
	import { cubicInOut } from 'svelte/easing';
	import * as Chart from '#lib/components/ui/chart/index.js';

	const chartData = [
		{ month: 'March', in_process: 237, done: 120 },
		{ month: 'April', in_process: 73, done: 190 },
		{ month: 'May', in_process: 209, done: 130 },
		{ month: 'June', in_process: 214, done: 140 }
	];

	const chartConfig = {
		in_process: { label: 'In Process', color: 'var(--border)' },
		done: { label: 'Done', color: 'var(--sidebar-primary)' }
	} satisfies Chart.ChartConfig;
</script>

<Chart.Container config={chartConfig}>
	<BarChart
		labels={{
			offset: 8,
			fontSize: '8px',
			color: 'red'
		}}
		data={chartData}
		xScale={scaleBand().padding(0.25)}
		x="month"
		axis="x"
		series={[
			{ key: 'in_process', label: 'In Process', color: chartConfig.in_process.color },
			{ key: 'done', label: 'Done', color: chartConfig.done.color }
		]}
		x1Scale={scaleBand().paddingInner(0.2)}
		seriesLayout="group"
		rule={false}
		props={{
			bars: {
				stroke: 'none',
				strokeWidth: 0,
				radius: 14,
				rounded: 'top',
				motion: { type: 'tween', duration: 500, easing: cubicInOut }
			},
			highlight: { area: { fill: 'none' } },
			xAxis: { format: (d) => d.slice(0, 3) }
		}}
		legend
	>
		{#snippet tooltip()}
			<Chart.Tooltip indicator="dashed" />
		{/snippet}
	</BarChart>
</Chart.Container>
