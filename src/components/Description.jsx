import { useForm } from "react-hook-form";
import { useRegFormContext } from "../providers/RegFormProvider";
import { useEffect } from "react";

const Description = () => {

    const [, dispatch] = useRegFormContext();

    useEffect(() => {
        dispatch({ type: 'CHANGE_PERCENT', data: 84 })
    }, []);

    const { register, handleSubmit, formState: { isValid } } = useForm();

    const onSubmit = (values) => {
        if (isValid) {
            dispatch({ type: 'SET_DESCRIPTION', data: values.description });
            dispatch({ type: 'CHANGE_PERCENT', data: 100 })
        }
    }

    return (
        <>
            <h2>Descripción</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Escribe tu descripción</label>
                    <textarea className="form-control" cols="30" rows="10" {...register('description')}></textarea>
                </div>
                <input type="submit" className="btn btn-info" value="Siguiente" />
            </form>
        </>
    );
}

export default Description;