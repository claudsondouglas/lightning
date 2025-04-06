<div class="animation-shimer flex h-[242px] flex-col gap-5 p-5" data-testid="skeleton">
	<div class="animation-shimer h-[2.5em]"></div>
	<div class="animation-shimer h-[6.5em]"></div>
	<div class="animation-shimer h-[2.3em]"></div>
</div>

<style>
	.animation-shimer {
		background: linear-gradient(-45deg, #eee 40%, #fafafa 50%, #eee 60%);
		background-size: 300%;
		background-position-x: 100%;
		animation: shimmer 1s infinite linear;
	}

	.animation-shimer div {
		background: linear-gradient(-45deg, #d2d2d2 40%, #fafafa 50%, #d2d2d2 60%);
		background-size: 300%;
		background-position-x: 100%;
		animation: shimmer 1s infinite linear;
	}

	.dark {
		.animation-shimer {
			background: linear-gradient(-45deg, #222222 40%, #444444 50%, #222222 60%);
			background-size: 300%;
			background-position-x: 100%;
			animation: shimmer 1s infinite linear;
		}

		.animation-shimer div {
			background: linear-gradient(-45deg, #333333 40%, #5a5a5a 50%, #333333 60%);
			background-size: 300%;
			background-position-x: 100%;
			animation: shimmer 1s infinite linear;
		}
	}
</style>
