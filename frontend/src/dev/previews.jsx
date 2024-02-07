import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import {AuctionsIndex} from "../components/AuctionsIndex";
import {Auctions} from "../components/Auctions";
import {AuctionDetails} from "../components/AuctionDetails";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/AuctionsIndex">
                <AuctionsIndex/>
            </ComponentPreview>
            <ComponentPreview path="/Auctions">
                <Auctions/>
            </ComponentPreview>
            <ComponentPreview path="/PaletteTree">
                <PaletteTree/>
            </ComponentPreview>
            <ComponentPreview path="/AuctionDetails">
                <AuctionDetails/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews