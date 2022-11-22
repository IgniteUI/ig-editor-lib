import { ContentManager } from "./ContentManager";
import WPF from './data/templates/WPF.json';
import WebComponents from './data/templates/WebComponents.json';
import Blazor from './data/templates/Blazor.json';
import React from './data/templates/React.json';
import Angular from './data/templates/Angular.json';

export class ExportManager {
    private _exportElement: any;
    private _contentManager: ContentManager;

    public constructor(exportElement: any, contentManager: ContentManager) {
        this._exportElement = exportElement;
        this._exportElement.addEventListener("igcChange", (ev: any) => {
            var item = ev.detail;
            this.onExport(item.textContent!);
        });
        this._contentManager = contentManager;
    }

    private onExport(platform: string) {
        console.log("exporting: " + platform);

        var folderTemplate = "";
        switch (platform) {
            case 'WPF':
                folderTemplate = JSON.stringify(WPF);
                break;
            case 'WebComponents':
            case 'Web Components':
                folderTemplate = JSON.stringify(WebComponents);
                break;
            case 'Angular':
                folderTemplate = JSON.stringify(Angular);
                break;
            case 'Blazor':
                folderTemplate = JSON.stringify(Blazor);
                break;
            case 'React':
                folderTemplate = JSON.stringify(React);
        }
        this._contentManager.sendExportMessage(platform, folderTemplate);
    }
}