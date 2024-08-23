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

async function createUser(user: UserType): Promise<false| {status: string, message: string}> {
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

    if(!res) {
        return {
            status: "Error",
            message: "Something went wrong"
        };
    }

    if(res && (res.status == 201)){
        return {
            status: "Success",
            message: "User Created Successfully"
        }
    }

    return false
}

function updateUser() {

}

export {
    createUser,
    updateUser,
}