import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../services/photo.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

    photos = this.photoService.photos;

    constructor(private photoService: PhotoService) {
    }

    addPhotoToGallery() {
        this.photoService.addNewToGallery();
    }

    async ngOnInit(): Promise<void> {
        await this.photoService.loadSaved();
        this.photos = this.photoService.photos;
    }

}
