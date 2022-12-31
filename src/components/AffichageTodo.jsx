import React, { Fragment } from 'react'
import { Button } from 'primereact/button';

export const AffichageTodo = (props) => {
    return (
        <Fragment>
            <div className='task'>
                <Button className={"p-button-rounded p-button-" + (props.value.isCheck ? "success" : "danger")} icon={"pi pi-" + (props.value.isCheck ? "check" : "times")}
                    onClick={(e) => props.changeCheckTodo(e, props.index)} />
                <div>
                    <p>{props.value.nom}</p>
                    <p>{(props.value.dateExpiration).toString()}</p>
                </div>
                <Button className='p-button-danger' label="Supprimer"
                    onClick={(e) => props.deleteTodo(e, props.index)} />
            </div>
        </Fragment>
    )
}
