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
            },
            {
                include: true,
                hasImage: true,
                hrefSrcText: "https://www.instagram.com/colelamers",
                spanText: "Instagram",
                imgSrcText: `${this.commonPath}instagram.ico`
            },
            {
                include: true,
                hasImage: true,
                hrefSrcText: "https://www.threads.net/@colelamers",
                spanText: "Threads",
                imgSrcText: `${this.commonPath}threads.ico`
            },
            {
                include: true,
                hasImage: false,
                hrefSrcText: "https://www.gutenberg.org/donate/",
                spanText: "Support: Project Gutenberg",
                imgSrcText: ``
            },
            {
                include: true,
                hasImage: false,
                hrefSrcText: "https://ij.org/support/",
                spanText: "Support: Institute for Justice",
                imgSrcText: ``
            },
            {
                include: true,
                hasImage: false,
                hrefSrcText: "https://www.fsf.org/associate",
                spanText: "Support: Free Software Foundation",
                imgSrcText: ``
            },
            {
                include: true,
                hasImage: false,
                hrefSrcText: "https://www.dogsbite.org/dogsbite-donate.php",
                spanText: "Support: Dogs Bite",
                imgSrcText: ``
            },
            {
                include: false,
                hasImage: false,
                hrefSrcText: "https://headlines.peta.org/donate/",
                spanText: "Support: PETA",
                imgSrcText: ``
            },
            {
                include: false,
                hasImage: false,
                hrefSrcText: "https://www.nelp.org/about-us/",
                spanText: "Support: National Employment Law Project",
                imgSrcText: ``
            },
        ];
    getAllButtons(): ButtonInfo[] {
        return this.buttonList;
    }
}
