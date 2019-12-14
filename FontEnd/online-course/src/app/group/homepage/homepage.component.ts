import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  yt_iframe_html: any;
  vimeo_iframe_html: any;
  dm_iframe_html: any;
  dn_iframe_html: any;

  vimeoUrl = "https://www.youtube.com/watch?v=Vt6Ks6zKibY&t=2s";
  youtubeUrl = "https://www.youtube.com/watch?v=LmVBhe1AyXU&t=6s";
  dailymotionUrl = "https://www.youtube.com/watch?v=Bw6TOFfvf-M";
  hoaUrl = "https://www.youtube.com/watch?v=X-GCk9dZQwU";

  constructor(
    private embedService: EmbedVideoService
  ) {
    this.yt_iframe_html = this.embedService.embed(this.youtubeUrl);
    this.vimeo_iframe_html = this.embedService.embed(this.vimeoUrl);
    this.dm_iframe_html = this.embedService.embed(this.dailymotionUrl);
    this.dn_iframe_html = this.embedService.embed(this.hoaUrl);
  }

  ngOnInit() {
  }


}
