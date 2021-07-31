import Tabs from "../ReuseableComponents/Tabs";
import {useState} from "react";
import ScoreCardContent from "./ScoreCardContent";
import {FormProvider, useForm, useFormContext} from "react-hook-form";


const styles = {
    color:           '#68C222',
    width:           '33.3%',
    backgroundColor: '#FFFFFF',
    fontSize:        15,
    minWidth:        '50%', textTransform: 'none'
};


const ScoreCard = ({scoreCardFormRef}) => {
    const [golferStats, setGolferStats] = useState();
    const methods = useForm();
    const {handleSubmit, reset, getValues} = methods;
    const onSubmit = data => console.log(getValues());
    const handleChange = (value) => {
        setGolferStats({...getValues(), ...value})
    }

    const tabs = [
        {
            key:     '1',
            label:   "Score Card",
            content: (<ScoreCardContent
                golferStats={golferStats}
                setGolferStats={handleChange}
            />)
        },
        {
            key:     '2',
            label:   "Misc.",
            content: (
                         <div>misc</div>
                     )
        }
    ]

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Tabs
                    tabs={tabs}
                    indicatorColor={'primary'}
                    styling={styles}
                    tabMenuColor={'#FFFFFF'}
                />
            </form>
        </FormProvider>
    );
}

export default ScoreCard;
