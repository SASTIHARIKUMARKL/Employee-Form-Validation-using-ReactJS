import React, { useState } from "react";
import './form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        birthDate: '',
        email: '',
        phoneNumber: '',
        gender: '',
        startTime: '',
        endTime: '',
        jobPosition: '',
        team: '',
        designation: '',
        billableHours: '',
        isBillable: false
    });

    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const validate = () => {
        const errors = {};
        Object.keys(formData).forEach(key => {
            if (!formData[key] && key !== 'middleName' && key !== 'isBillable') {
                errors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required`;
            }
        });
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            console.log(formData);
        } else {
            setValidationErrors(errors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Employee Form</h1>
            <div className="container">
                <div className="field">
                    <label>First Name</label>
                    <input type="text" name="firstName" placeholder="Enter Your First Name" value={formData.firstName} onChange={handleChange} />
                    {validationErrors.firstName && <span>{validationErrors.firstName}</span>}
                </div>
                <div className="field">
                    <label>Middle Name</label>
                    <input type="text" name="middleName" placeholder="Enter Your Middle Name" value={formData.middleName} onChange={handleChange} />
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" name="lastName" placeholder="Enter Your Last Name" value={formData.lastName} onChange={handleChange} />
                    {validationErrors.lastName && <span>{validationErrors.lastName}</span>}
                </div>
                <div className="field">
                    <label>Birth Date</label>
                    <input type="date" name="birthDate" placeholder="Enter Your DOB" value={formData.birthDate} onChange={handleChange} />
                    {validationErrors.birthDate && <span>{validationErrors.birthDate}</span>}
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} />
                    {validationErrors.email && <span>{validationErrors.email}</span>}
                </div>
                <div className="field">
                    <label>Phone Number</label>
                    <input type="number" name="phoneNumber" placeholder="Enter Your Phone Number" value={formData.phoneNumber} onChange={handleChange} />
                    {validationErrors.phoneNumber && <span>{validationErrors.phoneNumber}</span>}
                </div>
                <div className="field">
                    <label>Select Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                    {validationErrors.gender && <span>{validationErrors.gender}</span>}
                </div>
                <div className="field">
                    <label>Start Time</label>
                    <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} />
                    {validationErrors.startTime && <span>{validationErrors.startTime}</span>}
                </div>
                <div className="field">
                    <label>End Time</label>
                    <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} />
                    {validationErrors.endTime && <span>{validationErrors.endTime}</span>}
                </div>
                <div className="field">
                    <label>Job Position</label>
                    <input type="text" name="jobPosition" placeholder="Enter Your Job Position" value={formData.jobPosition} onChange={handleChange} />
                    {validationErrors.jobPosition && <span>{validationErrors.jobPosition}</span>}
                </div>
                <div className="field">
                    <label>Select Teams</label>
                    <select name="team" value={formData.team} onChange={handleChange}>
                        <option value="">Select Team</option>
                        <option value="teamA">Team A</option>
                        <option value="teamB">Team B</option>
                        <option value="teamC">Team C</option>
                    </select>
                    {validationErrors.team && <span>{validationErrors.team}</span>}
                </div>
                <div className="field">
                    <label>Select Designation</label>
                    <select name="designation" value={formData.designation} onChange={handleChange}>
                        <option value="">Select Designation</option>
                        <option value="hr">HR</option>
                        <option value="teamLeader">Team Leader</option>
                        <option value="teamStaff">Team Staff</option>
                    </select>
                    {validationErrors.designation && <span>{validationErrors.designation}</span>}
                </div>
                <div className="field">
                    <label>Billable Hours</label>
                    <input type="number" name="billableHours" placeholder="Enter Your Billable Hours" value={formData.billableHours} onChange={handleChange} />
                    {validationErrors.billableHours && <span>{validationErrors.billableHours}</span>}
                </div>
                <div className="field full-width">
                    <label>
                        <input type="checkbox" name="isBillable" checked={formData.isBillable} onChange={handleChange} />
                        Is Billable
                    </label>
                </div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default Form;
