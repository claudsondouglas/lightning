export const load = async () => {
    const res = await fetch(
        "https://mempool.space/api/v1/lightning/nodes/rankings/connectivity",
    );

    return {
        nodes: res.json()
    }
}