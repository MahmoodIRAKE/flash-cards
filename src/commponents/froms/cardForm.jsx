import React, { useEffect } from "react";
import '../../utils/utils.css'
import './form.css'
import { useParams } from 'react-router-dom';
import { putData, getPayload } from '../../api/firebaseApi'
import Spinner1 from "../loader/spinner1";
const CardForm = () => {
    // const [loader,setLaoder]=React.useState(false);
    const [data, setData] = React.useState({
        id: 0,
        answer:'',
        question:''
    });

    const params = useParams();

    useEffect(() => {
        async function getProduct(id) {
            await getPayload(id, setData);
        }
        if (params.id) {
            getProduct(params.id);
        }
    }, [params.id])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        putData(data);
    }

    if (!data) {
        return <Spinner1 />
    }

    return (
        <div className="flexing-center">
            <form className="ui form product-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="field">
                    <label>Question</label>
                    <textarea required value={data.question} type="text" name="question" placeholder="Quetion" onChange={(e) => handleChange(e)} ></textarea>
                </div>
                <div className="field">
                    <label>Answer</label>
                    <textarea required value={data.answer} type="text" name="answer" placeholder="Answer" onChange={(e) => handleChange(e)} ></textarea>
                </div>





                <button className="ui button" type="submit">Insert</button>

            </form>

        </div>
    );
}
export default CardForm;