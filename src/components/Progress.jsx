import { useRegFormContext } from "../providers/RegFormProvider";

const Progress = () => {
    const [state] = useRegFormContext();

    return (
        <div className="progress mb-3">
            <div className="progress-bar" role="progressbar" style={{ width: `${state.percent}%` }} aria-valuemin={state.percent} aria-valuemax="100">{state.percent}%</div>
        </div >
    )
}

export default Progress;