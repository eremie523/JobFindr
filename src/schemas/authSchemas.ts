import { string, z } from "zod";

const LoginSchema = z.object({
    email: z.string().email({"message": "Enter a valid email address"}),
    password: z.string().min(8, {"message": "password must be atleast 8 character long"}).max(32, {"message": "password must be atmost 32 characters long"})
});

const SignUpSchema = z.object({
    fullname: z.string().min(4, {message: "Name must be atleast 4 characters long"}).max(40, {message: "Name must be atmost 40 characters long"}),
    email: z.string().email({"message": "Enter a valid email address"}),
    password: z.string().min(8, {"message": "password must be atleast 8 character long"}).max(32, {"message": "password must be atmost 32 characters long"}),
    matricNo: z.string().refine((value) => {
        return true;
    }),
    age: z.string(),
    bio: z.string().min(10, {message: "Value must be atleast 10 characters long"}).max(100, {message: "Value must not exceed 100 characters"}),
    profileImage: z.string(),
    finalYearFile: z.string(),
    phone_number: z.string().min(11, {message: "Phone number is atleast 11 characters"}).max(14, {message: "Phone number is atmost 14 characters"})
});

const UpdateProfileSchema = z.object({
    fullname: z.string().min(4, {message: "Name must be atleast 4 characters long"}).max(40, {message: "Name must be atmost 40 characters long"}),
    email: z.string().email({"message": "Enter a valid email address"}),
    matricNo: z.string().refine((value) => {
        return true;
    }),
    bio: z.string().min(10, {message: "Value must be atleast 10 characters long"}).max(100, {message: "Value must not exceed 100 characters"}),
    profileImage: z.string(),
    finalYearFile: z.string(),
    phone_number: z.string().min(11, {message: "Phone number is atleast 11 characters"}).max(14, {message: "Phone number is atmost 14 characters"})
});

export {
    LoginSchema,
    SignUpSchema,
    UpdateProfileSchema
}