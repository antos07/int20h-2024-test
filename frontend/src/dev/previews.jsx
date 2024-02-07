import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import {AuctionsIndex} from "../components/AuctionsIndex";
import {Auctions} from "../components/Auctions";

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
        </Previews>
    )
}

export default ComponentPreviews