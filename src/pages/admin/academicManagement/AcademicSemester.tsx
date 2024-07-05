import academicSemesterApi from "../../../redux/Features/academicSemester/academicSemesterApi"

const AcademicSemester = () => {
    const { data } = academicSemesterApi.useGetAllSemestersQuery(undefined);
    console.log(data);
    return (
        <div>AcademicSemester</div>
    )
}

export default AcademicSemester