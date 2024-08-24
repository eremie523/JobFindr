export type Jobs = {
    author: string,
    timestamp: number,
    title: string,
    description: string,
    pay: string,
    interval?: "monthly" | "yearly" | "weekly" | "hourly" | "daily",
    category?: "Full Time" | "Part Time",
    authorImUrl?: string,
    url: string,
    id: string,
}[];

export type User = {
    id: string,
    status: "active" | "pending",
    profileImg: string,
    fullname: string,
    email: string,
    age: number,
    phone_number: string,
    bio: string,
}