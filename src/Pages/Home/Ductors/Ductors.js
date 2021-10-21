import React from 'react';
import ductor1 from '../../../Images/Ductor/ductor-1 (2) (1).jpg'
import ductor2 from '../../../Images/Ductor/ductor-2 (2) (1).jpg'
import ductor3 from '../../../Images/Ductor/ductor-3 (2) (1).jpg'
import ductor4 from '../../../Images/Ductor/ductor-4 (2).jpg'
import ductor5 from '../../../Images/Ductor/ductor-5 (2).jpg'
import ductor6 from '../../../Images/Ductor/ductor-6 (2).jpg'
import ductor7 from '../../../Images/Ductor/ductor-7 (1).jpg'
import ductor8 from '../../../Images/Ductor/ductor-8 (1).jpg'
import ductor9 from '../../../Images/Ductor/ductor-9 (1).jpg'
import Ductor from '../Ductor/Ductor';


const ductors = [
    {
        img: ductor1,
        name: 'Prof Khwaja Nazimuddin',
        Qualification: 'MBBS, FCPS(Medicine), FRCS, FACP',
        post: 'Professor & Visiting Consultant',
        Visiting: '10:00am-2:00pm(Sat,Sun & Wed)'
    },
    {
        img: ductor2,
        name: 'Dr. Jahangir Alam Sarker',
        Qualification: 'MBBS,FCPS (Medicine)',
        post: 'Assoc. Professor',
        Visiting: '10:00am-2:00pm(Sat,Sun & Wed)'
    },
    {
        img: ductor3,
        name: 'Prof. Dr. Md. Khalilur Rahman',
        Qualification: 'MBBS, FCPS(Medicine), FRCS, FACP',
        post: 'Honorary Professor, Surgery',
        Visiting: '10:00am-2:00pm(Sat,thu & Wed)'
    },
    {
        img: ductor4,
        name: 'Professor Brig.Gen.M.Anwar Hossain',
        Qualification: 'MBBS,DO,FCPS(Eye)',
        post: 'Professor & Head of the Department',
        Visiting: '10:00am-2:00pm(Sat,Sun & Wed)'
    },
    {
        img: ductor5,
        name: 'Dr. Masuka Rahman',
        Qualification: 'MBBS,CCD,FCPS',
        post: 'Assistant Professor',
        Visiting: '10:00am-2:00pm(Sat,Sun & Wed)'
    },
    {
        img: ductor6,
        name: 'Dr. Hamida Rohman',
        Qualification: 'MBBS (Dhaka), D-Card, FCGP,CCD, DPH',
        post: 'Assistant Professor',
        Visiting: '10:00am-2:00pm(Sat,Sun & Wed)'
    },
    {
        img: ductor7,
        name: 'Dr. Sajida islam',
        Qualification: 'MBBS,M.Phil',
        post: 'Asst. Professor',
        Visiting: '10:00am-2:00pm(Sat,Sun & Wed)'
    },
    {
        img: ductor8,
        name: 'Dr. Lija Islam',
        Qualification: 'MBBS, CCD (BIRDEM),DTCD(BSMMU)',
        post: 'Chest Disease & Medicine',
        Visiting: '10:00am-2:00pm(Sat,Sun & Wed)'
    },
    {
        img: ductor9,
        name: 'Dr. Parvez',
        Qualification: 'MBBS, CCD (BIRDEM),DTCD(BSMMU)',
        post: 'Chest Disease & Medicine',
        Visiting: '10:00am-2:00pm(Sat,Sun & Wed)'
    }
]
const Ductors = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Our Ductors</h2>
            <div className="row">
                {
                    ductors.map(ductor => <Ductor
                        key={ductor.name}
                        ductor={ductor}
                    >

                    </Ductor>)
                }
            </div>
        </div>
    );
};

export default Ductors;