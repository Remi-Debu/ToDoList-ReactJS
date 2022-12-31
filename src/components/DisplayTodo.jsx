import React, { Fragment } from 'react'
import { Button } from 'primereact/button';

export const DisplayTodo = (props) => {
    const isDateAlert = () => {
        let dateUnixAlert = props.value.dateFinUnix - 864000000;
        let dateUnixNow = Date.now();

        if (dateUnixNow > dateUnixAlert) {
            return true;
        } else {
            return false;
        }
    }

    const nbDaysLeft = () => {
        let display = "";
        let dateUnixNow = Date.now();
        let nbUnixLeft = props.value.dateFinUnix - dateUnixNow;
        let nbDaysLeft = nbUnixLeft / 86400000;
        let nbDaysLeftTrunc = Math.trunc(nbDaysLeft);

        if (nbDaysLeftTrunc <= 0) {
            nbDaysLeftTrunc = 0;
            display = "Date dépassée";
        } else {
            display = nbDaysLeftTrunc + " jours restant";
        }

        return display;
    }

    return (
        <Fragment>
            <div className={(props.value.isCheck) ? 'toDo isCheck' : (isDateAlert()) ? 'toDo alert' : 'toDo isNotCheck'}>
                <Button className={'p-button-rounded p-button-' + ((props.value.isCheck) ? 'success' : (isDateAlert()) ? 'warning' : 'danger')} icon={'pi pi-' + ((props.value.isCheck) ? 'check' : 'times')}
                    onClick={(event) => props.validationToDo(event, props.index)} />


                <div className={(props.value.isCheck ? 'toDo-text isCheckText' : 'toDo-text isNotCheckText')}>
                    <p>{props.value.nom}</p>
                    <p>{(props.value.dateFin).toString()}</p>
                    {isDateAlert() && <p>{nbDaysLeft()}</p>}
                </div>

                <Button className='p-button-rounded p-button-danger' icon="pi pi-trash"
                    onClick={(event) => props.deleteTodo(event, props.index)} />
            </div>
        </Fragment>
    )
}
