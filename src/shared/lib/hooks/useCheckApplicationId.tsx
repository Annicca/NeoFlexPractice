
import { useNavigate, useParams } from "react-router";
import { useApplicationStore } from "app/store";
import { useEffect } from "react";
import { RoutersPath } from "shared/const";

export const useCheckApplicationId = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const applicationId = useApplicationStore((state) => state.applicationId)

    useEffect(() => {
        if(!applicationId || applicationId != Number(id)) navigate(RoutersPath.home)
    },[])
}