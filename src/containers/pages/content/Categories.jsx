import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoriesTable from '../../../components/content/CategoriesTable';
import { getCategories } from '../../../store/categories/category.actions';

const Categories = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        getCategories(dispatch)
    }, [])
    return (
        <div className = 'categories-container'>
            <CategoriesTable />
        </div>
    )
};

export default Categories;