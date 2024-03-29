import React, { useState } from 'react';

function SearchBar(props) {
    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        location: "", // Corrected spelling from "locaion" to "location"
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
            </select>
            <select onChange={handleChange} name="type" value={jobCriteria.type} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" disabled hidden>Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
            </select>
            <select onChange={handleChange} name="location" value={jobCriteria.location} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" disabled hidden>Location</option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In-Office</option>
                <option value="Hybrid">Hybrid</option>
            </select>
            <select onChange={handleChange} name="experience" value={jobCriteria.experience} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" disabled hidden>Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="Junior Level">Junior Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
            </select>
            <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
        </div>
    );
}

export default SearchBar;
