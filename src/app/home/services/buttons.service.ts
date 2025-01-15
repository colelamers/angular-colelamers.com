import { Injectable } from '@angular/core';
import { ButtonInfo } from '../objects/buttoninfo';

@Injectable({
    providedIn: 'root',
})
export class ButtonService {
    commonPath: string = "/assets/images/";
    // todo 1; this should be put in postgres
    protected buttonList: ButtonInfo[] =
        [
            {
                include: true,
                hasImage: false,
                isSupportBtn: false,
                hrefSrcText: "mailto:colelamers@gmail.com",
                spanText: "Email Me",
                imgSrcText: ``,
                cssClass: ""
            },
            {
                include: true,
                hasImage: true,
                isSupportBtn: false,
                hrefSrcText: "https://www.amazon.com/Lonerism-Thriving-Modern-World-Alone/dp/B0BZF9NFQJ/",
                spanText: "Buy My Book!",
                imgSrcText: ``,
                cssClass: ""
            },
            {
                include: true,
                hasImage: true,
                isSupportBtn: false,
                hrefSrcText: "https://www.linkedin.com/in/colelamers/",
                spanText: "LinkedIn",
                imgSrcText: `${this.commonPath}linkedin.svg`,
                cssClass: ""
            },
            {
                include: true,
                hasImage: true,
                isSupportBtn: false,
                hrefSrcText: "https://github.com/colelamers",
                spanText: "GitHub",
                imgSrcText: `${this.commonPath}github.ico`,
                cssClass: ""

            },
            {
                include: true,
                hasImage: true,
                isSupportBtn: false,
                hrefSrcText: "https://www.instagram.com/colelamers",
                spanText: "Instagram",
                imgSrcText: `${this.commonPath}instagram.ico`,
                cssClass: ""
            },
            {
                include: true,
                hasImage: false,
                isSupportBtn: true,
                hrefSrcText: "https://www.gutenberg.org/",
                spanText: "Project Gutenberg",
                imgSrcText: ``,
                cssClass: "supportBtn"
            },
            {
                include: true,
                hasImage: false,
                isSupportBtn: true,
                hrefSrcText: "https://ij.org/",
                spanText: "Institute for Justice",
                imgSrcText: ``,
                cssClass: "supportBtn"
            },
            {
                include: true,
                hasImage: false,
                isSupportBtn: true,
                hrefSrcText: "https://www.fsf.org/",
                spanText: "Free Software Foundation",
                imgSrcText: ``,
                cssClass: "supportBtn"
            },
            {
                include: true,
                hasImage: false,
                isSupportBtn: true,
                hrefSrcText: "https://www.dogsbite.org/",
                spanText: "Dogs Bite",
                imgSrcText: ``,
                cssClass: "supportBtn"
            },
            {
                include: true,
                hasImage: false,
                isSupportBtn: true,
                hrefSrcText: "https://www.linuxmint.com/",
                spanText: "Linux Mint",
                imgSrcText: ``,
                cssClass: "supportBtn"
            },
            {
                include: true,
                hasImage: false,
                isSupportBtn: true,
                hrefSrcText: "https://www.gnucash.org/",
                spanText: "GNUCash",
                imgSrcText: ``,
                cssClass: "supportBtn"
            },
            {
                include: true,
                hasImage: false,
                isSupportBtn: true,
                hrefSrcText: "https://deathwithdignity.org/",
                spanText: "Death With Dignity",
                imgSrcText: ``,
                cssClass: "supportBtn"
            },
        ];
    getAllButtons(): ButtonInfo[] {
        return this.buttonList;
    }
}
