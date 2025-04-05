type NodeItem = {
    publicKey: string;
    alias: string;
    channels: number;
    capacity: number;
    firstSeen: number;
    updatedAt: number;
    city: Record<string, string> | null;
    country: Record<string, string> | null;
    iso_code: string | null;
    subdivision: string | null;
};