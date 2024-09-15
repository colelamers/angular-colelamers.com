import { Injectable } from '@angular/core';
import { ButtonInfo } from '../objects/buttoninfo';

@Injectable({
    providedIn: 'root',
})
export class ButtonService {
    commonPath: string = "/assets/images/";
    protected buttonList: ButtonInfo[] = 
    [
        {
            include: true,
            hasImage: true,
            hrefSrcText: "mailto:colelamers@gmail.com",
            spanText: "Email Me",
            imgSrcText: `${this.commonPath}bear.gif`
        },
        {
            include: true,
            hasImage: true,
            hrefSrcText: "https://www.amazon.com/Lonerism-Thriving-Modern-World-Alone/dp/B0BZF9NFQJ/",
            spanText: "Buy My Book!",
            imgSrcText: ``
        },
        {
            include: true,
            hasImage: true,
            hrefSrcText: "https://www.linkedin.com/in/colelamers/",
            spanText: "LinkedIn",
            imgSrcText: `${this.commonPath}linkedin.svg`
        },
        {
            include: true,
            hasImage: true,
            hrefSrcText: "https://github.com/colelamers",
            spanText: "GitHub",
            imgSrcText: `${this.commonPath}github.ico`

        },
        {
            include: true,
            hasImage: true,
            hrefSrcText: "https://www.youtube.com/@colelamers",
            spanText: "Youtube",
            imgSrcText: `${this.commonPath}youtube.ico`
        }
    ];
    getAllButtons(): ButtonInfo[] {
        return this.buttonList;
    }
}