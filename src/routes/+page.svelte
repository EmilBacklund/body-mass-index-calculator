<script>
	import BackgroundBanner from '../components/BackgroundBanner.svelte';
	import Header from '../components/Header.svelte';
	import Container from '../layout/Container.svelte';
	import BmiCalculator from '../components/BMICalculator.svelte';
</script>

<svelte:head>
	<title>Body mass calculator</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="relative font-inter">
	<BackgroundBanner />
	<Container>
		<Header />
		<BmiCalculator />
	</Container>
</div>
