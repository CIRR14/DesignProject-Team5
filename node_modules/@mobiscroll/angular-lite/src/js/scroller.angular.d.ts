import { MbscScrollerBase, EventEmitter, ElementRef, NgZone, NgControl, MbscInputService, MbscOptionsService } from './frameworks/angular';
import { MbscScrollerOptions } from './core/core';
export declare class MbscScroller extends MbscScrollerBase {
    optionService: MbscOptionsService;
    options: MbscScrollerOptions;
    value: string;
    onChangeEmitter: EventEmitter<string>;
    constructor(initialElement: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    setNewValue(v: string): void;
    ngAfterViewInit(): void;
}
export declare class MbscScrollerComponent extends MbscScroller {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscScrollerOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
