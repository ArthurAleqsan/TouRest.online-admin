import React, { useState, useEffect } from 'react';
import moment from 'moment'
import { Button, Select, Divider, Upload, message, TimePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector, useStore } from 'react-redux';
import MultipleDatePicker from 'react-multiple-datepicker'

import InputGroup from '../../../components/simple-components/InputGroup';
import { CONFIG } from '../../../util/config';
import { getManagers } from '../../../store/user/user.actions';
import { getCategories, setCityCategories } from '../../../store/categories/category.actions';
import DynamicInput from '../../../components/simple-components/DynamicInput';
import { createTour, editTour, getTourById } from '../../../store/tours/tour.actions';
import WeeklyDaysSelector from '../../../components/simple-components/WeeklyDaysSelector';
import { getParam, isValidObject } from '../../../util/helpers';

const { Option } = Select;
const { tour_schema, cities } = CONFIG;
const LANGUAGES = ["Русский", "English"].map(language => <Option key={language}>{language}</Option>);
const CITIES = cities.map(city => <Option key={city}>{city}</Option>);

const CreateTour = () => {
    const [editableId, setEditableId] = useState('');
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
    const { city_categories: categories} = useSelector(s => s.categories);
    useEffect(() => {
        getManagers(dispatch);
        getCategories(dispatch)
        if (location.pathname.includes('edit')) {
            const id = getParam(location.pathname, 'id=', 1);
            getTourById(dispatch, id);
            setEditableId(id);
        }
    }, [])
    const USERS = managers && managers.map(user => <Option key={user.id}>{user.firstName} {user.lastName}</Option>);
    const CATEGORIES = categories && categories.map(category => <Option key={category.id}>{category.en_name}</Option>);
    const RATES = [1, 2, 3, 4, 5].map(r => <Option key={r}>{r}</Option>);
    const DATE_TYPES = ['week', 'date', 'everyday'].map(d => <Option key={d}>{d}</Option>)
    const [tourValues, setTourValues] = useState(tour_schema);
    const handleCreate = () => {
<<<<<<< HEAD
        if (isValidObject(tourValues)) {
            editableId ? editTour(dispatch, getState, editableId, tourValues) : createTour(dispatch, getState, tourValues);
        } else {
            message.error('Please fill all required filds')
        }

=======
        console.log(tourValues);
        createTour(dispatch, getState, tourValues);
        resetData();
>>>>>>> 5a2e4c2c7d2a54508c219abfaac367c8b1907684
    }
    const handleSelectWeekDate = weekdays => {
        setTourValues({ ...tourValues, weekdays });
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
        setCityCategories(dispatch, getState, city);
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

    const onHandleTimeSelect = (value, tymeString, type) => {
        if (type == 'duration') {
            const duration = value.valueOf() - moment().startOf('day').valueOf()
            setTourValues({ ...tourValues, duration });
        } else if (type == 'start-time') {
            console.log(tymeString)
            setTourValues({ ...tourValues, startTime: tymeString });
        }

    }
    const handleDynamicInputChange = (key, val) => {
        setTourValues({ ...tourValues, [key]: val });
    }
    const onSelectDates = (dates) => {
        const _dates = dates.map(d => new Date(d));
        console.lo(_dates);
        // setTourValues({ ...tourValues, availableDates: [new Date(date).toISOString()] })
        setTourValues({ ...tourValues, availableDates: _dates })
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
            <InputGroup
                label='Price for Adults'
                value={tourValues.priceForAdults}
                name='priceForAdults'
                handleChange={handleInputGroupChange}
            />
            <InputGroup
                label='Price for Children'
                value={tourValues.priceForChildren}
                name='priceForChildren'
                handleChange={handleInputGroupChange}
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
                        onChange={(t, tStr,) => onHandleTimeSelect(t, tStr, 'duration')}
                    />
                </div>
                <div className='input-group'>
                    <span className='label'>Starting time</span>
                    <TimePicker onChange={(t, tStr) => onHandleTimeSelect(t, tStr, 'start-time')} />
                </div>
                {tourValues.dateType == 'week' && <WeeklyDaysSelector
                    onChange={handleSelectWeekDate}
                />}
                {tourValues.dateType == 'date' && <MultipleDatePicker
                    onSubmit={onSelectDates}
                />}

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