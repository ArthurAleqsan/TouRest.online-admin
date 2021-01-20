import React, { useState, useEffect } from 'react';
import moment from 'moment'
import { Button, Select, DatePicker, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import InputGroup from '../../../components/simple-components/InputGroup';
import { CONFIG } from '../../../util/config';
import { getUsers } from '../../../store/user/user.actions';
import { getCategories } from '../../../store/categories/category.actions';
import DynamicInput from '../../../components/simple-components/DinamicInput';



const { RangePicker } = DatePicker;

const { Option } = Select;
const { tour_schema, cities } = CONFIG;
const LANGUAGES = ["Русский", "English"].map(language => <Option key={language}>{language}</Option>);
const CITIES = cities.map(city => <Option key={city}>{city}</Option>);

const CreateTour = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(s => s.user);
    const { categories } = useSelector(s => s.categories);
    useEffect(() => {
        getUsers(dispatch);
        getCategories(dispatch)
    }, [])
    const USERS = users && users.map(user => <Option key={user.id}>{user.firstName} {user.lastName}</Option>);
    const CATEGORIES = categories && categories.map(category => <Option key={category.id}>{category.en_name}</Option>);
    const RATES = [1, 2, 3, 4, 5].map(r => <Option key={r}>{r}</Option>);
    const [tourValues, setTourValues] = useState(tour_schema);
    const handleCreate = () => {
        console.log(tourValues);
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

    const onOk = value => {
        console.log('onOk: ', value);
        // console.log(value[1].diff(value[0]))
    }
    const onChange = (value, dateString) => {
        
        // console.log('Selected Time: ', value);
        // console.log('Formatted Selected Time: ', dateString);
    }
    const handleDynamicInputChange = (key, val) => {
        setTourValues({ ...tourValues, [key]: val });
    }

    return (
        <div>
            <div className='input-group'>
                <span>City</span>
                <Select
                    style={{ width: '100%' }}
                    placeholder="Please select tour city"
                    onChange={handleSelect}
                >
                    {CITIES}
                </Select>
            </div>
            <div className='input-group'>
                <span>Manager</span>
                <Select
                    style={{ width: '100%' }}
                    placeholder="Please select manager"
                    onChange={handleSelectUser}
                >
                    {USERS}
                </Select>
            </div>
            <div className='input-group'>
                <span>Category</span>
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
                label='Price For Adults'
                value={tourValues.priceForAdults}
                name='priceForAdults'
                handleChange={handleInputGroupChange}
                type='number'
            />
            <InputGroup
                label='Price For Children'
                value={tourValues.priceForChildren}
                name='priceForChildren'
                handleChange={handleInputGroupChange}
                type='number'
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
                <span>Tour languages</span>
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
            <div className='input-group'>
                <span>Rate</span>
                <Select
                    style={{ width: '100%' }}
                    placeholder="Please select rate"
                    onChange={handleSelectRate}
                >
                    {RATES}
                </Select>
            </div>
            <RangePicker
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                onChange={onChange}
                onOk={onOk}
            />
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
                name='en_notSuitable'
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

            <Divider />
            <Button onClick={resetData} >Reset</Button>
            <Button type="primary" onClick={handleCreate} >Submit</Button>
        </div>
    )
};

export default CreateTour;
