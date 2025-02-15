import { Coords } from "../Shape"
import { Text } from "./Text"

export enum TextStateNames {
    Created = 'created',
    WithContent = 'withContent',
    WithStartCoords = 'withStartCoords'
}

export abstract class TextState {
    protected stateName: TextStateNames
    protected text: Text

    public setContext(text: Text) {
        this.text = text;
    }

    public abstract setContent(content: string): void; 

    public abstract clickHandler(coords: Coords): void;
    public abstract moveHandler(coords: Coords): void;
}

export class Created extends TextState {
    constructor() {
        super();

        this.stateName = TextStateNames.Created;
    }

    public setContent(content: string): void {
        this.text.setContent(content);

        this.text.setState(new WithContent());
    }

    public clickHandler(coords: Coords): void {
        this.text.setStartCoords(coords);

        this.text.setState(new WithStartCoords());
    }

    public moveHandler(_: Coords): void {
        return;
    }
}

export class WithStartCoords extends TextState {
    constructor() {
        super();

        this.stateName = TextStateNames.WithStartCoords;
    }

    public setContent(content: string): void {
        this.text.setContent(content);

        this.text.build();
    }

    public clickHandler(_: Coords): void {
        return;
    }

    public moveHandler(_: Coords): void {
        return;
    }
}

export class WithContent extends TextState {
    constructor() {
        super();

        this.stateName = TextStateNames.WithContent;
    }

    public setContent(content: string): void {
        this.text.setContent(content);
    }

    public clickHandler(coords: Coords): void {
        this.text.setStartCoords(coords);

        this.text.build();
    }

    public moveHandler(coords: Coords): void {
        this.text.setStartCoords(coords);
    }
}