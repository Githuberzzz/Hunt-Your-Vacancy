import React, { useState } from 'react';

function SearchBar(props) {
    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        location: "",
        experience: "",
        type: ""
    });

    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const search = async () => {
        await props.fetchJobsCustom(jobCriteria);
    };

    return (
        <div className='flex gap-4 my-10 justify-center px-10'>
            <select onChange={handleChange} name="title" value={jobCriteria.title} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" disabled hidden>Job Role</option>
                <option value="iOS Developer">iOS Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="Developer Advocate">Developer Advocate</option>
                <option value="Editor">Editor</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Data Analyst">Data Analyst</option>
                <option value="Graphic Designer">Graphic Designer</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Sales Associate">Sales Associate</option>
                <option value="Customer Service Representative">Customer Service Representative</option>
                <option value="Delivery Driver">Delivery Driver</option>
                <option value="Barista">Barista</option>
                <option value="Construction Worker">Construction Worker</option>
                <option value="Nurse">Nurse</option>
                <option value="Teacher">Teacher</option>
                {/* Additional job titles */}
                <option value="Textile Designer">Textile Designer</option>
                <option value="Textile Engineer">Textile Engineer</option>
                <option value="Production Manager (Textiles)">Production Manager (Textiles)</option>
                <option value="Quality Control Inspector (Textiles)">Quality Control Inspector (Textiles)</option>
                <option value="Industrial Engineer">Industrial Engineer</option>
                <option value="Manufacturing Supervisor">Manufacturing Supervisor</option>
                <option value="Production Planner">Production Planner</option>
                <option value="Operations Manager">Operations Manager</option>
                <option value="Baker">Baker</option>
                <option value="Pastry Chef">Pastry Chef</option>
                <option value="Food Scientist">Food Scientist</option>
                <option value="Food Production Worker">Food Production Worker</option>
                <option value="Food Safety Specialist">Food Safety Specialist</option>
                {/* Add more job titles as needed */}
            </select>
            {/* Add other select elements and search button as before */}
        </div>
    );
}

export default SearchBar;
