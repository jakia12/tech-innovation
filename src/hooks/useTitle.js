import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Tech Innovation`;
    }, [title]);
}

export default useTitle;