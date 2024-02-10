<script lang="ts">
	import { Button } from '@ui/button';
	import { Input } from '@ui/input';
	import { Label } from '@ui/label';
	import { cn } from '$lib/utils';
	import {Github} from "@icons"

	let className: string | undefined | null = undefined;
	export { className as class };
	
	export let type : "login"|"register"="login"

	let isLoading = false;
	async function onSubmit() {
		isLoading = true;

		setTimeout(() => {
			isLoading = false;
		}, 3000);
	}
</script>

<div class={cn('grid gap-6', className)} {...$$restProps}>
	<form>
		<div class="grid gap-3">
			<div class="grid gap-2">
				<Label class="sr-only" for="email">Email</Label>
				<Input
					id="email"
					placeholder="name@example.com"
					type="email"
					autocapitalize="none"
					autocomplete="email"
					autocorrect="off"
					disabled={isLoading}
				/>
				<Input
					id="password"
					placeholder="Password"
					type="password"
					autocapitalize="none"
					autocorrect="off"
					disabled={isLoading}
				/>
				{#if type !== "login"}
				<Input
					id="passwordConfirm"
					placeholder="Password Confirm"
					type="password"
					autocapitalize="none"
					autocorrect="off"
					disabled={isLoading}
				/>
				{/if}
			</div>
			<Button disabled={isLoading}>
				{#if isLoading}
					Loading
				{/if}
				Sign In with Email
			</Button>
		</div>
	</form>
	<div class="relative">
		<div class="absolute inset-0 flex items-center">
			<span class="w-full border-t" />
		</div>
		<div class="relative flex justify-center text-xs uppercase">
			<span class="bg-background px-2 text-muted-foreground"> Or continue with </span>
		</div>
	</div>
	<Button variant="outline" type="button" disabled={isLoading}>
		{#if isLoading}
			Loading
		{:else}
		<div class="mx-2">
			<Github />
		</div>
		{/if}
		{' '}
		GitHub
	</Button>
</div>
