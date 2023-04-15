import React, { useEffect, useMemo, useState } from "react";
import useSights from "../../../../hooks/useSights";
import SightCard from "./card/SightCardCT";
import scss from "./sightsStep.module.scss";
import Preloader from "../../../Preloader/Preloader";

interface ISightStep {
    dispatch: any;
}

const SightsStep: React.FC<ISightStep> = ({ dispatch }) => {
    const { sights, getSights, isLoading } = useSights();
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(sights?.length / itemsPerPage);

    const getPaginatedItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sights?.slice(startIndex, endIndex);
    }

    const handlePageChange = (pageNumber: number,) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        getSights()
    }, [])

    const renderCard = useMemo(() => getPaginatedItems().map((el: any, i) => <SightCard index={i} key={el.tid} {...el} dispatch={dispatch} />), [getPaginatedItems])

    const paginatedButtons = useMemo(() => Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <button style={pageNumber == currentPage ? { width: "50px", height: "50px", border: "1px solid #333333", borderRadius: "50%", backgroundColor: "#8389C9", color: "white" } : {}} key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
            {pageNumber}
        </button>
    )), [totalPages, currentPage])

    if (isLoading) return <Preloader />
    return (
        <div className={scss.wrapper}>
            <header>
                <h1>Which sights do you want to visit?</h1>
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
                <textarea onChange={(e) => dispatch({ type: "addOwnSights", payload: e })}>
                </textarea>
            </div>
        </div>
    )
}

export default SightsStep;