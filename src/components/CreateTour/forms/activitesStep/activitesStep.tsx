import React, { useMemo, useState } from "react";
import ActivitiesCard from "./activitiesCard/card";
import scss from "./activitiesStep.module.scss";
import { activitiesData } from "../../../../constants/Activities";

interface IActivities {
    dispatch: any;
}

const ActivitesStep: React.FC<IActivities> = ({ dispatch }) => {
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(activitiesData.length / itemsPerPage);

    const getPaginatedItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return activitiesData.slice(startIndex, endIndex);
    }

    const handlePageChange = (pageNumber: number,) => {
        setCurrentPage(pageNumber)
    }

    const renderCard = useMemo(() => getPaginatedItems().map((el: any, i) => <ActivitiesCard i={i} index={i} key={`${el}_${i}`} {...el} dispatch={dispatch} title={el} />), [getPaginatedItems, handlePageChange])

    const paginatedButtons = useMemo(() => Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <button style={pageNumber == currentPage ? { width: "50px", height: "50px", border: "1px solid #333333", borderRadius: "50%", backgroundColor: "#8389C9", color: "white" } : {}} key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
            {pageNumber}
        </button>
    )), [totalPages, currentPage])

    return (
        <div className={scss.wrapper}>
            <header>
                <h1>Activities</h1>
            </header>
            <main>
                {renderCard}
                <div className={scss.pagination}>
                    {paginatedButtons}
                </div>
            </main>
            <div className={scss.purple}></div>
            <div className={scss.ownVersion}>
                <div className={scss.header}>
                    <h1>Your own version</h1>
                </div>
                <textarea onChange={(e) => dispatch({ type: "addOwnActivities", payload: e })}>
                </textarea>
            </div>
        </div>
    )
}

export default ActivitesStep;