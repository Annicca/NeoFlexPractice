import { useState } from "react";
import { Button, Input, Loader, Select } from "shared/ui";
import { useForm } from "react-hook-form";
import { PrescoringAmount } from "features";
import { TPrescoring } from "shared/types";
import { MIN_AMOUNT, TERMS } from "shared/const";
import { lib } from "shared/lib";
import { api } from "shared/api/api";

import "./StepFirstPrescoring.scss";

export const StepFirstPrescoring = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { register, handleSubmit, watch, setValue, formState: { errors, dirtyFields}} = useForm<TPrescoring>({mode: "onBlur", defaultValues: {
        term: TERMS[0].value as number,
        amount: MIN_AMOUNT
    }});

    const onSubmit = async (data: TPrescoring) => {
        setLoading(true);
        setError(null);
        try {
            await api.apllicatioPrescoring(data);
        } catch {
            setError("Простите, нам не удалось отправить вашу заявку");
        } finally {
            setLoading(false);
        }
    }

    const getAmount = Number(watch("amount"))

    const setAmount = (amount: number) => {
       setValue("amount", amount)
    }

    return(
        <form className="prescoring" onSubmit={handleSubmit(onSubmit)}>
            <PrescoringAmount register={register} amount={getAmount} handleAmount = {setAmount}/>
            <div className="prescoring__contact">
                <div className="prescoring__subtitle">Contact Information</div>
                <div className="prescoring__inputs">
                    <Input 
                        {...register("lastName", 
                            { 
                                required: {value: true, message: "Enter your last name"}
                            }
                        )}
                        type="text"
                        name="lastName"
                        error={errors.lastName}
                        isDirty={!!dirtyFields.lastName}
                        isRequired
                        label="Your last name"
                        placeholder="For Example Doe"
                        classNameContainer="prescoring__input"
                    />
                    <Input 
                        {...register("firstName", 
                            { 
                                required: {value: true, message: "Enter your first name"} 
                            }
                        )}
                        type="text"
                        isRequired
                        isDirty = {!!dirtyFields.firstName}
                        error={errors.firstName}
                        label="Your first name"
                        placeholder="For Example Jhon"
                        classNameContainer="prescoring__input"
                    />
                    <Input 
                        {...register("middleName")}
                        type="text"
                        error={errors.middleName}
                        label="Your patronymic"
                        placeholder="For Example Victorovich"
                        classNameContainer="prescoring__input"
                    />
                    <Select 
                        {...register("term")}
                        isRequired
                        error={errors.term}
                        label="Select term"
                        options={TERMS}
                        defaultValue={TERMS[0].value}
                    />
                    <Input 
                        {...register("email", 
                            { 
                                required: {value: true, message: "Enter email address"},
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Incorrect email address",
                                },
                            }
                        )}
                        type="email"
                        error={errors.email}
                        isRequired
                        isDirty = {!!dirtyFields.email}
                        label="Your email"
                        placeholder="test@gmail.com"
                        classNameContainer="prescoring__input"
                    />
                    <Input 
                        {...register("birthdate", 
                            { 
                                required: {value: true, message: "Enter date of birth"},
                                pattern: {
                                    value: /^\d{4}-\d{2}-\d{2}$/,
                                    message: "Incorrect date of birth",
                                },
                                validate: (value) => lib.validateAge(value as string)
                            },
                        )}
                        type="text"
                        error={errors.birthdate}
                        isRequired
                        isDirty = {!!dirtyFields.birthdate}
                        label="Your date of birth"
                        placeholder="Select Date and Time"
                        classNameContainer="prescoring__input"
                    />
                    <Input 
                        {...register("passportSeries", 
                            { 
                                required: {value: true, message: "Enter your passport series"} ,
                                minLength: {value: 4, message: "The series must be 4 digits"},
                                maxLength: {value: 4, message: "The series must be 4 digits"}
                            }
                        )}
                        type="number"
                        error={errors.passportSeries}
                        isRequired
                        isDirty = {!!dirtyFields.passportSeries}
                        label="Your passport series"
                        placeholder="0000"
                        classNameContainer="prescoring__input"
                    />
                    <Input 
                        {...register("passportNumber", 
                            { 
                                required: {value: true, message: "Enter your passport number"} ,
                                minLength: {value: 6, message: "The number must be 4 digits"},
                                maxLength: {value: 6, message: "The number must be 4 digits"}
                            }
                        )}
                        type="number"
                        error={errors.passportNumber}
                        isRequired
                        isDirty = {!!dirtyFields.passportNumber}
                        label="Your passport number"
                        placeholder="000000"
                        classNameContainer="prescoring__input"
                    />
                </div>
            </div>
            {error && <div className="error-text">{error}</div>}
            {loading ? 
                <Loader />
                :
                <Button type="submit" className="prescoring__continue">Continue</Button>
            }
        </form>
    )
}