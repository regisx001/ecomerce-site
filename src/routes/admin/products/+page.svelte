<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Table from '$lib/components/ui/table';
	import * as Alert from '$lib/components/ui/alert';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { Trash, Edit, PlusSquare } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	export let data;

	let showAlertSuccessDelete = false;

	// const deleteItem = (productId: string, idx: number) => {
	// 	fetch(`/admin/products?productId=${productId}`, {
	// 		method: 'DELETE'
	// 	}).then((res) => {
	// 		if (res.status === 200) {
	// 			const copy = data.products;
	// 			copy.splice(idx, 1);
	// 			data.products = copy;
	// 			showAlertSuccessDelete = true;
	// 			setTimeout(() => {
	// 				showAlertSuccessDelete = false;
	// 			}, 3000);
	// 		} else {
	// 			alert('something went wrong...');
	// 		}
	// 	});
	// };
</script>

<div class="p-4 flex flex-col justify-between h-full">
	<Table.Root class="max-h-9/10 overflow-auto">
		<Table.Body>
			<!-- {#each data.products as product, i}
				<Table.Row class="flex justify-between items-center">
					<Table.Cell class="font-bold">{product.name} - {product.id}</Table.Cell>

					<Table.Cell class="flex flex-row items-center gap-x-4">
						<Button class="" href={`/admin/products/${product.id}/basics`}>
							<Edit class="mr-2 h-4 w-4" />
							Edit
						</Button>
						<AlertDialog.Root>
							<AlertDialog.Trigger asChild let:builder>
								<Button class=" " builders={[builder]}>
									<Trash class="mr-2 h-4 w-4" />
									Delete</Button
								>
							</AlertDialog.Trigger>
							<AlertDialog.Content>
								<AlertDialog.Header>
									<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
									<AlertDialog.Description>
										This action cannot be undone. This will permanently delete your product.
									</AlertDialog.Description>
								</AlertDialog.Header>
								<AlertDialog.Footer>
									<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
									<AlertDialog.Action
										on:click={() => {
											deleteItem(product.id, i);
										}}>Continue</AlertDialog.Action
									>
								</AlertDialog.Footer>
							</AlertDialog.Content>
						</AlertDialog.Root>
					</Table.Cell>
				</Table.Row>
			{/each} -->
		</Table.Body>
	</Table.Root>
	<div class="h-1/10 w-full flex items-center flex-row justify-end">
		<Button href="/admin/products/new" class=" ">
			<PlusSquare class="w-4 h-4 mr-2" />
			New Product</Button
		>
	</div>
	<form method="post" enctype="multipart/form-data">
		<div class="grid w-full max-w-sm items-center gap-1.5">
			<Label for="prices">Upload Prices CSV</Label>
			<Input id="prices" type="file" name="prices" accept=".csv" required />
		</div>

		<Button type="submit">Submit</Button>
	</form>
</div>

{#if showAlertSuccessDelete}
	<div out:fade class="absolute right-12 bottom-12 z-30 w-[500px]">
		<Alert.Root>
			<Trash class="h-4 w-4" />
			<Alert.Title>Success!</Alert.Title>
			<Alert.Description>Your product was successfully deleted.</Alert.Description>
		</Alert.Root>
	</div>
{/if}
