import { useRegFormContext } from "../providers/RegFormProvider";

const ProfileCard = () => {

    const [state] = useRegFormContext();

    return (
        <div className="profile-card">
            <h3>Perfil de usuario</h3>
            <hr />
            <h4>Datos comunes</h4>
            {state.common &&
                <>
                    <p>Nombre:  {state.common.name} {state.common.surname}</p>
                    <p>Email: {state.common.email}</p>
                </>
            }
            <h4>Dirección</h4>
            {state.address &&
                <>
                    <p>Calle: {state.address.street} {state.address.number}</p>
                    <p>Código Postal: {state.address.postal_code}</p>
                </>
            }
            <h4>Descripción</h4>
            {state.description &&
                <p>{state.description}</p>
            }
        </div>
    )
}

export default ProfileCard;