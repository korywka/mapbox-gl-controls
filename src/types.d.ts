export type Strings = { [key: string]: string };

export type ButtonOptions = {
    icon?: SVGElement
    text?: string
    title?: string
};

export interface BaseOptions {
    strings?: Strings
}

export interface CompassOptions extends BaseOptions {
    instant?: boolean
}

export interface InspectOptions extends BaseOptions {
    console?: boolean
}

export interface LanguageOptions {
    supportedLanguages?: string[]
    language?: string
    getLanguageKey?: (language: string) => string
    excludedLayerIds?: string[]
}

export interface RulerOptions extends BaseOptions {
    units?: import('@turf/helpers').Units
    labelFormat: (n: number) => string
    markerLayout: import('mapbox-gl').SymbolLayout
    markerPaint: import('mapbox-gl').SymbolLayout
    markerCSS: Partial<CSSStyleDeclaration>
    lineLayout: import('mapbox-gl').LineLayout
    linePaint: import('mapbox-gl').LinePaint
}

type StyleOptionsItem = {
    label: string
    styleName: string
    styleUrl: string
};

export interface StylesOptions {
    styles?: StyleOptionsItem[]
    onChange?: (style: StyleOptionsItem) => void
}

export interface TooltipOptions {
    getContent: (event: import('mapbox-gl').MapMouseEvent) => string
    layer?: string
}

export interface ZoomOptions extends BaseOptions {
}
