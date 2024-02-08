import {Fragment} from "react"
import {
    Category,
    Component,
    Variant,
    Palette,
} from "@react-buddy/ide-toolbox"
import {Auctions} from "../components/Auctions";
import {AuctionsIndex} from "../components/AuctionsIndex";
import {default as MuiPaltette} from "@react-buddy/palette-mui";


export const PaletteTree = () => (
    <Palette>
        <MuiPaltette/>
        <Category name="App">
            <Component name="Auctions">
                <Variant>
                    <Auctions/>
                </Variant>
            </Component>
            <Component name="AuctionsIndex">
                <Variant>
                    <AuctionsIndex/>
                </Variant>
            </Component>
        </Category>
    </Palette>
)

export function ExampleLoaderComponent() {
    return (
        <Fragment>Loading...</Fragment>
    )
}