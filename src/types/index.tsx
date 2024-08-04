export type Jobs = {
    author: string,
    timestamp: number,
    title: string,
    description: string,
    pay: string,
    interval?: "monthly" | "yearly" | "weekly" | "hourly" | "daily",
    category?: "Full Time" | "Part Time",
    authorImUrl?: string,
}[];