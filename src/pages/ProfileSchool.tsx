import { useQuery } from "@tanstack/react-query";
import { fetchSchoolProfile } from "../api/schoolApi";
import type { School } from "../types/school";

const ProfileSchool = () => {
    const { data, isLoading, error } = useQuery<School>({
        queryKey: ["school-profile"],
        queryFn: fetchSchoolProfile,
    });

    console.log("QUERY DATA:", data);

    if (isLoading) return <p>Loading data sekolah...</p>;
    if (error) return <p>Terjadi error saat ambil data</p>;
    if (!data || !data) return <p>Data kosong</p>; // 
    const school = data; 

    return (
        <div>
            <h1>Profile Sekolah</h1>
            <p><b>ID:</b> {school?.userId ?? '-'}</p>
            <p><b>ID:</b> {school?.id ?? '-'}</p>
            <p><b>Judul:</b> {school?.title ?? '-'}</p>
            <p><b>Status:</b> {school?.completed ?? '-'}</p>
        </div>
    );
};

export default ProfileSchool;
