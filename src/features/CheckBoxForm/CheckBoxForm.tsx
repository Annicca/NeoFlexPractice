import { FC, useState } from "react";
import { CheckBox, ContinueButton } from "shared/ui";
import { useForm } from "react-hook-form";
import { useApplicationStore } from "app/store";

import "./CheckBoxForm.scss";

type TCheckBoxFormProps = {
    label: string,
    asyncFunc: (applicationId: number) => Promise<void>
}

export const CheckBoxForm:FC<TCheckBoxFormProps> = ({label, asyncFunc}) => {
    const [isLoading, setIsloading] = useState(false);
    const applicationId = useApplicationStore((state) => state.applicationId);
    const fetchApplication = useApplicationStore((state) => state.fetchApplication);
    const { register, handleSubmit, formState: {errors, isValid}} = useForm<{isAgree: boolean}>({mode: "onBlur"});

    const onSubmit = async() => {
        setIsloading(true);
        if(applicationId) {
            await asyncFunc(applicationId)
            fetchApplication(applicationId);
        }
        setIsloading(false);
    }
    return(
        <form className="agreement" onSubmit={handleSubmit(onSubmit)}>
            <CheckBox 
                {...register("isAgree", {
                    required: {value: true, message: "You need to agree"}
                })}
                error={errors.isAgree}
                label={label}
            />
            <ContinueButton loading = {isLoading} text = "Send" type="submit" disabled = {!isValid} className="agreement__send"/>
        </form>
    )
}