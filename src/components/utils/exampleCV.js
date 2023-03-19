import uniqid from "uniqid"
import examplePhoto from '../../static/profile.webp';

const exampleCV = {
    personalInfo: {
        firstName: 'John',
        lastName: 'Doe',
        title: 'Senior Web Developer',
        photo: examplePhoto,
        address: 'Example Street 10',
        phoneNumber: '123456789',
        email: 'john.doe@gmail.com',
        description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
    },
    experience: [
        {
        id: uniqid(),
        position: 'Senior Web Developer',
        company: 'Facebook Inc.',
        city: 'Menlo Park',
        startDate: '2015',
        endDate: 'Present',
        },
        {
        id: uniqid(),
        position: 'Junior Web Developer',
        company: 'Tesla Inc.',
        city: 'Palo Alto',
        startDate: '2012',
        endDate: '2015',
        },
        {
        id: uniqid(),
        position: 'UI / UX Designer',
        company: 'Google LLC',
        city: 'Mountain View',
        startDate: '2010',
        endDate: '2012',
        },
        {
        id: uniqid(),
        position: 'Position',
        company: 'Company name',
        city: 'City name',
        startDate: 'From',
        endDate: 'To',
        },
    ],
    education: [
        {
        id: uniqid(),
        university: 'University of Technology',
        city: 'Oklahoma',
        degree: 'Master',
        subject: 'Science',
        startDate: '2008',
        endDate: '2010',
        },
        {
        id: uniqid(),
        universityName: 'University of Design Art',
        city: 'New York',
        degree: 'Bachelor',
        subject: 'Visual Art',
        startDate: '2005',
        endDate: '2008',
        },
        {
        id: uniqid(),
        universityName: 'University name',
        city: 'City name',
        degree: '',
        subject: '',
        startDate: 'From',
        endDate: 'To',
        },
    ],
}

export default exampleCV;
