<script>
	export let noPadding = false;
</script>

<div class={!noPadding ? 'p-6' : 'p-0'}>
	<slot />
</div>
