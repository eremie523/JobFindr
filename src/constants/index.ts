const SIGNUP_SSO = [
    {
        imgURL: "/assets/icons/google_icon.jpg",
        label: "Google",
        variant: "outline"
    },
    {
        imgURL: "/assets/icons/facebook.svg",
        label: "Facebook",
        variant: "outline"
    },
];

const LOGIN_FIELDS = [
    {
        name: "email",
        placeholder: "Email Address",
        id: "email", 
        inputType: "input",
        type: "text",
    },
    {
        name: "password",
        placeholder: "********",
        id: "password", 
        inputType: "input",
        type: "password",
    }
];

const SIGNUP_FIELDS = [
    {
        name: "fullname",
        placeholder: "Full Name",
        id: "fullname", 
        inputType: "input",
        type: "text",
    },
    {
        name: "email",
        placeholder: "Email Address",
        id: "email", 
        inputType: "input",
        type: "text",
    },
    {
        name: "password",
        placeholder: "Password",
        id: "password", 
        inputType: "input",
        type: "password",
    },
    {
        name: "phone_number",
        placeholder: "Phone Number",
        id: "phone_number", 
        inputType: "input",
        type: "telephone",
    },
    {
        name: "matricNo",
        placeholder: "Matric Number",
        id: "matricNo", 
        inputType: "input",
        type: "string",
    },
] 

const NAV_LINKS = [
    {
        href: "/dashboard",
        label: "Dashboard"
    },
    {
        href: "/settings",
        label: "Settings"
    },
    {
        href: "/profile",
        label: "Profile"
    },
    {
        href: "/projects",
        label: "Projects"
    },
]

const ProjectTabs = ["active", "saved"];


export {
    SIGNUP_SSO,
    LOGIN_FIELDS,
    SIGNUP_FIELDS,
    NAV_LINKS,
    ProjectTabs
};