export class TitleLayout {

    // Text fields
    public titleFontSize: number = 18; 
    public textFieldStroke: number = 1;
    public textFieldTopMargin: number = 96;
    public textFieldRowHeight: number = 32;
    public labelFontSize: number = 5;
    public labelOffset: number = -18;
    public textFieldFontSize: number =  12;
    public textFieldOffset: number = -5;
    
    public textFields: any = {};
    
    private _textFieldRows: number[] = [];
    private _textFieldColumns: number[] = [];
     
    
    
    constructor() {
        // Set text field rows
        this._textFieldRows.push(this.textFieldTopMargin);
        this._textFieldRows.push(this._textFieldRows[0] + this.textFieldRowHeight);
        this._textFieldRows.push(this._textFieldRows[1] + this.textFieldRowHeight);

        this._textFieldColumns.push(this.pageMargin);
        this._textFieldColumns.push(this._textFieldColumns[0] + 165);
        this._textFieldColumns.push(this._textFieldColumns[1] + 20);
        this._textFieldColumns.push(this._textFieldColumns[2] + 165 + 20 + 165);
        this._textFieldColumns.push(this._textFieldColumns[3] + 20);
        this._textFieldColumns.push(this._textFieldColumns[4] + 165);

        this.textFields.catalog = {
            y: this._textFieldRows[0],
            x1: this._textFieldColumns[0],
            x2: this._textFieldColumns[1],
        }

        this.textFields.title = {
            y: this._textFieldRows[0],
            x1: this._textFieldColumns[2],
            x2: this._textFieldColumns[3],
        }

        this.textFields.composer = {
            y: this._textFieldRows[0],
            x1: this._textFieldColumns[4],
            x2: this._textFieldColumns[5],
        }

        this.textFields.piston = {
            y: this._textFieldRows[1],
            x1: this._textFieldColumns[0],
            x2: this._textFieldColumns[1],
        }

        this.textFields.base = {
            y: this._textFieldRows[1],
            x1: this._textFieldColumns[2],
            x2: this._textFieldColumns[3],
        }

        this.textFields.measure = {
            y: this._textFieldRows[1],
            x1: this._textFieldColumns[4],
            x2: this._textFieldColumns[5],
        }

        this.textFields.notes = {
            y: this._textFieldRows[2],
            x1: this._textFieldColumns[0],
            x2: this._textFieldColumns[5],
        }
    }    
    
}