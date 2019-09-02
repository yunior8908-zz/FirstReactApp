import React, { useEffect, useState} from 'react';
import { Card, Button } from 'semantic-ui-react';
import versatusuariosapiwithtoken from '../../../../api/versatusuariosreact-axios';

const RoleDetails = props => {
    const [role, setRole] = useState({ denominacion: "", id: "", descripcion: "" });

    useEffect(() => {
        versatusuariosapiwithtoken.get(`/seguridad/roles/${props.match.params.id}`)
            .then(res => setRole({ ...res.data }))
            .catch(err => console.log("Errores: ", err.response));

    }, [props.match.params.id]);

    return (
        <Card raised>
            <Card.Content>
                <Card.Header>Detalles</Card.Header>
            </Card.Content>
            <Card.Content>
                <Card.Description>
                    <ul>
                        <li>
                            <strong>Denominacion: </strong><span>{role.denominacion}</span>
                        </li>
                        <li>
                            <strong>Descripcion: </strong><span>{role.descripcion}</span>
                        </li>
                    </ul>
                </Card.Description>
            </Card.Content>
            <Card.Content>
                <Card.Meta>
                    {/*<Button size='mini' floated='right' color='red' onClick={() => props.history.push(`/pages/roles/delete/${role.id}`)}>Delete</Button>
                    <Button size='mini' floated='right' color='blue' onClick={() => props.history.push(`/pages/roles/edit/${role.id}`)}>Editar</Button>*/}
                    <Button size='mini' floated='right' onClick={() => props.history.push('/pages/roles')}>Cancelar</Button>
                </Card.Meta>
            </Card.Content>
        </Card>
    );
}

export default RoleDetails;