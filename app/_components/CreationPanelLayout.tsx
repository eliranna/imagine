import { ReactNode } from "react"
import Grid from "./base/Grid"

const CreationPanelLayout = ({controllerPanel, resultsPanel}: {controllerPanel: ReactNode, resultsPanel: ReactNode}) => {
    return (
        <Grid>
            <div className="col-start-1 col-span-4">
                {controllerPanel}
            </div>
            <div className="col-start-6 col-span-7">
                {resultsPanel}
            </div>
        </Grid>
    )
}

export default CreationPanelLayout