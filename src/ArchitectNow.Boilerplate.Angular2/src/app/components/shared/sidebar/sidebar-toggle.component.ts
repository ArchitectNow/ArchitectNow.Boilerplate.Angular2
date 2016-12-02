import { Component, HostBinding, HostListener } from "@angular/core";
import { SidebarService } from "./sidebar.service";

@Component({
    selector: 'sidebar-toggle',
    templateUrl: './sidebar-toggle.component.html',
    styleUrls: ['./sidebar-toggle.component.scss'],
})
export class SidebarToggleComponent {

    @HostListener('click')
    toggle () { this.sidebar.toggle(); }

    @HostBinding('class.opened')
    get isOpened () { return this.sidebar.isOpened }

    constructor (public sidebar: SidebarService) {}
}