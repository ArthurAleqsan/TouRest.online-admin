import React, { useState } from 'react';
import { Button, Select } from 'antd';
import InputGroup from '../../../components/simple-components/InputGroup';
import { CONFIG } from '../../../util/config';

const { Option } = Select;
const { tour_schema, cities } = CONFIG;
const LANGUAGES = tour_schema.languages.map(language => <Option key={language}>{language}</Option>);
const CITIES = cities.map(city => <Option key={city}>{city}</Option>);

const CreateTour = () => {
    const [tourValues, setTourValues] = useState(tour_schema);
    const handleCreate = () => {
        console.log(tourValues);
    };
    const resetData = () => {
        setTourValues(tour_schema);
    };
    const handleLanguageSelect = (value) => {
        setTourValues({ ...tourValues, languages: [...tourValues.languages, value] });
    };
    const handleSelect = (city) => {
        setTourValues({ ...tourValues, city });
    };
    const handleInputGroupChange = e => {
        const { name, value } = e.target
        setTourValues({ ...tourValues, [name]: value });
    };

    return (
        <div className='create-tour'>
            <div className='input-group'>
                <span className='label'>City</span>
                <Select
                    style={{ width: '100%' }}
                    placeholder="Please select tour city"
                    onChange={handleSelect}
                >
                    {CITIES}
                </Select>
            </div>
            <InputGroup
                label='Tour name'
                value={tourValues.en_name}
                name='en_name'
                handleChange={handleInputGroupChange}
            />
            <InputGroup
                label='Названия тура'
                value={tourValues.ru_name}
                name='ru_name'
                handleChange={handleInputGroupChange}
            />
            <InputGroup
                label='Full Description'
                value={tourValues.en_fullDescription}
                name='en_fullDescription'
                handleChange={handleInputGroupChange}
                textArea
            />
            <InputGroup
                label='Полное описание'
                value={tourValues.ru_fullDescription}
                name='ru_fullDescription'
                handleChange={handleInputGroupChange}
                textArea
            />
            <div className='input-group'>
                <span className='label'>Tour languages</span>
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select tour languages"
                    onChange={handleLanguageSelect}
                >
                    {LANGUAGES}
                </Select>
            </div>
            <div className='buttons-container'>
                <Button onClick={resetData} className='reset' >Reset</Button>
                <Button type="primary" onClick={handleCreate} className='submit' >Submit</Button>
            </div>
        </div>
    )
};

export default CreateTour;
