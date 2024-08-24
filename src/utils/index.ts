import { Jobs, User } from "@/types";

type UserType = {
    fullname: string
    email: string,
    password: string,
    phone_number: string,
    age: number,
    bio: string,
    profileImage: string,
    finalYearFile: string,
};

async function createUser(user: UserType): Promise<false | { status: string, message: string }> {
    let res = await fetch("https://jobfindr.onrender.com/api/v1/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify({
            fullName: user.fullname,
            password: user.password,
            email: user.email,
            phoneNumber: user.phone_number,
            age: user.age,
            bio: user.bio,
            profilePicture: user.profileImage,
            verificationImage: user.finalYearFile
        })
    });

    if (!res) {
        return {
            status: "Error",
            message: "Something went wrong"
        };
    }

    if (res && (res.status == 201)) {
        return {
            status: "Success",
            message: "User Created Successfully"
        }
    }

    return false
}

function updateUser() {

}

async function fetchLoggedInUserData(): Promise<{ status: "success" | "error", data: User }> {
    return {
        status: "success",
        data: {
            id: "$239872739e88292731dwujdjsdj238e8dj",
            fullname: "Eremie Johnson",
            status: "active",
            profileImg: "https://github.com/shadcn.png",
            email: "shadcn@gmail.com",
            age: 20,
            bio: "Something",
            phone_number: "08107663988",
        }
    }
}

async function getCurrentUser(): Promise<any> {
    return {
        status: "success",
    };
}

async function login({ email, password }: { email: string, password: string }): Promise<{ status: "error" | "success", data?: {}, message?: string }> {
    return {
        status: "success",
        data: {},
        message: "User Logged in"
    }
}

async function getAllJobs(): Promise<{ status: "success" | "error", data: Jobs }> {
    return {
        status: "success",
        data: [{
            author: "Fiverr",
            timestamp: 20834234,
            title: "Go and Die",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eaque eos soluta aperiam non necessitatibus ullam, nisi alias doloribus! Ab?",
            pay: "$200",
            interval: "monthly",
            category: "Full Time",
            authorImUrl: "/assets/images/fiverr.jpg",
            url: "https://google.com",
            id: "iiiwimdkwmed"
        }, {
            author: "Upwork Plc",
            timestamp: 20834234,
            title: "Go and Die",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eaque eos soluta aperiam non necessitatibus ullam, nisi alias doloribus! Ab?",
            pay: "$200",
            interval: "monthly",
            category: "Full Time",
            authorImUrl: "/assets/images/upwork.jpg",
            url: "https://google.com",
            id: "iiiwimdkwmed"
        }, {
            author: "Upwork Plc",
            timestamp: 20834234,
            title: "Go and Die",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eaque eos soluta aperiam non necessitatibus ullam, nisi alias doloribus! Ab?",
            pay: "$200",
            interval: "monthly",
            category: "Full Time",
            authorImUrl: "/assets/images/upwork.jpg",
            url: "https://google.com",
            id: "iiiwimdkwmed"
        }]
    }
}

async function getSavedJobs(): Promise<{ status: "success" | "error", data: Jobs }> {
    return {
        status: "success",
        data: [{
            author: "Fiverr",
            timestamp: 20834234,
            title: "Go and Die",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eaque eos soluta aperiam non necessitatibus ullam, nisi alias doloribus! Ab?",
            pay: "$200",
            interval: "monthly",
            category: "Full Time",
            authorImUrl: "/assets/images/fiverr.jpg",
            url: "https://google.com",
            id: "iiiwimdkwmed"
        }, {
            author: "Upwork Plc",
            timestamp: 20834234,
            title: "Go and Die",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eaque eos soluta aperiam non necessitatibus ullam, nisi alias doloribus! Ab?",
            pay: "$200",
            interval: "monthly",
            category: "Full Time",
            authorImUrl: "/assets/images/upwork.jpg",
            url: "https://google.com",
            id: "iiiwimdkwmed"
        }]
    };
}

async function getUserStatus(): Promise<{ status: "error" | "success", userStatus: "active" | "pending" }> {
    return {
        status: "success",
        userStatus: "pending"
    }
}

async function saveJob(jobId: string, jobTitle: string): Promise<{ status: "error" | "success", message: string }> {
    return {
        status: "error",
        message: `${jobTitle} saved!`,
    }
}

async function viewJobs(jobId: string, jobTitle: string): Promise<{ status: "error" | "success", message: string }> {
    return {
        status: "error",
        message: `${jobTitle} saved!`,
    }
}

async function logOut(): Promise<false | { status: string, message: string }> {
    return {
        status: "success",
        message: "User Logged out"
    }
}

async function deleteAccount(): Promise<false | { status: string, message: string }> {
    return {
        status: "success",
        message: "Account deleted Successfully"
    }
}

export {
    createUser,
    updateUser,
    fetchLoggedInUserData,
    getCurrentUser,
    login,
    getAllJobs,
    getSavedJobs,
    getUserStatus,
    saveJob,
    viewJobs,
    logOut,
    deleteAccount
}