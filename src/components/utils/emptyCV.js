import uniqid from "uniqid"
import emptyAvatar from '../../static/profile.webp';

const emptyCV = {
    personal: {
        firstName: "",
        lastName: "",
        title: "",
        photo: emptyAvatar,
        address: "",
        phoneNumber: "",
        email: "",
        description: "",
    },
    experience: [
        {
        id: uniqid(),
        position: "",
        company: "",
        city: "",
        startDate: "",
        endDate: "",
        },
    ],
    education: [
        {
        id: uniqid(),
        university: "",
        city: "",
        degree: "",
        subject: "",
        startDate: "",
        endDate: "",
        },
    ],
}

export default emptyCV;
