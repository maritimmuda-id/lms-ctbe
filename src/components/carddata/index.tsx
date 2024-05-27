'use client';

import { FaUsers, FaUserShield } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { useEffect, useState } from "react";

type User = {
    id: string;
    name: string;
    role: 'admin' | 'student' | 'teacher';
};

type UsersProps = {
    users: User[];
};

export default function CardData(props: UsersProps) {
    const [totalAdmin, setTotalAdmin] = useState(0);
    const [totalStudent, setTotalStudent] = useState(0);
    const [totalTeacher, setTotalTeacher] = useState(0);

    useEffect(() => {
        if (props.users) {
            const adminCount = props.users.filter(user => user.role === 'admin').length;
            const studentCount = props.users.filter(user => user.role === 'student').length;
            const teacherCount = props.users.filter(user => user.role === 'teacher').length;

            setTotalAdmin(adminCount);
            setTotalStudent(studentCount);
            setTotalTeacher(teacherCount);
        }
    }, [props.users]);

    return (
        <div className='flex justify-between'>
            <div className='w-52 h-52 bg-slate-200 shadow-xl rounded-xl p-5 mb-5 font-extrabold text-2xl mr-5'>
                <div className="mb-10 flex">
                    <FaUsers className="text-7xl bg-slate-300 p-2 rounded-xl" />
                </div>
                <p className="text-5xl">{totalStudent} </p>
                <p className='text-sm font-normal'>Total Student</p>
            </div>
            <div className='w-52 h-52 bg-slate-200 shadow-xl rounded-xl p-5 mb-5 font-extrabold text-2xl mr-5'>
                <div className="mb-10 flex">
                    <RiUserStarFill className="text-7xl bg-slate-300 p-2 rounded-xl" />
                </div>
                <p className="text-5xl">{totalTeacher} </p>
                <p className='text-sm font-normal'>Total Teacher</p>
            </div>
            <div className='w-52 h-52 bg-slate-200 shadow-xl rounded-xl p-5 mb-5 font-extrabold text-2xl mr-5'>
                <div className="mb-10 flex">
                    <FaUserShield className="text-7xl bg-slate-300 p-2 rounded-xl" />
                </div>
                <p className="text-5xl">{totalAdmin} </p>
                <p className='text-sm font-normal'>Total Admin</p>
            </div>
        </div>
    );
}
