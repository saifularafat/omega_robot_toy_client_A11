import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} Omega Robot Kids`

    },[title])
};

export default useTitle;