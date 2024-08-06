import {useState } from "react";
import { useForm } from "react-hook-form";
import { DEPENDENTS, EMPLOYMENT_STATUSES, GENDERS, MARTIAL_STATUSES, POSITIONS } from "shared/const";
import { lib } from "shared/lib";
import { TScoring } from "shared/types";
import { ContinueButton, ErrorMessage, Input, Select, TitleForm } from "shared/ui";
import { useCheckApplicationId } from "shared/lib";
import { useApplicationStore } from "app/store";
import { api } from "shared/api/api";

import "./ScoringForm.scss";

export const ScoringForm = () => {
    const applicationId = useApplicationStore((state) => state.applicationId);
    const fetchApplication = useApplicationStore((state) => state.fetchApplication);
    const setIsEndRegistrations = useApplicationStore((state) => state.setIsEndRegistrations);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { register, handleSubmit, formState: {dirtyFields, errors}} = useForm<TScoring>({mode: "onBlur", defaultValues: {
        account: "11223344556677889900"
    }});

    const onSubmit = async (data: TScoring) => {
        setLoading(true);
        setError(null);
        try {
            await api.finishRegistration(applicationId as number, data);
            setIsEndRegistrations(true)
            fetchApplication(applicationId as number);
        } catch {
            setError("Простите, нам не удалось отправить ваши данные");
        } finally {
            setLoading(false);
        }
    }

    useCheckApplicationId();

    return(
        <form className="scoring" onSubmit={handleSubmit(onSubmit)}>
            <TitleForm step={2} title="Customize your card" classNameContainer="scoring__title"/>
            <div className="scoring__inputs">
                
                <Select 
                    {...register("gender", {
                        required: {value: true, message: "Select one of the options"}
                    })}
                    isRequired
                    error={errors.gender}
                    label="What's your gender"
                    options={GENDERS}
                    classNameContainer="scoring__input"
                />
                <Select 
                    {...register("maritalStatus", {
                        required: {value: true, message: "Select one of the options"}
                    })}
                    isRequired
                    error={errors.maritalStatus}
                    label="Your marital status"
                    options={MARTIAL_STATUSES}
                    classNameContainer="scoring__input"
                />
                <Select 
                    {...register("dependentAmount", {
                        required: {value: true, message: "Select one of the options"}
                    })}
                    isRequired
                    error={errors.dependentAmount}
                    label="Your number of dependents"
                    options={DEPENDENTS}
                    classNameContainer="scoring__input"
                />
                <Input 
                    {...register("passportIssueDate", 
                        { 
                            required: {value: true, message: "Incorrect date of passport issue date"},
                            pattern: {
                                value: /^\d{4}-\d{2}-\d{2}$/,
                                message: "Incorrect date of passport issue date",
                            },
                            validate: (value) => lib.checkDateMax(value as string, "Incorrect date of passport issue date")
                        },
                    )}
                    type="text"
                    error={errors.passportIssueDate}
                    isRequired
                    isDirty = {!!dirtyFields.passportIssueDate}
                    label="Date of issue of the passport"
                    placeholder="Select Date and Time"
                    classNameContainer="scoring__input"
                />
                <Input 
                    {...register("passportIssueBranch", 
                        { 
                            required: {value: true, message: "The series must be 6 digits"},
                            pattern: {
                                value: /^\d{3}-\d{3}$/,
                                message: "The series must be 6 digits",
                            },
                        },
                    )}
                    type="text"
                    error={errors.passportIssueBranch}
                    isRequired
                    isDirty = {!!dirtyFields.passportIssueBranch}
                    label="Division code"
                    placeholder="The series must be 6 digits"
                    classNameContainer="scoring__input"
                />
            </div>
            <div className="scoring__subtitle">Employment</div>
            <div className="scoring__inputs">
                <Select 
                    {...register("employment.employmentStatus", {
                        required: {value: true, message: "Select one of the options"}
                    })}
                    isRequired
                    error={errors.employment?.employmentStatus}
                    label="Your employment status"
                    options={EMPLOYMENT_STATUSES}
                    classNameContainer="scoring__input"
                />
                <Input 
                    {...register("employment.employerINN", 
                        { 
                            required: {value: true, message: "Department code must be 12 digits"},
                            minLength: {value: 12, message: "Department code must be 12 digits"},
                            maxLength: {value: 12, message: "Department code must be 12 digits"}
                        },
                    )}
                    type="number"
                    min={0}
                    error={errors.employment?.employerINN}
                    isRequired
                    isDirty = {!!dirtyFields.employment?.employerINN}
                    label="Your employer INN"
                    placeholder="000000000000"
                    classNameContainer="scoring__input"
                />
                <Input 
                    {...register("employment.salary", 
                        { 
                            required: {value: true, message: "Enter your salary"},
                        },
                    )}
                    min={0}
                    type="number"
                    error={errors.employment?.salary}
                    isRequired
                    isDirty = {!!dirtyFields.employment?.salary}
                    label="Your salary"
                    placeholder="For example 100 000"
                    classNameContainer="scoring__input"
                />
                <Select 
                    {...register("employment.position", {
                        required: {value: true, message: "Select one of the options"}
                    })}
                    isRequired
                    error={errors.employment?.position}
                    label="Your position"
                    options={POSITIONS}
                    classNameContainer="scoring__input"
                />
                <Input 
                    {...register("employment.workExperienceTotal", 
                        { 
                            required: {value: true, message: "Enter your work experience total"},
                            maxLength: {value: 2, message: "Experience total must be 1 or 2 digits"}
                        },
                    )}
                    type="number"
                    min={0}
                    error={errors.employment?.workExperienceTotal}
                    isRequired
                    isDirty = {!!dirtyFields.employment?.workExperienceTotal}
                    label="Your work experience total"
                    placeholder="For example 10"
                    classNameContainer="scoring__input"
                />
                <Input 
                    {...register("employment.workExperienceCurrent", 
                        { 
                            required: {value: true, message: "Enter your work experience current"},
                            maxLength: {value: 2, message: "Experience current must be 1 or 2 digits"}
                        },
                    )}
                    type="number"
                    error={errors.employment?.workExperienceCurrent}
                    isRequired
                    min={0}
                    isDirty = {!!dirtyFields.employment?.workExperienceCurrent}
                    label="Your work experience current"
                    placeholder="For example 2"
                    classNameContainer="scoring__input"
                />
            </div>
            <ErrorMessage error={error} />
            <ContinueButton loading = {loading} type="submit" />
        </form>
    )
}