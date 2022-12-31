import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar';
import React, { Fragment, useState } from 'react'
import moment from 'moment';

export const AddToDo = (props) => {
    const [nom, setNom] = useState("");
    const [dateFin, setdateFin] = useState("");

    const handleName = (event) => {
        setNom(event.target.value)
    }

    const handleDate = (event) => {
        setdateFin(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addToDo({ nom: nom, dateFin: moment(new Date(dateFin)).format("DD / MM / YYYY"), dateFinUnix: new Date(dateFin).getTime(), isCheck: false });
    }

    return (
        <Fragment>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-inputs'>
                    <InputText value={nom} onChange={(event) => handleName(event)} placeholder='To Do' required />
                    <Calendar value={dateFin} onChange={(event) => handleDate(event)} dateFormat="dd/mm/yy" placeholder='Date limite' required />
                </div>

                <div className='form-btn'>
                    <Button className='p-button-help add-btn' label='Ajouter' />
                </div>
            </form>
        </Fragment>
    )
}
