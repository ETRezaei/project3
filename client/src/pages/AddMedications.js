
import React, { useEffect } from "react";
// import { useStoreContext } from "../utils/GlobalState";
import NavAfterLogin from "../components/Nav (afterlogin)/index";
import MedicationForm from "../components/Add Medications/Add Meds Form/index"

function AddMedications({ }) {
    return (
        <>
            <NavAfterLogin />
            <MedicationForm />
        </>
    )
}

export default AddMedications;