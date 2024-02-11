<script lang="ts">
	import Button from '@ui/button/button.svelte';
	import { pocketbase } from '$lib';
	import { onMount } from 'svelte';

	onMount(async () => {});
	async function signIn() {
		const authData = await pocketbase.collection('users').authWithOAuth2({ provider: 'github' });
		console.log(authData);
	}
</script>

<Button
	on:click={() => {
		signIn();
	}}
>
	Sign in with github
</Button>
