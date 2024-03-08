export interface PointDrawing {
    point: IPoint
    draw?: (userId: string, point: number) => void
    removeDraw?: (userId: string) => void
}

export interface IPoint {
    userId: string;
    point: IPos[] ;
}

export interface IPos {
    x: number;
    y: number;
}