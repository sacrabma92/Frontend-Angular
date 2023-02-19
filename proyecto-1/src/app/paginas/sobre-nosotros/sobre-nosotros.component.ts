import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent implements OnInit {

  id?: string;
  slug?: string;
  page?: 1;
  page2?: 2;

  constructor(
    private route: ActivatedRoute,
    private titleServices: Title
  ) { }

  ngOnInit(): void {
    this.cambiarTitle('Sobre-Nosotros');
    // let { id, slug } = this.route.snapshot.params;
    // this.id = id;
    // this.slug = slug;
    let params: any = this.route.snapshot.params;
    let queryparams: any = this.route.snapshot.queryParams;
    this.id = params.id;
    this.slug = params.slug;
    this.page = (queryparams.page) ? queryparams.page : 1;
    this.page2 = (queryparams.page2) ? queryparams.page2 : 2;
    // console.log('id= '+ this.id + '| slug = '+ this.slug);
  }

  public cambiarTitle( titulo: string ){
    this.titleServices.setTitle((titulo));
  }
}
