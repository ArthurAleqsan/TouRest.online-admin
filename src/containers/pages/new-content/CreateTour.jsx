import React, { useState, useEffect } from 'react';
import moment from 'moment'
import { Button, Select, DatePicker, Divider, Upload, message, TimePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector, useStore } from 'react-redux';

import InputGroup from '../../../components/simple-components/InputGroup';
import { CONFIG } from '../../../util/config';
import { getManagers } from '../../../store/user/user.actions';
import { getCategories } from '../../../store/categories/category.actions';
import DynamicInput from '../../../components/simple-components/DynamicInput';
import { createTour } from '../../../store/tours/tour.actions';



const { RangePicker } = DatePicker;

const { Option } = Select;
const { tour_schema, cities } = CONFIG;
const LANGUAGES = ["Русский", "English"].map(language => <Option key={language}>{language}</Option>);
const CITIES = cities.map(city => <Option key={city}>{city}</Option>);

const CreateTour = () => {

    const props = {
        name: 'file',
        action: '/v1/media/upload',
        headers: {
            'Cache-Control': 'no-cache',
            "authorization": `Bearer ${localStorage.getItem('token')}`,
        },
        onChange(info) {
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
                console.log(info.file.response[0]);
                setTourValues({ ...tourValues, images: [...tourValues.images, info.file.response[0]] });
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    const dispatch = useDispatch();
    const { getState } = useStore();
    const { managers } = useSelector(s => s.user);
    const { categories } = useSelector(s => s.categories);
    useEffect(() => {
        getManagers(dispatch);
        getCategories(dispatch)
    }, [])
    const USERS = managers && managers.map(user => <Option key={user.id}>{user.firstName} {user.lastName}</Option>);
    const CATEGORIES = categories && categories.map(category => <Option key={category.id}>{category.en_name}</Option>);
    const RATES = [1, 2, 3, 4, 5].map(r => <Option key={r}>{r}</Option>);
    const DATE_TYPES = ['week', 'date', 'everyday'].map(d => <Option key={d}>{d}</Option>)
    const [tourValues, setTourValues] = useState(tour_schema);
    const handleCreate = () => {
        console.log(tourValues);
        createTour(dispatch, getState, tourValues);

    }
    const resetData = () => {
        setTourValues(tour_schema);
    }
    const handleInputGroupChange = e => {
        const { name, value } = e.target
        setTourValues({ ...tourValues, [name]: value });
    }
    // TO DO
    // all selects replace to one
    const handleLanguageSelect = (languages) => {
        setTourValues({ ...tourValues, languages });
    }
    const handleSelect = (city) => {
        setTourValues({ ...tourValues, city });
    }
    const handleSelectUser = (managerId) => {
        setTourValues({ ...tourValues, managerId });
    }
    const handleSelectCategory = (categoryId) => {
        setTourValues({ ...tourValues, categoryId });
    }
    const handleSelectRate = (rate) => {
        setTourValues({ ...tourValues, rate });
    }

    const handleSelectDatetype = (dateType) => {
        setTourValues({ ...tourValues, dateType });
    }

    const onHandleDuration = (value, v,) => {
        console.log(value.valueOf(), v,);
        const duration = new Date(v).getMilliseconds()
        const baseTime = new Date()
        console.log(duration);
        setTourValues({ ...tourValues, duration });
    }
    const handleDynamicInputChange = (key, val) => {
        setTourValues({ ...tourValues, [key]: val });
    }
    const onChange = (date) => {
        setTourValues({ ...tourValues, availableDates: [new Date(date).toISOString()] })
    }
    const handleSelectStartDate = (date) => {
        setTourValues({ ...tourValues, startDateAndTime: new Date(date).toISOString() })
    }

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
            <div className='input-group'>
                <span className='label'>Manager</span>
                <Select
                    style={{ width: '100%' }}
                    placeholder="Please select manager"
                    onChange={handleSelectUser}
                >
                    {USERS}
                </Select>
            </div>
            <div className='input-group'>
                <span className='label'>Category</span>
                <Select
                    style={{ width: '100%' }}
                    placeholder="Please select category"
                    onChange={handleSelectCategory}
                >
                    {CATEGORIES}
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
                label='Short description'
                value={tourValues.en_shortDescription}
                name='en_shortDescription'
                handleChange={handleInputGroupChange}
                textArea
            />
            <InputGroup
                label='Краткое описание'
                value={tourValues.ru_shortDescription}
                name='ru_shortDescription'
                handleChange={handleInputGroupChange}
                textArea
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
            {/* <div className='input-group'>
                <span className='label'>Rate</span>
                <Select
                    style={{ width: '100%' }}
                    placeholder="Please select rate"
                    onChange={handleSelectRate}
                >
                    {RATES}
                </Select>
            </div> */}
            <div className='input-group'>
                <span className='label'>Date type</span>
                <Select
                    style={{ width: '100%' }}
                    placeholder="Please select rate"
                    onChange={handleSelectDatetype}
                    defaultValue='everyday'
                >
                    {DATE_TYPES}
                </Select>
            </div>
            <div className='date-container'>
                <div className='input-group'>
                    <span className='label'>Duration</span>
                    <TimePicker
                        onChange={onHandleDuration}
                    />
                </div>
                <div className='input-group'>
                    <span className='label'>Starting time</span>
                    <DatePicker onChange={handleSelectStartDate} />
                </div>
                {tourValues.dateType == 'week' && <div>
                    week
                    </div>}
                {tourValues.dateType == 'date' && <div className='input-group'>
                    <span className='label'>Aviable Dates</span>
                    <DatePicker onChange={onChange} />
                </div>}

            </div>
            <DynamicInput
                name='en_highlights'
                label='Highlights'
                handleDynamicInputChange={handleDynamicInputChange}
            />
            <DynamicInput
                name='ru_highlights'
                label='описание'
                handleDynamicInputChange={handleDynamicInputChange}
            />
            <DynamicInput
                name='en_includes'
                label='Includes'
                handleDynamicInputChange={handleDynamicInputChange}
            />
            <DynamicInput
                name='ru_includes'
                label='Что входит в тур'
                handleDynamicInputChange={handleDynamicInputChange}
            />
            <DynamicInput
                name='en_notSuitable'
                label='Not suitable'
                handleDynamicInputChange={handleDynamicInputChange}
            />
            <DynamicInput
                name='ru_notSuitable'
                label='Что нельзя'
                handleDynamicInputChange={handleDynamicInputChange}
            />
            <DynamicInput
                name='en_needed'
                label='Needed'
                handleDynamicInputChange={handleDynamicInputChange}
            />
            <DynamicInput
                name='ru_needed'
                label='Что нужно'
                handleDynamicInputChange={handleDynamicInputChange}
            />
            <div className='picture-upload'>
                <div className='label'>Upload</div>
                <Upload {...props} listType='picture-card'>
                    <PlusOutlined />
                </Upload>
            </div>
            <Divider />
            <div className='buttons-container'>
                <Button onClick={resetData} className='reset' >Reset</Button>
                <Button type="primary" onClick={handleCreate} className='submit' >Submit</Button>
            </div>
        </div>
    )
};

export default CreateTour;