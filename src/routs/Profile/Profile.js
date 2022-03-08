import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { MARK_CHECKBOX } from '../../store/profile/actions';


export default function Profile () {
    const dispatch = useDispatch();
    const isMarked = useSelector((state)=> state.isMarked)

    const markCheckbox = () => {
        dispatch({
            type: MARK_CHECKBOX
        })
    }
    return (
        <div>
            <h1> Profile </h1>
            <input type='checkbox' id="checkbox" checked={isMarked} onChange={markCheckbox}/>
            <label htmlFor="checkbox">checkbox</label>
        </div>
    )
}